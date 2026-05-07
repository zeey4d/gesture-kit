import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, Platform } from 'react-native';
import { Canvas, Path, Skia } from '@shopify/react-native-skia';
import { useSharedValue } from 'react-native-reanimated';
import { Accelerometer } from 'expo-sensors';
import { Colors } from '../core/Theme';
import { 
  DrawCircleGesture, 
  DrawSquareGesture, 
  DrawTriangleGesture, 
  DrawStarGesture, 
  DrawLineGesture, 
  DrawFreehandGesture,
  ShapeData,
  ShapeType
} from '@gesture-kit/canvas';

const DRAWING_COLORS = ['#000000', '#FF3B30', '#34C759', '#007AFF', '#FFCC00', '#AF52DE', '#FF9500', '#FFFFFF'];
const STROKE_WIDTHS = [2, 4, 6, 10, 15];

const DrawingDashboard: React.FC = () => {
  const [shapes, setShapes] = useState<ShapeData[]>([]);
  const [selectedTool, setSelectedTool] = useState<ShapeType>('circle');
  const [selectedColor, setSelectedColor] = useState<string>(DRAWING_COLORS[0]);
  const [selectedWidth, setSelectedWidth] = useState<number>(STROKE_WIDTHS[1]);
  const [isColorSelectOpen, setIsColorSelectOpen] = useState<boolean>(false);
  const [isWidthSelectOpen, setIsWidthSelectOpen] = useState<boolean>(false);
  const currentPath = useSharedValue<any>(Skia.Path.Make());

  const onComplete = (path: any) => {
    setShapes(prev => [...prev, { 
      type: selectedTool, 
      path: path, 
      color: selectedColor, 
      strokeWidth: selectedWidth 
    }]);
  };

  React.useEffect(() => {
    let subscription: any;
    
    const subscribe = async () => {
      if (Platform.OS === 'web') return;
      
      try {
        const isAvailable = await Accelerometer.isAvailableAsync();
        if (!isAvailable) return;

        subscription = Accelerometer.addListener(accelerometerData => {
          const { x, y, z } = accelerometerData;
          const acceleration = Math.sqrt(x * x + y * y + z * z);
          
          // Shake detection threshold
          if (acceleration > 2.5) {
            setShapes([]); // Clear canvas on shake
          }
        });
        Accelerometer.setUpdateInterval(100);
      } catch (error) {
        console.log('Accelerometer not available', error);
      }
    };

    subscribe();
    return () => {
      subscription && subscription.remove();
    };
  }, []);



  const tools: { type: ShapeType; icon: string; label: string }[] = [
    { type: 'circle', icon: '⭕', label: 'دائرة' },
    { type: 'square', icon: '⬜', label: 'مربع' },
    { type: 'triangle', icon: '🔺', label: 'مثلث' },
    { type: 'star', icon: '⭐', label: 'نجمة' },
    { type: 'line', icon: '📏', label: 'خط' },
    { type: 'freehand', icon: '✍️', label: 'حر' },
  ];

  const renderActiveGesture = () => {
    const props = { currentPath, onComplete };
    switch (selectedTool) {
      case 'circle': return <DrawCircleGesture {...props} />;
      case 'square': return <DrawSquareGesture {...props} />;
      case 'triangle': return <DrawTriangleGesture {...props} />;
      case 'star': return <DrawStarGesture {...props} />;
      case 'line': return <DrawLineGesture {...props} />;
      case 'freehand': return <DrawFreehandGesture {...props} />;
      default: return null;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.toolbarContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.toolbar}>
          {tools.map(tool => (
            <TouchableOpacity 
              key={tool.type}
              onPress={() => setSelectedTool(tool.type)}
              style={[styles.toolBtn, selectedTool === tool.type && styles.toolBtnActive]}
            >
              <Text style={styles.toolIcon}>{tool.icon}</Text>
              <Text style={styles.toolLabel}>{tool.label}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View style={styles.selectsContainer}>
        {/* Color Select */}
        <View style={styles.selectWrapper}>
          <TouchableOpacity 
            style={styles.selectBtn} 
            onPress={() => { setIsColorSelectOpen(!isColorSelectOpen); setIsWidthSelectOpen(false); }}
          >
            <View style={[styles.selectColorPreview, { backgroundColor: selectedColor }]} />
            <Text style={styles.selectText}>اللون</Text>
            <Text style={styles.selectArrow}>{isColorSelectOpen ? '▲' : '▼'}</Text>
          </TouchableOpacity>
          
          {isColorSelectOpen && (
            <View style={styles.dropdownMenu}>
              {DRAWING_COLORS.map(color => (
                <TouchableOpacity
                  key={color}
                  onPress={() => { setSelectedColor(color); setIsColorSelectOpen(false); }}
                  style={styles.dropdownItem}
                >
                  <View style={[styles.colorBtn, { backgroundColor: color }, selectedColor === color && styles.colorBtnActive]} />
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>

        {/* Width Select */}
        <View style={styles.selectWrapper}>
          <TouchableOpacity 
            style={styles.selectBtn} 
            onPress={() => { setIsWidthSelectOpen(!isWidthSelectOpen); setIsColorSelectOpen(false); }}
          >
            <View style={styles.selectWidthPreview}>
              <View style={{ width: selectedWidth, height: selectedWidth, borderRadius: selectedWidth/2, backgroundColor: '#FFF' }} />
            </View>
            <Text style={styles.selectText}>السُمك</Text>
            <Text style={styles.selectArrow}>{isWidthSelectOpen ? '▲' : '▼'}</Text>
          </TouchableOpacity>
          
          {isWidthSelectOpen && (
            <View style={styles.dropdownMenu}>
              {STROKE_WIDTHS.map(width => (
                <TouchableOpacity
                  key={width}
                  onPress={() => { setSelectedWidth(width); setIsWidthSelectOpen(false); }}
                  style={styles.dropdownItem}
                >
                  <View style={[styles.widthBtn, selectedWidth === width && styles.widthBtnActive]}>
                    <View style={{ width: width + 4, height: width + 4, borderRadius: (width+4)/2, backgroundColor: selectedWidth === width ? Colors.cyan : '#FFF' }} />
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>
      </View>

      <View style={styles.canvasContainer}>
        <Canvas style={styles.canvas}>
          {shapes.map((shape, i) => (
            <Path 
              key={i} 
              path={shape.path} 
              color={shape.color} 
              style="stroke" 
              strokeWidth={shape.strokeWidth} 
              strokeCap="round"
            />
          ))}
          <Path 
            path={currentPath} 
            color={selectedColor} 
            style="stroke" 
            strokeWidth={selectedWidth} 
            strokeCap="round"
          />
        </Canvas>
        <View style={StyleSheet.absoluteFill}>
          {renderActiveGesture()}
        </View>
      </View>

      <TouchableOpacity style={styles.clearBtn} onPress={() => setShapes([])}>
        <Text style={styles.clearBtnText}>مسح اللوحة</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.black },
  toolbarContainer: { height: 90, backgroundColor: 'rgba(255,255,255,0.03)', borderBottomWidth: 1, borderBottomColor: 'rgba(255,255,255,0.05)', paddingTop: 5 },
  toolbar: { paddingHorizontal: 15, alignItems: 'center', gap: 10 },
  toolBtn: { width: 65, height: 65, borderRadius: 15, backgroundColor: 'rgba(255,255,255,0.05)', justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: 'transparent' },
  toolBtnActive: { borderColor: Colors.cyan, backgroundColor: 'rgba(0,250,255,0.1)' },
  toolIcon: { fontSize: 24, marginBottom: 2 },
  toolLabel: { color: '#FFF', fontSize: 10, fontWeight: 'bold' },
  selectsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 15,
    marginTop: 15,
    zIndex: 100, 
    elevation: 100,
  },
  selectWrapper: {
    position: 'relative',
    zIndex: 100,
    elevation: 100,
  },
  selectBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(30, 30, 35, 0.9)',
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
    gap: 8,
  },
  selectColorPreview: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.3)',
  },
  selectWidthPreview: {
    width: 16,
    height: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  selectArrow: {
    color: Colors.textMuted,
    fontSize: 10,
  },
  dropdownMenu: {
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    marginTop: 8,
    backgroundColor: 'rgba(20, 20, 25, 0.98)',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
    paddingVertical: 15,
    gap: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 15,
    elevation: 101,
    zIndex: 101,
  },
  dropdownItem: {
    padding: 5,
  },
  colorBtn: { width: 32, height: 32, borderRadius: 16, borderWidth: 2, borderColor: 'rgba(255,255,255,0.2)' },
  colorBtnActive: { borderColor: Colors.cyan, transform: [{ scale: 1.15 }], shadowColor: Colors.cyan, shadowOpacity: 0.5, shadowRadius: 5 },
  widthBtn: { width: 32, height: 32, borderRadius: 16, backgroundColor: 'rgba(255,255,255,0.05)', justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: 'transparent' },
  widthBtnActive: { borderColor: Colors.cyan, backgroundColor: 'rgba(0,250,255,0.1)' },
  canvasContainer: { 
    width: 350,
    height: 350,
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 25, 
    backgroundColor: '#FFF', 
    overflow: 'hidden', 
    borderWidth: 4, 
    borderColor: '#FF3B30',
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  canvas: { flex: 1 },
  clearBtn: { position: 'absolute', bottom: 30, right: 30, backgroundColor: '#FF3B30', paddingHorizontal: 20, paddingVertical: 12, borderRadius: 15 },
  clearBtnText: { color: '#FFF', fontWeight: 'bold' }
});

export default DrawingDashboard;
