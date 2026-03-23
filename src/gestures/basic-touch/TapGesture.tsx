/**
 * TapGesture — Detects single tap gestures.
 */

import React, { useMemo } from 'react';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import type { TapProps } from './types';
import type { TapEvent } from '../../types';

export const TapGesture: React.FC<TapProps> = ({
  children,
  onTap,
  numberOfTaps = 1,
  maxDuration,
  maxDistance,
  enabled = true,
}) => {
  const gesture = useMemo(() => {
    let g = Gesture.Tap().numberOfTaps(numberOfTaps);
    if (maxDuration !== undefined) g = g.maxDuration(maxDuration);
    if (maxDistance !== undefined) g = g.maxDistance(maxDistance);
    g = g.onEnd((e) => {
      const event: TapEvent = {
        absoluteX: e.absoluteX, absoluteY: e.absoluteY,
        x: e.x, y: e.y, numberOfTaps,
      };
      onTap(event);
    });
    return g.enabled(enabled);
  }, [onTap, numberOfTaps, maxDuration, maxDistance, enabled]);

  return <GestureDetector gesture={gesture}>{children}</GestureDetector>;
};

TapGesture.displayName = 'TapGesture';
