/**
 * Swipe direction detection utilities.
 *
 * @module utils/direction
 */
import type { SwipeDirection } from '../types';
/**
 * Detect swipe direction from pan translation and velocity.
 *
 * Uses velocity as the primary signal. Falls back to translation
 * when velocity is near-zero.
 */
export declare function detectSwipeDirection(translationX: number, translationY: number, velocityX: number, velocityY: number): SwipeDirection;
/**
 * Check if a detected direction matches the desired direction.
 * Returns true if no desired direction is specified (any direction).
 */
export declare function matchesDirection(detected: SwipeDirection, desired?: SwipeDirection): boolean;
/**
 * Calculate the magnitude of a 2D vector.
 */
export declare function magnitude(x: number, y: number): number;
//# sourceMappingURL=direction.d.ts.map