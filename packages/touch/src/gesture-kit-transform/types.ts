/**
 * Type definitions for this gesture category.
 */

import type { BaseGestureEvent, PinchEvent } from '@gesture-kit/core';
export type { PinchEvent };

export interface RotateEvent extends BaseGestureEvent {
  rotation: number;
  velocity: number;
  anchorX: number;
  anchorY: number;
}

export interface PinchRotateEvent extends BaseGestureEvent {
  scale: number;
  rotation: number;
  focalX: number;
  focalY: number;
}

export interface StretchEvent extends BaseGestureEvent {
  scaleX: number;
  scaleY: number;
}
