/** useTapCancel — Hook for detecting cancelled taps. */
import { useMemo } from 'react';
import { Gesture } from 'react-native-gesture-handler';
import type { UseTapCancelOptions } from '@gesture-kit/core';
import type { BaseGestureEvent } from '@gesture-kit/core';

export function useTapCancel(options: UseTapCancelOptions) {
  const { onTapCancel, onTapStart, maxDuration, enabled = true } = options;
  return useMemo(() => {
    let g = Gesture.Tap();
    if (maxDuration !== undefined) g = g.maxDuration(maxDuration);
    if (onTapStart) {
      g = g.onBegin((e) => {
        const event: BaseGestureEvent = { absoluteX: e.absoluteX, absoluteY: e.absoluteY, x: e.x, y: e.y };
        onTapStart(event);
      });
    }
    g = g.onTouchesCancelled(() => {
      onTapCancel({ absoluteX: 0, absoluteY: 0, x: 0, y: 0 });
    });
    return g.enabled(enabled);
  }, [onTapCancel, onTapStart, maxDuration, enabled]);
}
