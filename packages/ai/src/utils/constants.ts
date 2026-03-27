/**
 * Default thresholds and tuning parameters for the gesture engine.
 * All values are calibrated for typical mobile touch interactions.
 */

// ── Classification Thresholds ─────────────────────────────────────

/** Maximum duration (ms) for a touch to be considered a tap */
export const TAP_MAX_DURATION = 250;

/** Maximum distance (px) finger can travel during a tap */
export const TAP_MAX_DISTANCE = 15;

/** Minimum duration (ms) for a long press */
export const LONG_PRESS_MIN_DURATION = 500;

/** Maximum distance (px) finger can travel during a long press */
export const LONG_PRESS_MAX_DISTANCE = 20;

/** Minimum velocity (px/s) for a swipe */
export const SWIPE_MIN_VELOCITY = 400;

/** Minimum distance (px) for a swipe */
export const SWIPE_MIN_DISTANCE = 60;

/** Minimum distance (px) to consider a pan gesture */
export const PAN_MIN_DISTANCE = 15;

/** Minimum point count to consider shape recognition */
export const SHAPE_MIN_POINTS = 15;

/** Minimum curvature (radians) to consider a shape gesture */
export const SHAPE_MIN_CURVATURE = 0.15;

// ── Prediction Thresholds ─────────────────────────────────────────

/** Minimum points before attempting prediction */
export const PREDICT_MIN_POINTS = 5;

/** Duration threshold (ms) for early long-press prediction */
export const PREDICT_LONG_PRESS_DURATION = 150;

/** Velocity threshold (px/s) for early swipe prediction */
export const PREDICT_SWIPE_VELOCITY = 300;

/** Number of consecutive stable-direction points needed for swipe prediction */
export const PREDICT_DIRECTION_STABILITY = 4;

// ── Adaptive Learning ─────────────────────────────────────────────

/** Smoothing factor for exponential moving average (0–1, lower = smoother) */
export const ADAPTIVE_SMOOTHING = 0.05;

/** Minimum gesture count before adaptive thresholds kick in */
export const ADAPTIVE_MIN_GESTURES = 20;

/** Maximum deviation factor from defaults (prevents runaway adaptation) */
export const ADAPTIVE_MAX_DEVIATION = 0.5;

// ── Buffer & Performance ──────────────────────────────────────────

/** Maximum touch points stored in the circular buffer */
export const POINT_BUFFER_SIZE = 256;

/** Minimum interval (ms) between processing touch events */
export const THROTTLE_INTERVAL = 8; // ~120fps

// ── Sensitivity Multipliers ───────────────────────────────────────

export const SENSITIVITY_MULTIPLIERS = {
  low: { velocity: 1.3, distance: 1.3, duration: 0.8 },
  normal: { velocity: 1.0, distance: 1.0, duration: 1.0 },
  high: { velocity: 0.7, distance: 0.7, duration: 1.2 },
} as const;

export type Sensitivity = keyof typeof SENSITIVITY_MULTIPLIERS;
