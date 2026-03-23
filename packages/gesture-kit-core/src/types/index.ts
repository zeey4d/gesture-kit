export interface BaseGestureEvent { [key: string]: any; }
export interface BaseGestureProps { [key: string]: any; }

export interface UseTapOptions { [key: string]: any; }
export interface TapEvent { [key: string]: any; }

export interface UseDoubleTapOptions { [key: string]: any; }
export interface UseTripleTapOptions { [key: string]: any; }
export interface UseQuadTapOptions { [key: string]: any; }

export interface UseLongPressOptions { [key: string]: any; }
export interface LongPressEvent { [key: string]: any; }

export interface UseVeryLongPressOptions { [key: string]: any; }
export interface UsePressForceOptions { [key: string]: any; }
export interface PressForceEvent { [key: string]: any; }

export interface UseTapAndHoldOptions { [key: string]: any; }
export interface UseTapCancelOptions { [key: string]: any; }

// From drag-pan
export type SwipeDirection = 'up' | 'down' | 'left' | 'right';
export interface PanEvent { [key: string]: any; }
export interface SwipeEvent { [key: string]: any; }
export interface UsePanOptions { [key: string]: any; }

// From transform
export interface PinchEvent { [key: string]: any; }
