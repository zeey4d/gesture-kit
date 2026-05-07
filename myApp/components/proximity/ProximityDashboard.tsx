import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';
// Gestures from Library
import {
  HandNearGesture,
  HandAwayGesture,
  HoverGesture
} from '@gesture-kit/sensors';
import { Colors } from '../core/Theme';

type ProximityTool = 'near' | 'away' | 'hover';

const ProximityDashboard: React.FC = () => {
  const [selectedTool, setSelectedTool] = useState<ProximityTool>('near');

  const tools: { type: ProximityTool; icon: string; label: string }[] = [
    { type: 'near', icon: '🚨', label: 'قريب (إنذار)' },
    { type: 'away', icon: '🛡️', label: 'بعيد (أمان)' },
    { type: 'hover', icon: '🛸', label: 'حوم (Hover)' },
  ];

  const alarmSound = require('../../assets/ANALOG_WATCH_ALARM_BEEP_SOUND_EFFECT(48k).m4a');

  const renderActiveGesture = () => {
    switch (selectedTool) {
      case 'near': return <HandNearGesture soundAsset={alarmSound} />;
      case 'away': return <HandAwayGesture />;
      case 'hover': return <HoverGesture />;
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

      <View style={styles.displayArea}>
        <Text style={styles.sectionTitle}>
          {tools.find(t => t.type === selectedTool)?.label}
        </Text>
        <View style={styles.gestureContainer}>
          {renderActiveGesture()}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.black },
  toolbarContainer: {
    height: 100,
    backgroundColor: 'rgba(255,255,255,0.03)',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.05)',
    paddingTop: 10
  },
  toolbar: { paddingHorizontal: 15, alignItems: 'center', gap: 12 },
  toolBtn: {
    width: 80,
    height: 70,
    borderRadius: 15,
    backgroundColor: 'rgba(255,255,255,0.05)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'transparent'
  },
  toolBtnActive: {
    borderColor: Colors.cyan,
    backgroundColor: 'rgba(0,250,255,0.1)'
  },
  toolIcon: { fontSize: 24, marginBottom: 4 },
  toolLabel: { color: '#FFF', fontSize: 10, fontWeight: 'bold', textAlign: 'center' },
  displayArea: { flex: 1, padding: 20 },
  sectionTitle: { color: Colors.textSecondary, fontSize: 16, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  gestureContainer: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.02)',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.05)',
    overflow: 'hidden'
  }
});

export default ProximityDashboard;
