/**
 * TapCancelGesture — Detects when a tap is cancelled (finger moves away).
 */

import React, { useMemo } from 'react';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import type { TapCancelProps } from './types';
import type { BaseGestureEvent } from 'gesture-kit-core';

export const TapCancelGesture: React.FC<TapCancelProps> = ({
  children,
  onTapCancel,
  onTapStart,
  maxDuration,
  enabled = true,
}) => {
  const gesture = useMemo(() => {
    let g = Gesture.Tap();
    if (maxDuration !== undefined) g = g.maxDuration(maxDuration);
    if (onTapStart) {
      g = g.onBegin((e) => {
        const event: BaseGestureEvent = {
          absoluteX: e.absoluteX, absoluteY: e.absoluteY,
          x: e.x, y: e.y,
        };
        onTapStart(event);
      });
    }
    g = g.onTouchesCancelled(() => {
      onTapCancel({ absoluteX: 0, absoluteY: 0, x: 0, y: 0 });
    });
    return g.enabled(enabled);
  }, [onTapCancel, onTapStart, maxDuration, enabled]);

  return <GestureDetector gesture={gesture}>{children}</GestureDetector>;
};

TapCancelGesture.displayName = 'TapCancelGesture';
