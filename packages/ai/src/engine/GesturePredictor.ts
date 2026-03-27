/**
 * GesturePredictor — early gesture detection from partial touch data.
 * Fires predictions before the gesture completes, enabling anticipatory UI.
 */

import type { GestureFeatures } from './FeatureExtractor';
import type { CardinalDirection } from '../utils/math';
import {
  PREDICT_MIN_POINTS,
  PREDICT_LONG_PRESS_DURATION,
  PREDICT_SWIPE_VELOCITY,
  PREDICT_DIRECTION_STABILITY,
} from '../utils/constants';

// ── Types ─────────────────────────────────────────────────────────

export type PredictedGesture = 'tap' | 'longPress' | 'swipe' | 'pan' | 'shape';

export interface PredictionResult {
  predicted: PredictedGesture;
  confidence: number;
  direction?: CardinalDirection;
  /** Whether this prediction has already been emitted for this gesture */
  emitted: boolean;
}

// ── Predictor ─────────────────────────────────────────────────────

export class GesturePredictor {
  private lastPrediction: PredictionResult | null = null;
  private emittedTypes = new Set<PredictedGesture>();

  /**
   * Attempt to predict the gesture from partial features.
   * Returns null if not enough data or no confident prediction.
   */
  predict(features: GestureFeatures): PredictionResult | null {
    if (features.pointCount < PREDICT_MIN_POINTS) return null;

    let result: PredictionResult | null = null;

    // ── Long press prediction: low velocity + low distance + growing duration
    if (
      features.velocity < 10 &&
      features.distance < 15 &&
      features.duration > PREDICT_LONG_PRESS_DURATION
    ) {
      const durationProgress = Math.min(features.duration / 500, 1);
      result = {
        predicted: 'longPress',
        confidence: 0.5 + 0.3 * durationProgress,
        emitted: this.emittedTypes.has('longPress'),
      };
    }

    // ── Swipe prediction: high velocity + stable direction
    if (
      features.velocity > PREDICT_SWIPE_VELOCITY &&
      features.directionStable
    ) {
      const velConfidence = Math.min(
        (features.velocity - PREDICT_SWIPE_VELOCITY) / 500,
        0.3,
      );
      const confidence = 0.55 + velConfidence;

      // Only override longPress prediction if swipe confidence is higher
      if (!result || confidence > result.confidence) {
        result = {
          predicted: 'swipe',
          confidence,
          direction: features.cardinalDirection,
          emitted: this.emittedTypes.has('swipe'),
        };
      }
    }

    // ── Pan prediction: moderate movement, not fast enough for swipe
    if (
      !result &&
      features.distance > 20 &&
      features.velocity > 30 &&
      features.velocity < PREDICT_SWIPE_VELOCITY
    ) {
      result = {
        predicted: 'pan',
        confidence: 0.5,
        direction: features.cardinalDirection,
        emitted: this.emittedTypes.has('pan'),
      };
    }

    // ── Shape prediction: many points + high curvature
    if (
      features.pointCount > 10 &&
      features.curvature > 0.2 &&
      features.distance < features.pathLength * 0.5
    ) {
      const shapeConfidence = 0.45 + Math.min(features.curvature / 1.0, 0.3);
      if (!result || shapeConfidence > result.confidence) {
        result = {
          predicted: 'shape',
          confidence: shapeConfidence,
          emitted: this.emittedTypes.has('shape'),
        };
      }
    }

    if (result && !result.emitted) {
      this.emittedTypes.add(result.predicted);
      this.lastPrediction = result;
    }

    return result;
  }

  /** Reset state for a new gesture */
  reset(): void {
    this.lastPrediction = null;
    this.emittedTypes.clear();
  }

  /** Get the last prediction */
  getLastPrediction(): PredictionResult | null {
    return this.lastPrediction;
  }
}
