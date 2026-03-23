/** useQuadTap — Hook that returns a configured QuadTap gesture. */
import { useMemo } from 'react';
import { Gesture } from 'react-native-gesture-handler';
import type { UseQuadTapOptions } from 'gesture-kit-core';
import type { TapEvent } from '../../../types';

export function useQuadTap(options: UseQuadTapOptions) {
  const { onQuadTap, maxDelay, maxDistance, enabled = true } = options;
  return useMemo(() => {
    let g = Gesture.Tap().numberOfTaps(4);
    if (maxDelay !== undefined) g = g.maxDuration(maxDelay);
    if (maxDistance !== undefined) g = g.maxDistance(maxDistance);
    g = g.onEnd((e) => {
      const event: TapEvent = { absoluteX: e.absoluteX, absoluteY: e.absoluteY, x: e.x, y: e.y, numberOfTaps: 4 };
      onQuadTap(event);
    });
    return g.enabled(enabled);
  }, [onQuadTap, maxDelay, maxDistance, enabled]);
}
