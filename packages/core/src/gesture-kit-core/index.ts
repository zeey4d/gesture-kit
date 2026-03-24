/**
 * gesture-kit-core
 *
 * Core types, utilities, and composition for gesture-kit.
 *
 * @packageDocumentation
 */

// ─── Types ──────────────────────────────────────────────────────────
export * from './types';

// ─── Core ───────────────────────────────────────────────────────────
export { GestureComposer, GestureComposer as Gesture } from './core/GestureComposer';
export { createGestureComponent } from './core/createGestureComponent';

// ─── Utilities ──────────────────────────────────────────────────────
export { detectSwipeDirection, matchesDirection, magnitude } from './utils/direction';
export { composeGestures } from './utils/compose';
export type { AnyGesture } from './utils/compose';
