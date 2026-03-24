/**
 * Type definitions for this gesture category.
 */

import type { BaseGestureEvent } from '@gesture-kit/core';

export interface ProximityEvent extends BaseGestureEvent {
  distance: number;
  isNear: boolean;
}

export interface HoverEvent extends BaseGestureEvent {
  duration: number;
  distance: number;
}
