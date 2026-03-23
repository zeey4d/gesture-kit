/**
 * Gesture composition utilities.
 *
 * @module utils/compose
 */

import {
  Gesture,
  type GestureType,
  type ComposedGesture,
} from 'react-native-gesture-handler';
import type { GesturePriority } from '../types';

/** A gesture that can be passed to GestureDetector */
export type AnyGesture = GestureType | ComposedGesture;

/**
 * Compose an array of gestures using the specified priority strategy.
 *
 * - `simultaneous` — All gestures can activate at the same time.
 * - `exclusive`    — Only one gesture in the group can activate (first wins).
 * - `race`         — Gestures compete; the first to activate cancels the rest.
 *
 * If only one gesture is provided it is returned as-is.
 */
export function composeGestures(
  gestures: GestureType[],
  priority: GesturePriority = 'simultaneous'
): AnyGesture {
  if (gestures.length === 0) {
    throw new Error('[react-native-gesture-kit] composeGestures requires at least one gesture.');
  }

  if (gestures.length === 1) {
    return gestures[0];
  }

  switch (priority) {
    case 'simultaneous':
      return Gesture.Simultaneous(...gestures);
    case 'exclusive':
      return Gesture.Exclusive(...gestures);
    case 'race':
      return Gesture.Race(...gestures);
    default:
      return Gesture.Simultaneous(...gestures);
  }
}
