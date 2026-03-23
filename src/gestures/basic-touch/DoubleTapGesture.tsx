/**
 * DoubleTapGesture — Detects double tap gestures.
 */

import React, { useMemo } from 'react';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import type { DoubleTapProps } from './types';
import type { TapEvent } from '../../types';

export const DoubleTapGesture: React.FC<DoubleTapProps> = ({
  children,
  onDoubleTap,
  maxDelay,
  maxDistance,
  enabled = true,
}) => {
  const gesture = useMemo(() => {
    let g = Gesture.Tap().numberOfTaps(2);
    if (maxDelay !== undefined) g = g.maxDuration(maxDelay);
    if (maxDistance !== undefined) g = g.maxDistance(maxDistance);
    g = g.onEnd((e) => {
      const event: TapEvent = {
        absoluteX: e.absoluteX, absoluteY: e.absoluteY,
        x: e.x, y: e.y, numberOfTaps: 2,
      };
      onDoubleTap(event);
    });
    return g.enabled(enabled);
  }, [onDoubleTap, maxDelay, maxDistance, enabled]);

  return <GestureDetector gesture={gesture}>{children}</GestureDetector>;
};

DoubleTapGesture.displayName = 'DoubleTapGesture';
