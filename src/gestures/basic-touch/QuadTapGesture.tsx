/**
 * QuadTapGesture — Detects quad (four) tap gestures.
 */

import React, { useMemo } from 'react';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import type { QuadTapProps } from './types';
import type { TapEvent } from '../../types';

export const QuadTapGesture: React.FC<QuadTapProps> = ({
  children,
  onQuadTap,
  maxDelay,
  maxDistance,
  enabled = true,
}) => {
  const gesture = useMemo(() => {
    let g = Gesture.Tap().numberOfTaps(4);
    if (maxDelay !== undefined) g = g.maxDuration(maxDelay);
    if (maxDistance !== undefined) g = g.maxDistance(maxDistance);
    g = g.onEnd((e) => {
      const event: TapEvent = {
        absoluteX: e.absoluteX, absoluteY: e.absoluteY,
        x: e.x, y: e.y, numberOfTaps: 4,
      };
      onQuadTap(event);
    });
    return g.enabled(enabled);
  }, [onQuadTap, maxDelay, maxDistance, enabled]);

  return <GestureDetector gesture={gesture}>{children}</GestureDetector>;
};

QuadTapGesture.displayName = 'QuadTapGesture';
