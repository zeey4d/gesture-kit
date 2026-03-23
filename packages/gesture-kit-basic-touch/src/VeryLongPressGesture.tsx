/**
 * VeryLongPressGesture — Detects very long press gestures (default 1500ms).
 */

import React, { useMemo } from 'react';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import type { VeryLongPressProps } from './types';
import type { LongPressEvent } from 'gesture-kit-core';

export const VeryLongPressGesture: React.FC<VeryLongPressProps> = ({
  children,
  onVeryLongPress,
  onPressIn,
  onPressOut,
  minDuration = 1500,
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
      onVeryLongPress(event);
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
  }, [onVeryLongPress, onPressIn, onPressOut, minDuration, maxDistance, enabled]);

  return <GestureDetector gesture={gesture}>{children}</GestureDetector>;
};

VeryLongPressGesture.displayName = 'VeryLongPressGesture';
