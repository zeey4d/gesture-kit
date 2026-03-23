/**
 * Type definitions for this gesture category.
 */
import type { BaseGestureEvent } from '../../types';
export interface AirGestureEvent extends BaseGestureEvent {
    handId: number;
    confidence: number;
    depth: number;
}
export interface AirSwipeEvent extends AirGestureEvent {
    direction: 'up' | 'down' | 'left' | 'right';
    velocity: number;
}
export interface AirPinchEvent extends AirGestureEvent {
    scale: number;
}
export interface AirRotateEvent extends AirGestureEvent {
    rotation: number;
}
export interface AirDrawEvent extends AirGestureEvent {
    path: Array<{
        x: number;
        y: number;
        z: number;
    }>;
}
export interface MultiHandEvent extends AirGestureEvent {
    hands: number;
}
//# sourceMappingURL=types.d.ts.map