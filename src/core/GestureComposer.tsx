/**
 * Gesture Composer component.
 *
 * Allows combining multiple gestures on a single view using a
 * declarative props-driven API.
 *
 * @module core/GestureComposer
 *
 * @example
 * ```tsx
 * <Gesture
 *   tap
 *   swipe="left"
 *   pinch
 *   onTap={handleTap}
 *   onSwipe={handleSwipe}
 *   onPinch={handlePinch}
 *   priority="simultaneous"
 * >
 *   <View />
 * </Gesture>
 * ```
 */

import React, { useMemo } from 'react';
import {
  Gesture as RNGesture,
  GestureDetector,
  type GestureType,
} from 'react-native-gesture-handler';

import type {
  GestureComposerProps,
  SwipeDirection,
  FlingDirection,
  TapEvent,
  LongPressEvent,
  PanEvent,
  SwipeEvent,
  PinchEvent,
  RotationEvent,
  FlingEvent,
} from '../types';
import { detectSwipeDirection, matchesDirection, magnitude } from '../utils/direction';
import { composeGestures } from '../utils/compose';

/**
 * Map a fling direction string to RNGH direction constant.
 */
function toFlingDirectionFlag(dir?: FlingDirection): number {
  // RNGH Directions constants
  const Directions = {
    RIGHT: 1,
    LEFT: 2,
    UP: 4,
    DOWN: 8,
  };

  switch (dir) {
    case 'right': return Directions.RIGHT;
    case 'left':  return Directions.LEFT;
    case 'up':    return Directions.UP;
    case 'down':  return Directions.DOWN;
    default:      return Directions.RIGHT | Directions.LEFT | Directions.UP | Directions.DOWN;
  }
}

/**
 * `<Gesture>` — A declarative gesture composer component.
 *
 * Enable gestures via boolean or value props, attach callbacks,
 * and control conflict resolution with `priority`.
 */
