import React from 'react';
import { Tabs } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { StyleSheet, Platform, View } from 'react-native';
import { Colors } from '../../components/core/Theme';
import { useAdaptiveBrightness } from '../../components/sensors/hooks/useAdaptiveBrightness';

export default function TabLayout() {
  const { isDark, illuminance } = useAdaptiveBrightness();

  return (
    <View style={{ flex: 1 }}>
      <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarBackground: () => (
          <BlurView intensity={80} tint="dark" style={StyleSheet.absoluteFillObject} />
        ),
        tabBarActiveTintColor: Colors.cyan, 
        tabBarInactiveTintColor: Colors.textMuted,
        tabBarLabelStyle: styles.tabBarLabel,
        tabBarItemStyle: styles.tabBarItem,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'الرئيسية',
          tabBarIcon: ({ color, focused }) => (
            <View style={focused ? styles.activeIconBg : null}>
              <MaterialCommunityIcons name={focused ? 'view-dashboard' : 'view-dashboard-outline'} size={34} color={color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="drawing"
        options={{
          title: 'الرسم',
          tabBarIcon: ({ color, focused }) => (
            <View style={focused ? styles.activeIconBg : null}>
              <MaterialCommunityIcons name={focused ? 'palette' : 'palette-outline'} size={34} color={color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="proximity"
        options={{
          title: 'الحساس',
          tabBarIcon: ({ color, focused }) => (
            <View style={focused ? styles.activeIconBg : null}>
              <MaterialCommunityIcons name="radar" size={34} color={color} />
            </View>
          ),
        }}
      />
      </Tabs>
      
      {/* Adaptive Lighting Overlay */}
      <View 
        pointerEvents="none"
        style={[
          StyleSheet.absoluteFill, 
          { 
            backgroundColor: '#000', 
            opacity: isDark ? 0 : Math.min(0.2, (illuminance - 50) / 1000) 
          }
        ]} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    bottom: Platform.OS === 'ios' ? 24 : 16,
    left: 20, // Keep it wide
    right: 20,
    borderRadius: 35,
    borderTopWidth: 0,
    elevation: 20,
    height: 90, // Keep it large
    backgroundColor: 'rgba(10, 10, 12, 0.9)',
    shadowColor: Colors.cyan,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.4,
    shadowRadius: 25,
    paddingBottom: Platform.OS === 'ios' ? 25 : 12,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  tabBarLabel: {
    fontSize: 14,
    fontWeight: '900',
    marginTop: 2,
  },
  tabBarItem: {
    paddingTop: 12,
  },
  activeIconBg: {
    padding: 2,
    shadowColor: Colors.cyan,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 10,
  }
});
