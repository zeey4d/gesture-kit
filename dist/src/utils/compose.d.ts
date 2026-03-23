/**
 * Gesture composition utilities.
 *
 * @module utils/compose
 */
import { type GestureType, type ComposedGesture } from 'react-native-gesture-handler';
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
export declare function composeGestures(gestures: GestureType[], priority?: GesturePriority): AnyGesture;
//# sourceMappingURL=compose.d.ts.map