/** useLongPress — Hook that returns a configured LongPress gesture. */
import { useMemo } from 'react';
import { Gesture } from 'react-native-gesture-handler';
import type { UseLongPressOptions, LongPressEvent } from '../../../types';

export function useLongPress(options: UseLongPressOptions) {
  const { onLongPress, onPressIn, onPressOut, minDuration = 500, maxDistance, enabled = true } = options;
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
      onLongPress(event);
    });
    if (onPressOut) {
      g = g.onFinalize((e) => {
        const event: LongPressEvent = { absoluteX: e.absoluteX, absoluteY: e.absoluteY, x: e.x, y: e.y, duration: e.duration };
        onPressOut(event);
      });
    }
    return g.enabled(enabled);
  }, [onLongPress, onPressIn, onPressOut, minDuration, maxDistance, enabled]);
}
