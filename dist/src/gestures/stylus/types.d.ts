/**
 * Type definitions for this gesture category.
 */
import type { BaseGestureEvent } from '../../types';
export interface StylusEvent extends BaseGestureEvent {
    pressure: number;
    tiltX: number;
    tiltY: number;
}
export interface StylusTapEvent extends StylusEvent {
    numberOfTaps: number;
}
export interface StylusDrawEvent extends StylusEvent {
    path: Array<{
        x: number;
        y: number;
        pressure: number;
    }>;
    strokeWidth: number;
}
export interface StylusHoverEvent extends BaseGestureEvent {
    altitude: number;
    azimuth: number;
}
//# sourceMappingURL=types.d.ts.map