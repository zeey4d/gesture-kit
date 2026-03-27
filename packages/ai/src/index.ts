/**
 * @gesture-kit/ai — AI-powered gesture recognition for React Native.
 *
 * Public API:
 *   - useAIGesture: The single hook for all gesture intelligence
 *   - AIGesture: Optional wrapper component
 *   - Types: AIGestureConfig, AIGestureResult, AIPrediction, AIIntent, AIShapeResult, etc.
 */

// ── Hook ──────────────────────────────────────────────────────────
export { useAIGesture } from './public/useAIGesture';

// ── Component ─────────────────────────────────────────────────────
export { AIGesture } from './public/AIGesture';
export type { AIGestureProps } from './public/AIGesture';

// ── Types ─────────────────────────────────────────────────────────
export type {
  AIGestureConfig,
  AIGestureResult,
  AIGestureHandle,
  AIPrediction,
  AIIntent,
  AIShapeResult,
  GestureType,
  CardinalDirection,
  ShapeTemplate,
  Sensitivity,
} from './public/types';