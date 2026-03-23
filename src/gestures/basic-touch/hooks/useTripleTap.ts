/** useTripleTap — Hook that returns a configured TripleTap gesture. */
import { useMemo } from 'react';
import { Gesture } from 'react-native-gesture-handler';
import type { UseTripleTapOptions } from '../types';
import type { TapEvent } from '../../../types';

export function useTripleTap(options: UseTripleTapOptions) {
  const { onTripleTap, maxDelay, maxDistance, enabled = true } = options;
  return useMemo(() => {
    let g = Gesture.Tap().numberOfTaps(3);
    if (maxDelay !== undefined) g = g.maxDuration(maxDelay);
    if (maxDistance !== undefined) g = g.maxDistance(maxDistance);
    g = g.onEnd((e) => {
      const event: TapEvent = { absoluteX: e.absoluteX, absoluteY: e.absoluteY, x: e.x, y: e.y, numberOfTaps: 3 };
      onTripleTap(event);
    });
    return g.enabled(enabled);
  }, [onTripleTap, maxDelay, maxDistance, enabled]);
}
