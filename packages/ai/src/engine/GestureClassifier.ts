/**
 * GestureClassifier — rule-based gesture classification.
 * Maps extracted features → gesture type + confidence score.
 */

import type { GestureFeatures } from './FeatureExtractor';
import type { CardinalDirection } from '../utils/math';
import {
  TAP_MAX_DURATION,
  TAP_MAX_DISTANCE,
  LONG_PRESS_MIN_DURATION,
  LONG_PRESS_MAX_DISTANCE,
  SWIPE_MIN_VELOCITY,
  SWIPE_MIN_DISTANCE,
  PAN_MIN_DISTANCE,
  SHAPE_MIN_POINTS,
  SHAPE_MIN_CURVATURE,
  SENSITIVITY_MULTIPLIERS,
} from '../utils/constants';
import type { Sensitivity } from '../utils/constants';

// ── Types ─────────────────────────────────────────────────────────

export type GestureType =
  | 'tap'
  | 'doubleTap'
  | 'longPress'
  | 'swipe'
  | 'pan'
  | 'shape'
  | 'unknown';

export interface ClassificationResult {
  type: GestureType;
  confidence: number;
  direction?: CardinalDirection;
  /** Whether the gesture might be a shape (delegate to ShapeRecognizer) */
  possibleShape: boolean;
}

// ── Adjusted thresholds ───────────────────────────────────────────

interface Thresholds {
  tapMaxDuration: number;
  tapMaxDistance: number;
  longPressMinDuration: number;
  longPressMaxDistance: number;
  swipeMinVelocity: number;
  swipeMinDistance: number;
  panMinDistance: number;
}

function getThresholds(
  sensitivity: Sensitivity,
  adaptedThresholds?: Partial<Thresholds>,
): Thresholds {
  const mul = SENSITIVITY_MULTIPLIERS[sensitivity];
  const base: Thresholds = {
    tapMaxDuration: TAP_MAX_DURATION * mul.duration,
    tapMaxDistance: TAP_MAX_DISTANCE * mul.distance,
    longPressMinDuration: LONG_PRESS_MIN_DURATION * mul.duration,
    longPressMaxDistance: LONG_PRESS_MAX_DISTANCE * mul.distance,
    swipeMinVelocity: SWIPE_MIN_VELOCITY * mul.velocity,
    swipeMinDistance: SWIPE_MIN_DISTANCE * mul.distance,
    panMinDistance: PAN_MIN_DISTANCE * mul.distance,
  };

  // Apply adaptive overrides
  if (adaptedThresholds) {
    return { ...base, ...adaptedThresholds };
  }

  return base;
}

// ── Classifier ────────────────────────────────────────────────────

/**
 * Classify a gesture from extracted features.
 * Rules are ordered most-specific → least-specific.
 */
export function classify(
  features: GestureFeatures,
  sensitivity: Sensitivity = 'normal',
  adaptedThresholds?: Partial<Thresholds>,
): ClassificationResult {
  const t = getThresholds(sensitivity, adaptedThresholds);

  // ── Tap: short duration, small distance
  if (
    features.duration < t.tapMaxDuration &&
    features.distance < t.tapMaxDistance
  ) {
    // Confidence increases as duration and distance decrease
    const durationRatio = 1 - features.duration / t.tapMaxDuration;
    const distanceRatio = 1 - features.distance / t.tapMaxDistance;
    const confidence = 0.75 + 0.25 * Math.min(durationRatio, distanceRatio);

    return { type: 'tap', confidence, possibleShape: false };
  }

  // ── Long Press: long duration, small distance
  if (
    features.duration >= t.longPressMinDuration &&
    features.distance < t.longPressMaxDistance
  ) {
    const durationExcess =
      (features.duration - t.longPressMinDuration) / t.longPressMinDuration;
    const confidence = Math.min(0.99, 0.8 + 0.15 * Math.min(durationExcess, 1));

    return { type: 'longPress', confidence, possibleShape: false };
  }

  // ── Swipe: high velocity, significant distance
  if (
    features.velocity >= t.swipeMinVelocity &&
    features.distance >= t.swipeMinDistance
  ) {
    const velocityRatio = Math.min(
      features.velocity / (t.swipeMinVelocity * 2),
      1,
    );
    const confidence = 0.75 + 0.2 * velocityRatio;

    return {
      type: 'swipe',
      confidence,
      direction: features.cardinalDirection,
      possibleShape: false,
    };
  }

  // ── Shape candidate: many points + significant curvature
  if (
    features.pointCount >= SHAPE_MIN_POINTS &&
    features.curvature >= SHAPE_MIN_CURVATURE
  ) {
    return {
      type: 'shape',
      confidence: 0.5, // low — ShapeRecognizer will refine this
      possibleShape: true,
    };
  }

  // ── Pan: moved beyond minimum distance
  if (features.distance >= t.panMinDistance) {
    const distanceExcess =
      (features.distance - t.panMinDistance) / (t.swipeMinDistance - t.panMinDistance);
    const confidence = Math.min(0.95, 0.7 + 0.2 * Math.min(distanceExcess, 1));

    return {
      type: 'pan',
      confidence,
      direction: features.cardinalDirection,
      possibleShape: false,
    };
  }

  // ── Unknown
  return { type: 'unknown', confidence: 0, possibleShape: false };
}
