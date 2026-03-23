/**
 * Type definitions for this gesture category.
 */

import type { BaseGestureEvent } from 'gesture-kit-core';

export interface AIGestureEvent extends BaseGestureEvent {
  confidence: number;
  modelVersion: string;
}

export interface PredictionEvent extends AIGestureEvent {
  predictedGesture: string;
  alternatives: Array<{ gesture: string; probability: number }>;
}

export interface AdaptiveEvent extends AIGestureEvent {
  userProfile: string;
  adaptationLevel: number;
}

export interface ContextEvent extends AIGestureEvent {
  context: string;
  contextualFactors: Record<string, unknown>;
}

export interface EmotionEvent extends AIGestureEvent {
  emotion: string;
  intensity: number;
}

export interface IntentEvent extends AIGestureEvent {
  intent: string;
  entities: Record<string, string>;
}
