/**
 * GestureEngine — the central orchestrator.
 * Coordinates all subsystems: extraction → classification → intent → prediction → adaptation.
 * This is the only class the public API interacts with.
 */

import type { Point, CardinalDirection } from '../utils/math';
import { CircularBuffer } from '../utils/buffer';
import { POINT_BUFFER_SIZE } from '../utils/constants';
import type { Sensitivity } from '../utils/constants';
import { extractFeatures } from './FeatureExtractor';
import type { GestureFeatures } from './FeatureExtractor';
import { classify } from './GestureClassifier';
import type { GestureType, ClassificationResult } from './GestureClassifier';
import { IntentDetector } from './IntentDetector';
import type { IntentMap, IntentResult } from './IntentDetector';
import { GesturePredictor } from './GesturePredictor';
import type { PredictionResult } from './GesturePredictor';
import { AdaptiveMemory } from './AdaptiveMemory';
import type { AdaptedThresholds } from './AdaptiveMemory';
import { ShapeRecognizer } from './ShapeRecognizer';
import type { ShapeTemplate, ShapeResult } from './ShapeRecognizer';

// ── Configuration ─────────────────────────────────────────────────

export interface EngineConfig {
  /** Enable intent detection */
  intent?: boolean;
  /** Enable prediction (early gesture detection) */
  predict?: boolean;
  /** Enable adaptive learning */
  adaptive?: boolean;
  /** Enable shape recognition */
  shapes?: boolean;
  /** UI context for intent detection */
  context?: string;
  /** User ID for adaptive memory scoping */
  userId?: string;
  /** Custom intent mappings */
  intentMap?: IntentMap;
  /** Custom shape templates */
  customShapes?: ShapeTemplate[];
  /** Classification sensitivity */
  sensitivity?: Sensitivity;
  /** Debug mode */
  debug?: boolean;
}

// ── Result Types ──────────────────────────────────────────────────

export interface EngineGestureResult {
  type: GestureType;
  confidence: number;
  direction?: CardinalDirection;
  velocity?: number;
  distance?: number;
  duration?: number;
  position: { x: number; y: number };
  timestamp: number;
  features?: GestureFeatures;
}

export interface EngineIntentResult extends IntentResult {}

export interface EnginePredictionResult {
  predicted: string;
  confidence: number;
  direction?: string;
}

export interface EngineShapeResult extends ShapeResult {}

// ── Callbacks ─────────────────────────────────────────────────────

export interface EngineCallbacks {
  onGesture?: (result: EngineGestureResult) => void;
  onIntent?: (result: EngineIntentResult) => void;
  onPredict?: (result: EnginePredictionResult) => void;
  onShape?: (result: EngineShapeResult) => void;
}

// ── Engine Class ──────────────────────────────────────────────────

export class GestureEngine {
  private readonly buffer = new CircularBuffer<Point>(POINT_BUFFER_SIZE);
  private readonly config: Required<
    Pick<EngineConfig, 'intent' | 'predict' | 'adaptive' | 'shapes' | 'sensitivity' | 'debug'>
  > & Omit<EngineConfig, 'intent' | 'predict' | 'adaptive' | 'shapes' | 'sensitivity' | 'debug'>;
  private readonly callbacks: EngineCallbacks;

  // Lazy-initialized subsystems
  private intentDetector?: IntentDetector;
  private predictor?: GesturePredictor;
  private adaptiveMemory?: AdaptiveMemory;
  private shapeRecognizer?: ShapeRecognizer;

  private isGestureActive = false;

  constructor(config: EngineConfig, callbacks: EngineCallbacks) {
    this.config = {
      intent: false,
      predict: false,
      adaptive: false,
      shapes: false,
      sensitivity: 'normal',
      debug: false,
      ...config,
    };
    this.callbacks = callbacks;

    // Only initialize subsystems that are enabled
    if (this.config.intent) {
      this.intentDetector = new IntentDetector(this.config.intentMap);
    }
    if (this.config.predict) {
      this.predictor = new GesturePredictor();
    }
    if (this.config.adaptive) {
      this.adaptiveMemory = new AdaptiveMemory();
      // Try to load persisted profiles
      this.adaptiveMemory.load().catch(() => {});
    }
    if (this.config.shapes) {
      this.shapeRecognizer = new ShapeRecognizer(this.config.customShapes);
    }
  }

  // ── Touch Event Handlers ──────────────────────────────────────

  /** Called when a touch gesture begins */
  onTouchStart(x: number, y: number): void {
    this.buffer.clear();
    this.predictor?.reset();
    this.isGestureActive = true;
    this.addPoint(x, y);
  }

