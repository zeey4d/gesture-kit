/**
 * SwipeGesture — A component that detects swipe gestures in any or a specific direction.
 *
 * Internally uses a Pan gesture with threshold/velocity analysis to
 * determine when a pan constitutes a swipe.
 *
 * @example
 * ```tsx
 * <SwipeGesture direction="left" onSwipe={(e) => console.log('Swiped left!', e)}>
 *   <Card />
 * </SwipeGesture>
 * ```
 */
import React from 'react';
import type { SwipeGestureProps } from '../types';
export declare const SwipeGesture: React.FC<SwipeGestureProps>;
//# sourceMappingURL=SwipeGesture.d.ts.map