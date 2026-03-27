/**
 * ShapeRecognizer — $1 Unistroke Recognizer implementation.
 * 
 * Based on the academic paper:
 *   Wobbrock, J.O., Wilson, A.D., and Li, Y. (2007).
 *   "Gestures without libraries, toolkits or training:
 *    A $1 recognizer for user interface prototypes."
 *
 * ~120 lines of pure math. 96%+ accuracy on single-stroke shapes.
 */

import type { Point } from '../utils/math';
import { distance, centroid, boundingBox } from '../utils/math';

// ── Types ─────────────────────────────────────────────────────────

export interface ShapeTemplate {
  name: string;
  points: Array<{ x: number; y: number }>;
}

export interface ShapeResult {
  shape: string;
  score: number;
}

// ── $1 Recognizer Core ────────────────────────────────────────────

/** Number of points to resample to */
const NUM_POINTS = 64;

/** Size of the bounding square for normalization */
const SQUARE_SIZE = 250;

/** Golden ratio for optimal rotation search */
const PHI = 0.5 * (-1 + Math.sqrt(5));

/** Rotation search bounds (radians) */
const ANGLE_RANGE = Math.PI / 4; // ±45°
const ANGLE_PRECISION = Math.PI / 90; // 2°

// ── Helper Functions ──────────────────────────────────────────────

type SimplePoint = { x: number; y: number };

function pathLen(pts: SimplePoint[]): number {
  let d = 0;
  for (let i = 1; i < pts.length; i++) {
    d += Math.sqrt(
      (pts[i].x - pts[i - 1].x) ** 2 + (pts[i].y - pts[i - 1].y) ** 2,
    );
  }
  return d;
}

function resample(points: SimplePoint[], n: number): SimplePoint[] {
  const interval = pathLen(points) / (n - 1);
  let D = 0;
  const newPoints: SimplePoint[] = [{ ...points[0] }];

  for (let i = 1; i < points.length; i++) {
    const d = Math.sqrt(
      (points[i].x - points[i - 1].x) ** 2 +
        (points[i].y - points[i - 1].y) ** 2,
    );
    if (D + d >= interval) {
      const t = (interval - D) / d;
      const x = points[i - 1].x + t * (points[i].x - points[i - 1].x);
      const y = points[i - 1].y + t * (points[i].y - points[i - 1].y);
      const q = { x, y };
      newPoints.push(q);
      points.splice(i, 0, q);
      D = 0;
    } else {
      D += d;
    }
  }

  // Edge case: ensure we have exactly n points
  while (newPoints.length < n) {
    newPoints.push({ ...points[points.length - 1] });
  }

  return newPoints.slice(0, n);
}

function indicativeAngle(points: SimplePoint[]): number {
  const c = getCentroid(points);
  return Math.atan2(c.y - points[0].y, c.x - points[0].x);
}

function getCentroid(points: SimplePoint[]): SimplePoint {
  let sx = 0;
  let sy = 0;
  for (const p of points) {
    sx += p.x;
    sy += p.y;
  }
  return { x: sx / points.length, y: sy / points.length };
}

function rotateBy(points: SimplePoint[], radians: number): SimplePoint[] {
  const c = getCentroid(points);
  const cos = Math.cos(radians);
  const sin = Math.sin(radians);
  return points.map((p) => ({
    x: (p.x - c.x) * cos - (p.y - c.y) * sin + c.x,
    y: (p.x - c.x) * sin + (p.y - c.y) * cos + c.y,
  }));
}

function scaleTo(points: SimplePoint[], size: number): SimplePoint[] {
  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
  for (const p of points) {
    minX = Math.min(minX, p.x);
    minY = Math.min(minY, p.y);
    maxX = Math.max(maxX, p.x);
    maxY = Math.max(maxY, p.y);
  }
  const w = maxX - minX;
  const h = maxY - minY;
  return points.map((p) => ({
    x: w > 0 ? (p.x * size) / w : p.x,
    y: h > 0 ? (p.y * size) / h : p.y,
  }));
}

function translateTo(points: SimplePoint[], origin: SimplePoint): SimplePoint[] {
  const c = getCentroid(points);
  return points.map((p) => ({
    x: p.x + origin.x - c.x,
    y: p.y + origin.y - c.y,
  }));
}

function pathDistance(a: SimplePoint[], b: SimplePoint[]): number {
  let d = 0;
  for (let i = 0; i < a.length; i++) {
    d += Math.sqrt((a[i].x - b[i].x) ** 2 + (a[i].y - b[i].y) ** 2);
  }
  return d / a.length;
}

function distanceAtAngle(
  points: SimplePoint[],
  template: SimplePoint[],
  angle: number,
): number {
  const rotated = rotateBy(points, angle);
  return pathDistance(rotated, template);
}

function distanceAtBestAngle(
  points: SimplePoint[],
  template: SimplePoint[],
): number {
  let a = -ANGLE_RANGE;
  let b = ANGLE_RANGE;
  let x1 = PHI * a + (1 - PHI) * b;
  let x2 = (1 - PHI) * a + PHI * b;
  let f1 = distanceAtAngle(points, template, x1);
  let f2 = distanceAtAngle(points, template, x2);

  while (Math.abs(b - a) > ANGLE_PRECISION) {
    if (f1 < f2) {
      b = x2;
      x2 = x1;
      f2 = f1;
      x1 = PHI * a + (1 - PHI) * b;
      f1 = distanceAtAngle(points, template, x1);
    } else {
      a = x1;
      x1 = x2;
      f1 = f2;
      x2 = (1 - PHI) * a + PHI * b;
      f2 = distanceAtAngle(points, template, x2);
    }
  }

  return Math.min(f1, f2);
}