  /** Called on each touch move */
  onTouchMove(x: number, y: number): void {
    if (!this.isGestureActive) return;
    this.addPoint(x, y);

    // Run prediction on partial data
    if (this.config.predict && this.predictor) {
      const points = this.buffer.toArray();
      const features = extractFeatures(points);
      if (features) {
        const prediction = this.predictor.predict(features);
        if (prediction && !prediction.emitted && this.callbacks.onPredict) {
          this.callbacks.onPredict({
            predicted: prediction.predicted,
            confidence: prediction.confidence,
            direction: prediction.direction,
          });
        }
      }
    }
  }

  /** Called when the touch gesture ends */
  onTouchEnd(x: number, y: number): void {
    if (!this.isGestureActive) return;
    this.addPoint(x, y);
    this.isGestureActive = false;

    const points = this.buffer.toArray();
    const features = extractFeatures(points);
    if (!features) return;

    // Get adaptive thresholds if available
    let adaptedThresholds: AdaptedThresholds | undefined;
    if (this.config.adaptive && this.adaptiveMemory && this.config.userId) {
      adaptedThresholds = this.adaptiveMemory.getAdaptedThresholds(
        this.config.userId,
      );
    }

    // Classify the gesture
    const classification = classify(
      features,
      this.config.sensitivity,
      adaptedThresholds,
    );

    // Shape recognition (if classified as possible shape or shapes are enabled)
    let shapeResult: ShapeResult | null = null;
    if (
      this.config.shapes &&
      this.shapeRecognizer &&
      (classification.possibleShape || features.pointCount >= 10)
    ) {
      shapeResult = this.shapeRecognizer.recognize(
        features.points.map((p) => ({ x: p.x, y: p.y })),
      );

      if (shapeResult && this.callbacks.onShape) {
        this.callbacks.onShape(shapeResult);
      }
    }

    // Build the gesture result
    const gestureResult: EngineGestureResult = {
      type: shapeResult && shapeResult.score > classification.confidence
        ? 'shape'
        : classification.type,
      confidence: shapeResult && shapeResult.score > classification.confidence
        ? shapeResult.score
        : classification.confidence,
      direction: classification.direction,
      velocity: features.velocity,
      distance: features.distance,
      duration: features.duration,
      position: features.endPoint,
      timestamp: Date.now(),
      features: this.config.debug ? features : undefined,
    };

    // Emit gesture result
    this.callbacks.onGesture?.(gestureResult);

    // Intent detection
    if (this.config.intent && this.intentDetector) {
      const intentResult = this.intentDetector.detect(
        gestureResult.type,
        classification.direction,
        this.config.context,
      );
      if (intentResult && this.callbacks.onIntent) {
        this.callbacks.onIntent(intentResult);
      }
    }

    // Adaptive learning — record this gesture
    if (
      this.config.adaptive &&
      this.adaptiveMemory &&
      this.config.userId &&
      classification.type !== 'unknown'
    ) {
      this.adaptiveMemory.record(
        this.config.userId,
        classification.type,
        features,
      );
    }

    if (this.config.debug) {
      this.debugLog(gestureResult, classification, shapeResult);
    }
  }

  /** Called when the gesture is cancelled */
  onTouchCancel(): void {
    this.isGestureActive = false;
    this.buffer.clear();
    this.predictor?.reset();
  }

  // ── Public Methods ────────────────────────────────────────────

  /** Reset engine state */
  reset(): void {
    this.buffer.clear();
    this.predictor?.reset();
    this.isGestureActive = false;
  }

  /** Persist adaptive data */
  async persistAdaptiveData(): Promise<void> {
    await this.adaptiveMemory?.persist();
  }

  /** Update configuration at runtime */
  updateConfig(partial: Partial<EngineConfig>): void {
    Object.assign(this.config, partial);

    // Re-initialize subsystems if needed
    if (partial.intentMap && this.intentDetector) {
      this.intentDetector.updateMap(partial.intentMap);
    }
    if (partial.customShapes && this.shapeRecognizer) {
      for (const t of partial.customShapes) {
        this.shapeRecognizer.addTemplate(t);
      }
    }
  }

  // ── Private Helpers ───────────────────────────────────────────

  private addPoint(x: number, y: number): void {
    this.buffer.push({ x, y, timestamp: Date.now() });
  }

  private debugLog(
    result: EngineGestureResult,
    classification: ClassificationResult,
    shape: ShapeResult | null,
  ): void {
    if (typeof __DEV__ !== 'undefined' && !__DEV__) return;

    console.log('[AIGesture]', {
      type: result.type,
      confidence: result.confidence.toFixed(2),
      direction: result.direction,
      velocity: result.velocity?.toFixed(0),
      distance: result.distance?.toFixed(0),
      duration: result.duration?.toFixed(0),
      shape: shape?.shape,
      shapeScore: shape?.score?.toFixed(2),
    });
  }
}
