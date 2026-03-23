/** useTap — Hook that returns a configured Tap gesture. */
import { useMemo } from 'react';
import { Gesture } from 'react-native-gesture-handler';
import type { UseTapOptions, TapEvent } from 'gesture-kit-core';

export function useTap(options: UseTapOptions) {
  const { onTap, numberOfTaps = 1, maxDuration, maxDistance, enabled = true } = options;
  return useMemo(() => {
    let g = Gesture.Tap().numberOfTaps(numberOfTaps);
    if (maxDuration !== undefined) g = g.maxDuration(maxDuration);
    if (maxDistance !== undefined) g = g.maxDistance(maxDistance);
    g = g.onEnd((e) => {
      const event: TapEvent = { absoluteX: e.absoluteX, absoluteY: e.absoluteY, x: e.x, y: e.y, numberOfTaps };
      onTap(event);
    });
    return g.enabled(enabled);
  }, [onTap, numberOfTaps, maxDuration, maxDistance, enabled]);
}
