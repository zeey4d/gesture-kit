/**
 * PressForceGesture — Detects force/pressure touch gestures (3D Touch / Force Touch).
 */

import React, { useMemo } from 'react';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import type { PressForceProps, PressForceEvent } from '../types';

export const PressForceGesture: React.FC<PressForceProps> = ({
  children,
  onPressForce,
  forceThreshold = 0.5,
  enabled = true,
}) => {
  const gesture = useMemo(() => {
    const g = Gesture.ForceTouch()
      .minForce(forceThreshold)
      .onStart((e) => {
        const event: PressForceEvent = {
          absoluteX: e.absoluteX, absoluteY: e.absoluteY,
          x: e.x, y: e.y, force: e.force,
        };
        onPressForce(event);
      })
      .enabled(enabled);
    return g;
  }, [onPressForce, forceThreshold, enabled]);

  return <GestureDetector gesture={gesture}>{children}</GestureDetector>;
};

PressForceGesture.displayName = 'PressForceGesture';
