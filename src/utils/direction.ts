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
export function detectSwipeDirection(
  translationX: number,
  translationY: number,
  velocityX: number,
  velocityY: number
): SwipeDirection {
  const absVX = Math.abs(velocityX);
  const absVY = Math.abs(velocityY);
  const absTX = Math.abs(translationX);
  const absTY = Math.abs(translationY);

  // Use velocity if meaningful, otherwise fall back to translation
  const isHorizontal =
    absVX + absVY > 0 ? absVX > absVY : absTX > absTY;

  if (isHorizontal) {
    const primary = absVX > 0 ? velocityX : translationX;
    return primary < 0 ? 'left' : 'right';
  } else {
    const primary = absVY > 0 ? velocityY : translationY;
    return primary < 0 ? 'up' : 'down';
  }
}

/**
 * Check if a detected direction matches the desired direction.
 * Returns true if no desired direction is specified (any direction).
 */
export function matchesDirection(
  detected: SwipeDirection,
  desired?: SwipeDirection
): boolean {
  if (!desired) return true;
  return detected === desired;
}

/**
 * Calculate the magnitude of a 2D vector.
 */
export function magnitude(x: number, y: number): number {
  return Math.sqrt(x * x + y * y);
}
