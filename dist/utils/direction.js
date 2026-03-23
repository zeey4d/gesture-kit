"use strict";
/**
 * Swipe direction detection utilities.
 *
 * @module utils/direction
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.detectSwipeDirection = detectSwipeDirection;
exports.matchesDirection = matchesDirection;
exports.magnitude = magnitude;
/**
 * Detect swipe direction from pan translation and velocity.
 *
 * Uses velocity as the primary signal. Falls back to translation
 * when velocity is near-zero.
 */
function detectSwipeDirection(translationX, translationY, velocityX, velocityY) {
    const absVX = Math.abs(velocityX);
    const absVY = Math.abs(velocityY);
    const absTX = Math.abs(translationX);
    const absTY = Math.abs(translationY);
    // Use velocity if meaningful, otherwise fall back to translation
    const isHorizontal = absVX + absVY > 0 ? absVX > absVY : absTX > absTY;
    if (isHorizontal) {
        const primary = absVX > 0 ? velocityX : translationX;
        return primary < 0 ? 'left' : 'right';
    }
    else {
        const primary = absVY > 0 ? velocityY : translationY;
        return primary < 0 ? 'up' : 'down';
    }
}
/**
 * Check if a detected direction matches the desired direction.
 * Returns true if no desired direction is specified (any direction).
 */
function matchesDirection(detected, desired) {
    if (!desired)
        return true;
    return detected === desired;
}
/**
 * Calculate the magnitude of a 2D vector.
 */
function magnitude(x, y) {
    return Math.sqrt(x * x + y * y);
}
//# sourceMappingURL=direction.js.map