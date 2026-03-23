/** useVeryLongPress — Hook for very long press (default 1500ms). */
import { useMemo } from 'react';
import { Gesture } from 'react-native-gesture-handler';
import type { UseVeryLongPressOptions } from 'gesture-kit-core';
import type { LongPressEvent } from 'gesture-kit-core';

export function useVeryLongPress(options: UseVeryLongPressOptions) {
  const { onVeryLongPress, onPressIn, onPressOut, minDuration = 1500, maxDistance, enabled = true } = options;
  return useMemo(() => {
    let g = Gesture.LongPress().minDuration(minDuration);
    if (maxDistance !== undefined) g = g.maxDistance(maxDistance);
    if (onPressIn) {
      g = g.onStart((e) => {
        const event: LongPressEvent = { absoluteX: e.absoluteX, absoluteY: e.absoluteY, x: e.x, y: e.y, duration: e.duration };
        onPressIn(event);
      });
    }
    g = g.onEnd((e) => {
      const event: LongPressEvent = { absoluteX: e.absoluteX, absoluteY: e.absoluteY, x: e.x, y: e.y, duration: e.duration };
      onVeryLongPress(event);
    });
    if (onPressOut) {
      g = g.onFinalize((e) => {
        const event: LongPressEvent = { absoluteX: e.absoluteX, absoluteY: e.absoluteY, x: e.x, y: e.y, duration: e.duration };
        onPressOut(event);
      });
    }
    return g.enabled(enabled);
  }, [onVeryLongPress, onPressIn, onPressOut, minDuration, maxDistance, enabled]);
}
