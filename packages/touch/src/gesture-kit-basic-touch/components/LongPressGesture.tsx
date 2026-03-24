/**
 * LongPressGesture — Detects long press gestures.
 */

import React, { useMemo } from 'react';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import type { LongPressProps } from '../types';
import type { LongPressEvent } from '@gesture-kit/core';

export const LongPressGesture: React.FC<LongPressProps> = ({
  children,
  onLongPress,
  onPressIn,
  onPressOut,
  minDuration = 500,
  maxDistance,
  enabled = true,
}) => {
  const gesture = useMemo(() => {
    let g = Gesture.LongPress().minDuration(minDuration);
    if (maxDistance !== undefined) g = g.maxDistance(maxDistance);
    if (onPressIn) {
      g = g.onStart((e) => {
        const event: LongPressEvent = {
          absoluteX: e.absoluteX, absoluteY: e.absoluteY,
          x: e.x, y: e.y, duration: e.duration,
        };
        onPressIn(event);
      });
    }
    g = g.onEnd((e) => {
      const event: LongPressEvent = {
        absoluteX: e.absoluteX, absoluteY: e.absoluteY,
        x: e.x, y: e.y, duration: e.duration,
      };
      onLongPress(event);
    });
    if (onPressOut) {
      g = g.onFinalize((e) => {
        const event: LongPressEvent = {
          absoluteX: e.absoluteX, absoluteY: e.absoluteY,
          x: e.x, y: e.y, duration: e.duration,
        };
        onPressOut(event);
      });
    }
    return g.enabled(enabled);
  }, [onLongPress, onPressIn, onPressOut, minDuration, maxDistance, enabled]);

  return <GestureDetector gesture={gesture}>{children}</GestureDetector>;
};

LongPressGesture.displayName = 'LongPressGesture';