function normalize(points: SimplePoint[]): SimplePoint[] {
  let processed = resample(points, NUM_POINTS);
  const angle = indicativeAngle(processed);
  processed = rotateBy(processed, -angle);
  processed = scaleTo(processed, SQUARE_SIZE);
  processed = translateTo(processed, { x: 0, y: 0 });
  return processed;
}

// ── Built-in Templates ────────────────────────────────────────────

function generateCircle(): SimplePoint[] {
  const pts: SimplePoint[] = [];
  for (let i = 0; i <= 32; i++) {
    const angle = (i / 32) * Math.PI * 2;
    pts.push({ x: Math.cos(angle) * 100, y: Math.sin(angle) * 100 });
  }
  return pts;
}

function generateTriangle(): SimplePoint[] {
  return [
    { x: 150, y: 0 },
    { x: 300, y: 260 },
    { x: 0, y: 260 },
    { x: 150, y: 0 },
  ];
}

function generateSquare(): SimplePoint[] {
  return [
    { x: 0, y: 0 },
    { x: 200, y: 0 },
    { x: 200, y: 200 },
    { x: 0, y: 200 },
    { x: 0, y: 0 },
  ];
}

function generateCheckmark(): SimplePoint[] {
  return [
    { x: 0, y: 150 },
    { x: 60, y: 250 },
    { x: 200, y: 0 },
  ];
}

function generateX(): SimplePoint[] {
  // Draw X as two strokes merged
  return [
    { x: 0, y: 0 },
    { x: 100, y: 50 },
    { x: 200, y: 0 },
    { x: 100, y: 50 },
    { x: 200, y: 100 },
    { x: 100, y: 50 },
    { x: 0, y: 100 },
  ];
}

function generateStar(): SimplePoint[] {
  const pts: SimplePoint[] = [];
  for (let i = 0; i < 5; i++) {
    // Outer point
    const outerAngle = (i * 72 - 90) * (Math.PI / 180);
    pts.push({
      x: Math.cos(outerAngle) * 100 + 100,
      y: Math.sin(outerAngle) * 100 + 100,
    });
    // Inner point
    const innerAngle = ((i * 72 + 36) - 90) * (Math.PI / 180);
    pts.push({
      x: Math.cos(innerAngle) * 40 + 100,
      y: Math.sin(innerAngle) * 40 + 100,
    });
  }
  pts.push({ ...pts[0] }); // close
  return pts;
}

function generateArrowRight(): SimplePoint[] {
  return [
    { x: 0, y: 100 },
    { x: 200, y: 100 },
    { x: 150, y: 50 },
    { x: 200, y: 100 },
    { x: 150, y: 150 },
  ];
}

function generateHeart(): SimplePoint[] {
  const pts: SimplePoint[] = [];
  for (let i = 0; i <= 30; i++) {
    const t = (i / 30) * Math.PI * 2;
    const x = 16 * Math.sin(t) ** 3;
    const y = -(
      13 * Math.cos(t) -
      5 * Math.cos(2 * t) -
      2 * Math.cos(3 * t) -
      Math.cos(4 * t)
    );
    pts.push({ x: x * 8 + 150, y: y * 8 + 150 });
  }
  return pts;
}

const BUILT_IN_TEMPLATES: ShapeTemplate[] = [
  { name: 'circle', points: generateCircle() },
  { name: 'triangle', points: generateTriangle() },
  { name: 'square', points: generateSquare() },
  { name: 'checkmark', points: generateCheckmark() },
  { name: 'x', points: generateX() },
  { name: 'star', points: generateStar() },
  { name: 'arrow', points: generateArrowRight() },
  { name: 'heart', points: generateHeart() },
];

// ── ShapeRecognizer Class ─────────────────────────────────────────

export class ShapeRecognizer {
  private templates: Array<{ name: string; points: SimplePoint[] }> = [];

  constructor(customTemplates?: ShapeTemplate[]) {
    // Normalize and store built-in templates
    for (const t of BUILT_IN_TEMPLATES) {
      this.templates.push({ name: t.name, points: normalize(t.points) });
    }

    // Add custom templates
    if (customTemplates) {
      for (const t of customTemplates) {
        this.addTemplate(t);
      }
    }
  }

  /** Register a custom shape template */
  addTemplate(template: ShapeTemplate): void {
    this.templates.push({
      name: template.name,
      points: normalize(template.points),
    });
  }

  /**
   * Recognize a shape from a set of points.
   * Returns null if no match exceeds the minimum score.
   */
  recognize(inputPoints: SimplePoint[], minScore = 0.6): ShapeResult | null {
    if (inputPoints.length < 5) return null;

    const processed = normalize([...inputPoints]);
    const halfDiagonal =
      0.5 * Math.sqrt(SQUARE_SIZE * SQUARE_SIZE + SQUARE_SIZE * SQUARE_SIZE);

    let bestScore = 0;
    let bestName = '';

    for (const template of this.templates) {
      const d = distanceAtBestAngle(processed, template.points);
      const score = 1 - d / halfDiagonal;

      if (score > bestScore) {
        bestScore = score;
        bestName = template.name;
      }
    }

    if (bestScore < minScore) return null;

    return { shape: bestName, score: bestScore };
  }
}
