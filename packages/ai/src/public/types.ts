/**
 * Public type definitions for @gesture-kit/ai.
 * This is the ONLY types file consumers should import from.
 */

import type { GestureType } from '../engine/GestureClassifier';
import type { CardinalDirection } from '../utils/math';
import type { ShapeTemplate } from '../engine/ShapeRecognizer';
import type { IntentMap } from '../engine/IntentDetector';
import type { Sensitivity } from '../utils/constants';
import type { GestureFeatures } from '../engine/FeatureExtractor';

// ── Re-exports for convenience ────────────────────────────────────

export type { GestureType, CardinalDirection, ShapeTemplate, Sensitivity };

// ── Config ────────────────────────────────────────────────────────

export interface AIGestureConfig {
  // ── Callbacks ──────────────────────────────────────────────────
  /** Called when a gesture is fully recognized */
  onGesture?: (result: AIGestureResult) => void;
  /** Called when a gesture is predicted early (before completion) */
  onPredict?: (result: AIPrediction) => void;
  /** Called when an intent is detected from a gesture */
  onIntent?: (result: AIIntent) => void;
  /** Called when a drawn shape is recognized */
  onShape?: (result: AIShapeResult) => void;

  // ── Feature Flags ──────────────────────────────────────────────
  /** Enable intent detection (default: false) */
  intent?: boolean;
  /** Enable early gesture prediction (default: false) */
  predict?: boolean;
  /** Enable adaptive learning from user behavior (default: false) */
  adaptive?: boolean;
  /** Enable shape/drawing recognition (default: false) */
  shapes?: boolean;

  // ── Configuration ──────────────────────────────────────────────
  /** UI context for intent detection (e.g., 'card-list', 'media-player') */
  context?: string;
  /** User ID for scoping adaptive memory per user */
  userId?: string;
  /** Custom shape templates for recognition */
  customShapes?: ShapeTemplate[];
  /** Custom intent mappings (gesture → intent per context) */
  intentMap?: IntentMap;
  /** Overall gesture sensitivity (default: 'normal') */
  sensitivity?: Sensitivity;

  // ── Flags ──────────────────────────────────────────────────────
  /** Enable debug mode with console logging (default: false) */
  debug?: boolean;
  /** Whether gesture detection is enabled (default: true) */
  enabled?: boolean;
}

// ── Result Types ──────────────────────────────────────────────────

export interface AIGestureResult {
  /** Recognized gesture type */
  type: GestureType;
  /** Confidence score (0.0 – 1.0) */
  confidence: number;
  /** Direction of the gesture (for swipe/pan) */
  direction?: CardinalDirection;
  /** Velocity of the gesture in px/s */
  velocity?: number;
  /** Distance traveled in px */
  distance?: number;
  /** Duration in ms */
  duration?: number;
  /** Final touch position */
  position: { x: number; y: number };
  /** Timestamp of the gesture */
  timestamp: number;
  /** Raw features (only in debug mode) */
  features?: GestureFeatures;
}

export interface AIPrediction {
  /** Predicted gesture type */
  predicted: string;
  /** Prediction confidence (lower than final classification) */
  confidence: number;
  /** Predicted direction (for swipe/pan) */
  direction?: string;
}

export interface AIIntent {
  /** Detected semantic intent (e.g., 'dismiss', 'navigate-back') */
  intent: string;
  /** Context used for detection */
  context: string;
  /** Raw gesture key used for lookup */
  gestureKey: string;
}

export interface AIShapeResult {
  /** Recognized shape name */
  shape: string;
  /** Match score (0.0 – 1.0) */
  score: number;
}

// ── Handle returned by useAIGesture ───────────────────────────────

export interface AIGestureHandle {
  /** The RNGH gesture object to pass to GestureDetector */
  gesture: any;
  /** Whether a gesture is currently active */
  isActive: boolean;
  /** The most recent gesture result */
  lastResult: AIGestureResult | null;
  /** Reset engine state and clear history */
  reset: () => void;
}
