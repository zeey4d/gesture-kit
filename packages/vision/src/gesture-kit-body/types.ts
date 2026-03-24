/**
 * Type definitions for this gesture category.
 */

import type { BaseGestureEvent } from '@gesture-kit/core';

export interface BodyEvent extends BaseGestureEvent {
  confidence: number;
}

export interface HeadEvent extends BodyEvent {
  direction: 'nod' | 'shake';
  angle: number;
}

export interface PoseEvent extends BodyEvent {
  poseName: string;
  landmarks: Array<{ x: number; y: number; z: number }>;
}

export interface ClapEvent extends BodyEvent {
  intensity: number;
}
