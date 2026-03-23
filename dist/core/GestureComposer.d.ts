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
import React from 'react';
import type { GestureComposerProps } from '../types';
/**
 * `<Gesture>` — A declarative gesture composer component.
 *
 * Enable gestures via boolean or value props, attach callbacks,
 * and control conflict resolution with `priority`.
 */
export declare const GestureComposer: React.FC<GestureComposerProps>;
//# sourceMappingURL=GestureComposer.d.ts.map