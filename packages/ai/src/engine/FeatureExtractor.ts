/**
 * FeatureExtractor — converts raw touch points into meaningful gesture features.
 * Pure computation, no side effects.
 */

import type { Point } from '../utils/math';
import {
  distance,
  pathLength,
  angle,
  averageVelocity,
  velocity,
  snapToDirection,
  snapToCardinal,
  curvature,
  boundingBox,
} from '../utils/math';
import type { Direction, CardinalDirection, BoundingBox } from '../utils/math';

/** Extracted features from a sequence of touch points */
export interface GestureFeatures {
  /** Average velocity in px/s */
  velocity: number;
  /** Peak velocity observed in px/s */
  peakVelocity: number;
  /** 8-way direction from start to end */
  direction: Direction;
  /** 4-way cardinal direction from start to end */
  cardinalDirection: CardinalDirection;
  /** Straight-line distance from first to last point (px) */
  distance: number;
  /** Total path length (px) */
  pathLength: number;
  /** Duration from first to last point (ms) */
  duration: number;
  /** Average angle change across the path (radians) */
  curvature: number;
  /** Velocity change over time (px/s²) */
  acceleration: number;
  /** Number of touch points collected */
  pointCount: number;
  /** Bounding box of all points */
  boundingBox: BoundingBox;
  /** Start position */
  startPoint: { x: number; y: number };
  /** End position */
  endPoint: { x: number; y: number };
  /** Raw points (for shape recognition) */
  points: Point[];
  /** Whether direction has been stable (same cardinal for 4+ consecutive segments) */
  directionStable: boolean;
}

/**
 * Extract gesture features from a sequence of touch points.
 * Returns null if there aren't enough points (need at least 2).
 */
export function extractFeatures(points: Point[]): GestureFeatures | null {
  if (points.length < 2) return null;

  const first = points[0];
  const last = points[points.length - 1];

  // Basic measurements
  const dist = distance(first, last);
  const totalPath = pathLength(points);
  const dur = last.timestamp - first.timestamp;
  const avgVel = averageVelocity(points);

  // Peak velocity (sliding window of 2)
  let peakVel = 0;
  for (let i = 1; i < points.length; i++) {
    const v = velocity(points[i - 1], points[i]);
    if (v > peakVel) peakVel = v;
  }

  // Direction from start to end
  const ang = angle(first, last);
  const dir = snapToDirection(ang);
  const cardinalDir = snapToCardinal(ang);

  // Curvature
  const curv = curvature(points);

  // Acceleration: compare velocity of first half vs second half
  const mid = Math.floor(points.length / 2);
  const firstHalfVel = mid > 1 ? averageVelocity(points.slice(0, mid)) : 0;
  const secondHalfVel =
    points.length - mid > 1 ? averageVelocity(points.slice(mid)) : 0;
  const accel =
    dur > 0 ? ((secondHalfVel - firstHalfVel) / (dur / 1000)) : 0;

  // Direction stability: check if the last 4+ segments share the same cardinal
  let directionStable = false;
  if (points.length >= 5) {
    const recentPoints = points.slice(-5);
    const directions = new Set<CardinalDirection>();
    for (let i = 1; i < recentPoints.length; i++) {
      const a = angle(recentPoints[i - 1], recentPoints[i]);
      directions.add(snapToCardinal(a));
    }
    directionStable = directions.size === 1;
  }

  return {
    velocity: avgVel,
    peakVelocity: peakVel,
    direction: dir,
    cardinalDirection: cardinalDir,
    distance: dist,
    pathLength: totalPath,
    duration: dur,
    curvature: curv,
    acceleration: accel,
    pointCount: points.length,
    boundingBox: boundingBox(points),
    startPoint: { x: first.x, y: first.y },
    endPoint: { x: last.x, y: last.y },
    points,
    directionStable,
  };
}
