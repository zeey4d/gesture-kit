/**
 * Example: Basic Usage of react-native-gesture-kit
 *
 * Demonstrates all core gesture components and the Gesture composer.
 */

import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {
  TapGesture,
  DoubleTapGesture,
  LongPressGesture,
  SwipeRightGesture,
  PanGesture,
  PinchGesture,
  RotationGesture,
  Gesture,
  type TapEvent,
  type SwipeEvent,
  type PanEvent,
  type PinchEvent,
  type RotateEvent,
  type LongPressEvent,
} from 'react-native-gesture-kit';

export default function BasicUsage() {
  const [tapCount, setTapCount] = useState(0);
  const [lastSwipe, setLastSwipe] = useState<string>('None');
  const [panPosition, setPanPosition] = useState({ x: 0, y: 0 });
  const [scale, setScale] = useState(1);
  const [rotation, setRotation] = useState(0);

  // ─── Individual Gesture Components ──────────────────────────────────

  const handleTap = useCallback(() => {
    setTapCount((c) => c + 1);
  }, []);

  const handleDoubleTap = useCallback((e: TapEvent) => {
    Alert.alert('Double Tap!', `At (${Math.round(e.x)}, ${Math.round(e.y)})`);
  }, []);

  const handleLongPress = useCallback((e: LongPressEvent) => {
    Alert.alert('Long Press!', `Duration: ${Math.round(e.duration)}ms`);
  }, []);

  const handleSwipe = useCallback((e: SwipeEvent) => {
    setLastSwipe(`${e.direction} (${Math.round(e.velocity)}px/s)`);
  }, []);

  const handlePanMove = useCallback((e: PanEvent) => {
    setPanPosition({ x: e.translationX, y: e.translationY });
  }, []);

  const handlePinch = useCallback((e: PinchEvent) => {
    setScale(e.scale);
  }, []);

  const handleRotation = useCallback((e: RotateEvent) => {
    setRotation(e.rotation);
  }, []);

  return (
    <GestureHandlerRootView style={styles.container}>
      <Text style={styles.title}>react-native-gesture-kit Demo</Text>

      {/* ── Tap ── */}
      <TapGesture onTap={handleTap}>
        <View style={styles.box}>
          <Text style={styles.boxText}>Tap Me</Text>
          <Text style={styles.boxSubtext}>Count: {tapCount}</Text>
        </View>
      </TapGesture>

      {/* ── Double Tap ── */}
      <DoubleTapGesture onDoubleTap={handleDoubleTap}>
        <View style={[styles.box, styles.boxBlue]}>
          <Text style={styles.boxText}>Double Tap</Text>
        </View>
      </DoubleTapGesture>

      {/* ── Long Press ── */}
      <LongPressGesture onLongPress={handleLongPress} minDuration={800}>
        <View style={[styles.box, styles.boxGreen]}>
          <Text style={styles.boxText}>Long Press (800ms)</Text>
        </View>
      </LongPressGesture>

      {/* ── Swipe ── */}
      <SwipeRightGesture onSwipeRight={handleSwipe}>
        <View style={[styles.box, styles.boxOrange]}>
          <Text style={styles.boxText}>Swipe Right</Text>
          <Text style={styles.boxSubtext}>Last: {lastSwipe}</Text>
        </View>
      </SwipeRightGesture>

      {/* ── Pan ── */}
      <PanGesture onPanMove={handlePanMove}>
        <View
          style={[
            styles.box,
            styles.boxPurple,
            { transform: [{ translateX: panPosition.x }, { translateY: panPosition.y }] },
          ]}
        >
          <Text style={styles.boxText}>Drag Me</Text>
        </View>
      </PanGesture>

      {/* ── Pinch ── */}
      <PinchGesture onPinch={handlePinch}>
        <View style={[styles.box, styles.boxPink, { transform: [{ scale }] }]}>
          <Text style={styles.boxText}>Pinch Zoom</Text>
        </View>
      </PinchGesture>

      {/* ── Rotation ── */}
      <RotationGesture onRotation={handleRotation}>
        <View
          style={[
            styles.box,
            styles.boxTeal,
            { transform: [{ rotate: `${rotation}rad` }] },
          ]}
        >
          <Text style={styles.boxText}>Rotate</Text>
        </View>
      </RotationGesture>

      {/* ── Gesture Composer ── */}
      <Gesture
        tap
        swipe="left"
        pinch
        onTap={() => console.log('Composed: Tap')}
        onSwipe={(e) => console.log('Composed: Swipe', e.direction)}
        onPinch={(e) => console.log('Composed: Pinch', e.scale)}
        priority="simultaneous"
      >
        <View style={[styles.box, styles.boxComposer]}>
          <Text style={styles.boxText}>Gesture Composer</Text>
          <Text style={styles.boxSubtext}>Tap + Swipe + Pinch</Text>
        </View>
      </Gesture>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#0a0a0a',
    alignItems: 'center',
    gap: 12,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 8,
  },
  box: {
    width: 280,
    height: 72,
    borderRadius: 16,
    backgroundColor: '#1a1a2e',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#333',
  },
  boxBlue:     { backgroundColor: '#16213e' },
  boxGreen:    { backgroundColor: '#0f3d0f' },
  boxOrange:   { backgroundColor: '#3d2a0f' },
  boxPurple:   { backgroundColor: '#2d1a4e' },
  boxPink:     { backgroundColor: '#3d0f2a' },
  boxTeal:     { backgroundColor: '#0f3d3d' },
  boxComposer: { backgroundColor: '#1a3d1a', borderColor: '#4ade80' },
  boxText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#e0e0e0',
  },
  boxSubtext: {
    fontSize: 12,
    color: '#888',
    marginTop: 2,
  },
});
