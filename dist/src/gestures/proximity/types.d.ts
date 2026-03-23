/**
 * Type definitions for this gesture category.
 */
import type { BaseGestureEvent } from '../../types';
export interface ProximityEvent extends BaseGestureEvent {
    distance: number;
    isNear: boolean;
}
export interface HoverEvent extends BaseGestureEvent {
    duration: number;
    distance: number;
}
//# sourceMappingURL=types.d.ts.map