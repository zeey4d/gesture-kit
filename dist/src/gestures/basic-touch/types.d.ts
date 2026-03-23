/**
 * Types for Basic Touch gestures.
 */
import type { BaseGestureEvent, BaseGestureProps, TapEvent, LongPressEvent } from '../../types';
export interface PressForceEvent extends BaseGestureEvent {
    force: number;
}
export interface TapProps extends BaseGestureProps {
    onTap: (event: TapEvent) => void;
    numberOfTaps?: number;
    maxDuration?: number;
    maxDistance?: number;
}
export interface DoubleTapProps extends BaseGestureProps {
    onDoubleTap: (event: TapEvent) => void;
    maxDelay?: number;
    maxDistance?: number;
}
export interface TripleTapProps extends BaseGestureProps {
    onTripleTap: (event: TapEvent) => void;
    maxDelay?: number;
    maxDistance?: number;
}
export interface QuadTapProps extends BaseGestureProps {
    onQuadTap: (event: TapEvent) => void;
    maxDelay?: number;
    maxDistance?: number;
}
export interface LongPressProps extends BaseGestureProps {
    onLongPress: (event: LongPressEvent) => void;
    onPressIn?: (event: LongPressEvent) => void;
    onPressOut?: (event: LongPressEvent) => void;
    minDuration?: number;
    maxDistance?: number;
}
export interface VeryLongPressProps extends BaseGestureProps {
    onVeryLongPress: (event: LongPressEvent) => void;
    onPressIn?: (event: LongPressEvent) => void;
    onPressOut?: (event: LongPressEvent) => void;
    minDuration?: number;
    maxDistance?: number;
}
export interface TapAndHoldProps extends BaseGestureProps {
    onTapAndHold: (event: LongPressEvent) => void;
    onTap?: (event: TapEvent) => void;
    holdDuration?: number;
}
export interface TapCancelProps extends BaseGestureProps {
    onTapCancel: (event: BaseGestureEvent) => void;
    onTapStart?: (event: BaseGestureEvent) => void;
    maxDuration?: number;
}
export interface PressForceProps extends BaseGestureProps {
    onPressForce: (event: PressForceEvent) => void;
    forceThreshold?: number;
}
export interface UseTripleTapOptions {
    onTripleTap: (event: TapEvent) => void;
    maxDelay?: number;
    maxDistance?: number;
    enabled?: boolean;
}
export interface UseQuadTapOptions {
    onQuadTap: (event: TapEvent) => void;
    maxDelay?: number;
    maxDistance?: number;
    enabled?: boolean;
}
export interface UseVeryLongPressOptions {
    onVeryLongPress: (event: LongPressEvent) => void;
    onPressIn?: (event: LongPressEvent) => void;
    onPressOut?: (event: LongPressEvent) => void;
    minDuration?: number;
    maxDistance?: number;
    enabled?: boolean;
}
export interface UseTapAndHoldOptions {
    onTapAndHold: (event: LongPressEvent) => void;
    onTap?: (event: TapEvent) => void;
    holdDuration?: number;
    enabled?: boolean;
}
export interface UseTapCancelOptions {
    onTapCancel: (event: BaseGestureEvent) => void;
    onTapStart?: (event: BaseGestureEvent) => void;
    maxDuration?: number;
    enabled?: boolean;
}
export interface UsePressForceOptions {
    onPressForce: (event: PressForceEvent) => void;
    forceThreshold?: number;
    enabled?: boolean;
}
//# sourceMappingURL=types.d.ts.map