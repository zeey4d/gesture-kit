/**
 * Type definitions for this gesture category.
 */
import type { BaseGestureEvent } from '../../types';
export interface DrawPoint {
    x: number;
    y: number;
    timestamp: number;
    pressure?: number;
}
export interface DrawEvent extends BaseGestureEvent {
    path: DrawPoint[];
    strokeWidth: number;
}
export interface ShapeRecognitionEvent extends DrawEvent {
    shape: string;
    confidence: number;
}
//# sourceMappingURL=types.d.ts.map