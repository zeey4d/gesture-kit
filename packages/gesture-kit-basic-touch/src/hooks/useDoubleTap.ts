/** useDoubleTap — Hook that returns a configured DoubleTap gesture. */
import { useMemo } from 'react';
import { Gesture } from 'react-native-gesture-handler';
import type { UseDoubleTapOptions, TapEvent } from 'gesture-kit-core';

export function useDoubleTap(options: UseDoubleTapOptions) {
  const { onDoubleTap, maxDelay, maxDistance, enabled = true } = options;
  return useMemo(() => {
    let g = Gesture.Tap().numberOfTaps(2);
    if (maxDelay !== undefined) g = g.maxDuration(maxDelay);
    if (maxDistance !== undefined) g = g.maxDistance(maxDistance);
    g = g.onEnd((e) => {
      const event: TapEvent = { absoluteX: e.absoluteX, absoluteY: e.absoluteY, x: e.x, y: e.y, numberOfTaps: 2 };
      onDoubleTap(event);
    });
    return g.enabled(enabled);
  }, [onDoubleTap, maxDelay, maxDistance, enabled]);
}