export const GestureComposer: React.FC<GestureComposerProps> = ({
  children,
  enabled = true,
  priority = 'simultaneous',
  // Gesture flags
  tap,
  doubleTap,
  longPress,
  swipe,
  pan,
  pinch,
  rotate,
  fling,
  // Callbacks
  onTap,
  onDoubleTap,
  onLongPress,
  onSwipe,
  onPanStart,
  onPanMove,
  onPanEnd,
  onPinchStart,
  onPinch,
  onPinchEnd,
  onRotationStart,
  onRotation,
  onRotationEnd,
  onFling,
}) => {
  const composedGesture = useMemo(() => {
    const gestures: GestureType[] = [];

    // ── Tap ──
    if (tap && onTap) {
      const g = RNGesture.Tap()
        .onEnd((e) => {
          const event: TapEvent = {
            absoluteX: e.absoluteX,
            absoluteY: e.absoluteY,
            x: e.x,
            y: e.y,
            numberOfTaps: 1,
          };
          onTap(event);
        });
      gestures.push(g);
    }

    // ── Double Tap ──
    if (doubleTap && onDoubleTap) {
      const g = RNGesture.Tap()
        .numberOfTaps(2)
        .onEnd((e) => {
          const event: TapEvent = {
            absoluteX: e.absoluteX,
            absoluteY: e.absoluteY,
            x: e.x,
            y: e.y,
            numberOfTaps: 2,
          };
          onDoubleTap(event);
        });
      gestures.push(g);
    }

    // ── Long Press ──
    if (longPress && onLongPress) {
      const g = RNGesture.LongPress()
        .onEnd((e) => {
          const event: LongPressEvent = {
            absoluteX: e.absoluteX,
            absoluteY: e.absoluteY,
            x: e.x,
            y: e.y,
            duration: e.duration,
          };
          onLongPress(event);
        });
      gestures.push(g);
    }

    // ── Swipe (via Pan) ──
    if (swipe && onSwipe) {
      const desiredDirection: SwipeDirection | undefined =
        typeof swipe === 'string' ? swipe : undefined;
      const SWIPE_THRESHOLD = 50;
      const VELOCITY_THRESHOLD = 300;

      const g = RNGesture.Pan()
        .onEnd((e) => {
          const vel = magnitude(e.velocityX, e.velocityY);
          const dist = magnitude(e.translationX, e.translationY);

          if (dist >= SWIPE_THRESHOLD && vel >= VELOCITY_THRESHOLD) {
            const direction = detectSwipeDirection(
              e.translationX, e.translationY,
              e.velocityX, e.velocityY
            );

            if (matchesDirection(direction, desiredDirection)) {
              const event: SwipeEvent = {
                absoluteX: e.absoluteX,
                absoluteY: e.absoluteY,
                x: e.x,
                y: e.y,
                direction,
                velocity: vel,
                distance: dist,
              };
              onSwipe(event);
            }
          }
        });
      gestures.push(g);
    }

    // ── Pan ──
    if (pan && (onPanStart || onPanMove || onPanEnd)) {
      let g = RNGesture.Pan();

      if (onPanStart) {
        g = g.onStart((e) => {
          const event: PanEvent = {
            absoluteX: e.absoluteX,
            absoluteY: e.absoluteY,
            x: e.x,
            y: e.y,
            translationX: e.translationX,
            translationY: e.translationY,
            velocityX: e.velocityX,
            velocityY: e.velocityY,
          };
          onPanStart(event);
        });
      }

      if (onPanMove) {
        g = g.onUpdate((e) => {
          const event: PanEvent = {
            absoluteX: e.absoluteX,
            absoluteY: e.absoluteY,
            x: e.x,
            y: e.y,
            translationX: e.translationX,
            translationY: e.translationY,
            velocityX: e.velocityX,
            velocityY: e.velocityY,
          };
          onPanMove(event);
        });
      }

      if (onPanEnd) {
        g = g.onEnd((e) => {
          const event: PanEvent = {
            absoluteX: e.absoluteX,
            absoluteY: e.absoluteY,
            x: e.x,
            y: e.y,
            translationX: e.translationX,
            translationY: e.translationY,
            velocityX: e.velocityX,
            velocityY: e.velocityY,
          };
          onPanEnd(event);
        });
      }

      gestures.push(g);
    }

    // ── Pinch ──
    if (pinch && (onPinchStart || onPinch || onPinchEnd)) {
      let g = RNGesture.Pinch();

      if (onPinchStart) {
        g = g.onStart((e) => {
          const event: PinchEvent = {
            absoluteX: e.focalX,
            absoluteY: e.focalY,
            x: e.focalX,
            y: e.focalY,
            scale: e.scale,
            velocity: e.velocity,
            focalX: e.focalX,
            focalY: e.focalY,
          };
          onPinchStart(event);
        });
      }

      if (onPinch) {
        g = g.onUpdate((e) => {
          const event: PinchEvent = {
            absoluteX: e.focalX,
            absoluteY: e.focalY,
            x: e.focalX,
            y: e.focalY,
            scale: e.scale,
            velocity: e.velocity,
            focalX: e.focalX,
            focalY: e.focalY,
          };
          onPinch(event);
        });
      }

      if (onPinchEnd) {
        g = g.onEnd((e) => {
          const event: PinchEvent = {
            absoluteX: e.focalX,
            absoluteY: e.focalY,
            x: e.focalX,
            y: e.focalY,
            scale: e.scale,
            velocity: e.velocity,
            focalX: e.focalX,
            focalY: e.focalY,
          };
          onPinchEnd(event);
        });
      }

      gestures.push(g);
    }

    // ── Rotation ──
    if (rotate && (onRotationStart || onRotation || onRotationEnd)) {
      let g = RNGesture.Rotation();

      if (onRotationStart) {
        g = g.onStart((e) => {
          const event: RotationEvent = {
            absoluteX: e.anchorX,
            absoluteY: e.anchorY,
            x: e.anchorX,
            y: e.anchorY,
            rotation: e.rotation,
            velocity: e.velocity,
            anchorX: e.anchorX,
            anchorY: e.anchorY,
          };
          onRotationStart(event);
        });
      }

      if (onRotation) {
        g = g.onUpdate((e) => {
          const event: RotationEvent = {
            absoluteX: e.anchorX,
            absoluteY: e.anchorY,
            x: e.anchorX,
            y: e.anchorY,
            rotation: e.rotation,
            velocity: e.velocity,
            anchorX: e.anchorX,
            anchorY: e.anchorY,
          };
          onRotation(event);
        });
      }

      if (onRotationEnd) {
        g = g.onEnd((e) => {
          const event: RotationEvent = {
            absoluteX: e.anchorX,
            absoluteY: e.anchorY,
            x: e.anchorX,
            y: e.anchorY,
            rotation: e.rotation,
            velocity: e.velocity,
            anchorX: e.anchorX,
            anchorY: e.anchorY,
          };
          onRotationEnd(event);
        });
      }

      gestures.push(g);
    }

    // ── Fling ──
    if (fling && onFling) {
      const flingDir: FlingDirection | undefined =
        typeof fling === 'string' ? fling : undefined;
      const dirFlag = toFlingDirectionFlag(flingDir);

      const g = RNGesture.Fling()
        .direction(dirFlag)
        .onEnd((e) => {
          const event: FlingEvent = {
            absoluteX: e.absoluteX,
            absoluteY: e.absoluteY,
            x: e.x,
            y: e.y,
            direction: flingDir || 'right',
          };
          onFling(event);
        });
      gestures.push(g);
    }

    // ── Compose ──
    if (gestures.length === 0) {
      // Return a no-op tap gesture when nothing is enabled
      return RNGesture.Tap().enabled(false);
    }

    const composed = composeGestures(gestures, priority);

    if (!enabled) {
      return (composed as ReturnType<typeof RNGesture.Tap>).enabled(false);
    }

    return composed;
  }, [
    enabled, priority,
    tap, doubleTap, longPress, swipe, pan, pinch, rotate, fling,
    onTap, onDoubleTap, onLongPress, onSwipe,
    onPanStart, onPanMove, onPanEnd,
    onPinchStart, onPinch, onPinchEnd,
    onRotationStart, onRotation, onRotationEnd,
    onFling,
  ]);

  return (
    <GestureDetector gesture={composedGesture}>
      {children}
    </GestureDetector>
  );
};

GestureComposer.displayName = 'Gesture';
