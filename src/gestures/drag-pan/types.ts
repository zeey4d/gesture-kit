/**
 * Types for Drag/Pan gestures.
 */
import type { BaseGestureEvent, BaseGestureProps, SwipeDirection, PanEvent, SwipeEvent, UsePanOptions } from '../../types';
export type { SwipeDirection, PanEvent, SwipeEvent, UsePanOptions };
export type EdgePosition = 'top' | 'bottom' | 'left' | 'right';
export type CornerPosition = 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';


export interface DragEvent extends PanEvent {
  state: 'start' | 'move' | 'end';
}

export interface DragAndDropEvent extends DragEvent {
  dropTargetId?: string;
}


export interface EdgeSwipeEvent extends SwipeEvent {
  edge: EdgePosition;
}

export interface CornerSwipeEvent extends SwipeEvent {
  corner: CornerPosition;
}

export interface CurvedSwipeEvent extends SwipeEvent {
  curvature: number;
  path: Array<{ x: number; y: number }>;
}

export interface CircularSwipeEvent extends BaseGestureEvent {
  angle: number;
  direction: 'clockwise' | 'counterclockwise';
  revolutions: number;
}

export interface PanProps extends BaseGestureProps {
  onPanStart?: (event: PanEvent) => void;
  onPanMove?: (event: PanEvent) => void;
  onPanEnd?: (event: PanEvent) => void;
  minDistance?: number;
}

export interface DragProps extends BaseGestureProps {
  onDragStart?: (event: DragEvent) => void;
  onDrag?: (event: DragEvent) => void;
  onDragEnd?: (event: DragEvent) => void;
}

export interface DragAndDropProps extends BaseGestureProps {
  onDragStart?: (event: DragAndDropEvent) => void;
  onDrag?: (event: DragAndDropEvent) => void;
  onDrop?: (event: DragAndDropEvent) => void;
}

export interface SwipeProps extends BaseGestureProps {
  onSwipe: (event: SwipeEvent) => void;
  direction?: SwipeDirection;
  threshold?: number;
  velocityThreshold?: number;
}

export interface EdgeSwipeProps extends BaseGestureProps {
  onEdgeSwipe: (event: EdgeSwipeEvent) => void;
  edge?: EdgePosition;
  edgeWidth?: number;
}

export interface CornerSwipeProps extends BaseGestureProps {
  onCornerSwipe: (event: CornerSwipeEvent) => void;
  corner?: CornerPosition;
  cornerSize?: number;
}

export interface DiagonalSwipeProps extends BaseGestureProps {
  onDiagonalSwipe: (event: SwipeEvent) => void;
  threshold?: number;
}

export interface CurvedSwipeProps extends BaseGestureProps {
  onCurvedSwipe: (event: CurvedSwipeEvent) => void;
  minCurvature?: number;
}

export interface CircularSwipeProps extends BaseGestureProps {
  onCircularSwipe: (event: CircularSwipeEvent) => void;
  minAngle?: number;
}


export interface UseDragOptions { onDragStart?: (e: DragEvent) => void; onDrag?: (e: DragEvent) => void; onDragEnd?: (e: DragEvent) => void; enabled?: boolean; }
export interface UseDragAndDropOptions { onDragStart?: (e: DragAndDropEvent) => void; onDrag?: (e: DragAndDropEvent) => void; onDrop?: (e: DragAndDropEvent) => void; enabled?: boolean; }
export interface UseSwipeUpOptions { onSwipeUp: (e: SwipeEvent) => void; threshold?: number; enabled?: boolean; }
export interface UseSwipeDownOptions { onSwipeDown: (e: SwipeEvent) => void; threshold?: number; enabled?: boolean; }
export interface UseSwipeLeftOptions { onSwipeLeft: (e: SwipeEvent) => void; threshold?: number; enabled?: boolean; }
export interface UseSwipeRightOptions { onSwipeRight: (e: SwipeEvent) => void; threshold?: number; enabled?: boolean; }
export interface UseEdgeSwipeOptions { onEdgeSwipe: (e: EdgeSwipeEvent) => void; edge?: EdgePosition; edgeWidth?: number; enabled?: boolean; }
export interface UseCornerSwipeOptions { onCornerSwipe: (e: CornerSwipeEvent) => void; corner?: CornerPosition; cornerSize?: number; enabled?: boolean; }
export interface UseDiagonalSwipeOptions { onDiagonalSwipe: (e: SwipeEvent) => void; threshold?: number; enabled?: boolean; }
export interface UseCurvedSwipeOptions { onCurvedSwipe: (e: CurvedSwipeEvent) => void; minCurvature?: number; enabled?: boolean; }
export interface UseCircularSwipeOptions { onCircularSwipe: (e: CircularSwipeEvent) => void; minAngle?: number; enabled?: boolean; }
