/**
 * Type definitions for this gesture category.
 */

import type { BaseGestureEvent } from 'gesture-kit-core';

export interface MultiFingerEvent extends BaseGestureEvent {
  numberOfFingers: number;
}

export interface MultiFingerSwipeEvent extends MultiFingerEvent {
  direction: 'up' | 'down' | 'left' | 'right';
  velocity: number;
}

export interface SpreadGatherEvent extends MultiFingerEvent {
  scale: number;
  velocity: number;
}
