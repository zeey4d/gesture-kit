/**
 * TripleTapGesture — Detects triple tap gestures.
 */

import React, { useMemo } from 'react';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import type { TripleTapProps } from '../types';
import type { TapEvent } from '@gesture-kit/core';

export const TripleTapGesture: React.FC<TripleTapProps> = ({
  children,
  onTripleTap,
  maxDelay,
  maxDistance,
  enabled = true,
}) => {
  const gesture = useMemo(() => {
    let g = Gesture.Tap().numberOfTaps(3);
    if (maxDelay !== undefined) g = g.maxDuration(maxDelay);
    if (maxDistance !== undefined) g = g.maxDistance(maxDistance);
    g = g.onEnd((e) => {
      const event: TapEvent = {
        absoluteX: e.absoluteX, absoluteY: e.absoluteY,
        x: e.x, y: e.y, numberOfTaps: 3,
      };
      onTripleTap(event);
    });
    return g.enabled(enabled);
  }, [onTripleTap, maxDelay, maxDistance, enabled]);

  return <GestureDetector gesture={gesture}>{children}</GestureDetector>;
};

TripleTapGesture.displayName = 'TripleTapGesture';
