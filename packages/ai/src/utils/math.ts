/**
 * Pure math utilities for gesture feature extraction.
 * No external dependencies.
 */

export interface Point {
  x: number;
  y: number;
  timestamp: number;
}

/** Euclidean distance between two points */
export function distance(a: Point, b: Point): number {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  return Math.sqrt(dx * dx + dy * dy);
}

/** Total path length across all points */
export function pathLength(points: Point[]): number {
  let length = 0;
  for (let i = 1; i < points.length; i++) {
    length += distance(points[i - 1], points[i]);
  }
  return length;
}

/** Angle in radians from point a to point b */
export function angle(a: Point, b: Point): number {
  return Math.atan2(b.y - a.y, b.x - a.x);
}

/** Velocity (px/s) between two points */
export function velocity(a: Point, b: Point): number {
  const dt = b.timestamp - a.timestamp;
  if (dt === 0) return 0;
  return distance(a, b) / (dt / 1000);
}

/** Average velocity across a set of points (px/s) */
export function averageVelocity(points: Point[]): number {
  if (points.length < 2) return 0;
  const totalDist = pathLength(points);
  const totalTime = points[points.length - 1].timestamp - points[0].timestamp;
  if (totalTime === 0) return 0;
  return totalDist / (totalTime / 1000);
}

/**
 * Snap a radian angle to one of 8 compass directions.
 */
export type Direction =
  | 'right'
  | 'up-right'
  | 'up'
  | 'up-left'
  | 'left'
  | 'down-left'
  | 'down'
  | 'down-right';

const DIRECTION_NAMES: Direction[] = [
  'right',
  'up-right',
  'up',
  'up-left',
  'left',
  'down-left',
  'down',
  'down-right',
];

export function snapToDirection(radians: number): Direction {
  // Normalize to 0..2π  (note: screen y-axis is inverted)
  let deg = (radians * 180) / Math.PI;
  if (deg < 0) deg += 360;
  const index = Math.round(deg / 45) % 8;
  return DIRECTION_NAMES[index];
}

/** Simple 4-direction snap */
export type CardinalDirection = 'left' | 'right' | 'up' | 'down';

export function snapToCardinal(radians: number): CardinalDirection {
  let deg = (radians * 180) / Math.PI;
  if (deg < 0) deg += 360;
  if (deg >= 315 || deg < 45) return 'right';
  if (deg >= 45 && deg < 135) return 'down'; // screen coords: positive y is down
  if (deg >= 135 && deg < 225) return 'left';
  return 'up';
}

/**
 * Curvature: average angle change across consecutive 3-point windows.
 * Higher = more curvy path. Returns value in radians.
 */
export function curvature(points: Point[]): number {
  if (points.length < 3) return 0;

  let totalAngleChange = 0;
  let count = 0;

  for (let i = 1; i < points.length - 1; i++) {
    const a1 = angle(points[i - 1], points[i]);
    const a2 = angle(points[i], points[i + 1]);
    let diff = Math.abs(a2 - a1);
    if (diff > Math.PI) diff = 2 * Math.PI - diff;
    totalAngleChange += diff;
    count++;
  }

  return count > 0 ? totalAngleChange / count : 0;
}

/** Bounding box of a set of points */
export interface BoundingBox {
  minX: number;
  minY: number;
  maxX: number;
  maxY: number;
  width: number;
  height: number;
}

export function boundingBox(points: Point[]): BoundingBox {
  if (points.length === 0) {
    return { minX: 0, minY: 0, maxX: 0, maxY: 0, width: 0, height: 0 };
  }

  let minX = Infinity;
  let minY = Infinity;
  let maxX = -Infinity;
  let maxY = -Infinity;

  for (const p of points) {
    if (p.x < minX) minX = p.x;
    if (p.y < minY) minY = p.y;
    if (p.x > maxX) maxX = p.x;
    if (p.y > maxY) maxY = p.y;
  }

  return { minX, minY, maxX, maxY, width: maxX - minX, height: maxY - minY };
}

/** Centroid of a set of points */
export function centroid(points: Point[]): { x: number; y: number } {
  if (points.length === 0) return { x: 0, y: 0 };
  let sx = 0;
  let sy = 0;
  for (const p of points) {
    sx += p.x;
    sy += p.y;
  }
  return { x: sx / points.length, y: sy / points.length };
}
