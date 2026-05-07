import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import ProximityDashboard from '../../components/proximity/ProximityDashboard';
import { Colors } from '../../components/core/Theme';

export default function ProximityTab() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.content}>
        <ProximityDashboard />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
  },
  content: {
    flex: 1,
    paddingBottom: 80,
    paddingTop: 0,
  },
});
