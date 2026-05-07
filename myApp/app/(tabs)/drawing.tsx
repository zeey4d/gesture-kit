import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import DrawingWrapper from '../../components/core/DrawingWrapper';
import { Colors } from '../../components/core/Theme';

export default function DrawingTab() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.content}>
        <DrawingWrapper />
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
    paddingBottom: 80, // Space for floating tab bar
  },
});
