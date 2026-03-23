/** useTapAndHold — Hook for tap then hold gesture. */
import { useMemo } from 'react';
import { Gesture } from 'react-native-gesture-handler';
import type { UseTapAndHoldOptions } from '../types';
import type { LongPressEvent, TapEvent } from '../../../types';

export function useTapAndHold(options: UseTapAndHoldOptions) {
  const { onTapAndHold, onTap, holdDuration = 500, enabled = true } = options;
  return useMemo(() => {
    const holdGesture = Gesture.LongPress()
      .minDuration(holdDuration)
      .onEnd((e) => {
        const event: LongPressEvent = { absoluteX: e.absoluteX, absoluteY: e.absoluteY, x: e.x, y: e.y, duration: e.duration };
        onTapAndHold(event);
      })
      .enabled(enabled);

    if (onTap) {
      const tapGesture = Gesture.Tap()
        .onEnd((e) => {
          const event: TapEvent = { absoluteX: e.absoluteX, absoluteY: e.absoluteY, x: e.x, y: e.y, numberOfTaps: 1 };
          onTap(event);
        })
        .enabled(enabled);
      return Gesture.Exclusive(holdGesture, tapGesture);
    }
    return holdGesture;
  }, [onTapAndHold, onTap, holdDuration, enabled]);
}
