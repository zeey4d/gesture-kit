/**
 * Type definitions for this gesture category.
 */

import type { BaseGestureEvent } from 'gesture-kit-core';

export type SequenceStep = 'tap' | 'swipe' | 'hold' | 'rotate' | 'pinch';

export interface SequenceEvent extends BaseGestureEvent {
  steps: SequenceStep[];
  totalDuration: number;
}

export interface SequenceConfig {
  steps: SequenceStep[];
  timingWindow?: number;
  interruptible?: boolean;
}
