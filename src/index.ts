/**
 * react-native-gesture-kit
 *
 * A modern, declarative gesture component library for React Native.
 *
 * @packageDocumentation
 */

// ─── Types ────────────────────────────────────────────────────────────────────
export * from './types';
export * from './gestures/basic-touch/types';
export * from './gestures/drag-pan/types';
export * from './gestures/multi-finger/types';
export * from './gestures/transform/types';
export * from './gestures/drawing/types';
export * from './gestures/sequences/types';
export * from './gestures/sensor/types';
export * from './gestures/proximity/types';
export * from './gestures/air/types';
export * from './gestures/body/types';
export * from './gestures/stylus/types';
export * from './gestures/hybrid/types';
export * from './gestures/ai/types';

// ─── All Gestures & Hooks ─────────────────────────────────────────────────────
export * from './gestures';

// ─── Core ─────────────────────────────────────────────────────────────────────
export { GestureComposer, GestureComposer as Gesture } from './core/GestureComposer';
export { createGestureComponent } from './core/createGestureComponent';

// ─── Utilities ────────────────────────────────────────────────────────────────
export { detectSwipeDirection, matchesDirection, magnitude } from './utils/direction';
export { composeGestures } from './utils/compose';
export type { AnyGesture } from './utils/compose';
