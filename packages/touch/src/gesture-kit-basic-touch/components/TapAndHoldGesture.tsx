/**
 * TapAndHoldGesture — Detects a tap followed by a hold.
 */

import React, { useMemo } from 'react';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import type { TapAndHoldProps } from '../types';
import type { LongPressEvent, TapEvent } from '@gesture-kit/core';

export const TapAndHoldGesture: React.FC<TapAndHoldProps> = ({
  children,
  onTapAndHold,
  onTap,
  holdDuration = 500,
  enabled = true,
}) => {
  const gesture = useMemo(() => {
    const holdGesture = Gesture.LongPress()
      .minDuration(holdDuration)
      .onEnd((e) => {
        const event: LongPressEvent = {
          absoluteX: e.absoluteX, absoluteY: e.absoluteY,
          x: e.x, y: e.y, duration: e.duration,
        };
        onTapAndHold(event);
      })
      .enabled(enabled);

    if (onTap) {
      const tapGesture = Gesture.Tap()
        .onEnd((e) => {
          const event: TapEvent = {
            absoluteX: e.absoluteX, absoluteY: e.absoluteY,
            x: e.x, y: e.y, numberOfTaps: 1,
          };
          onTap(event);
        })
        .enabled(enabled);
      return Gesture.Exclusive(holdGesture, tapGesture);
    }

    return holdGesture;
  }, [onTapAndHold, onTap, holdDuration, enabled]);

  return <GestureDetector gesture={gesture}>{children}</GestureDetector>;
};

TapAndHoldGesture.displayName = 'TapAndHoldGesture';
