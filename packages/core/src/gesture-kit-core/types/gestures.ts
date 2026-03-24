/**
 * Core gesture types and interfaces for react-native-gesture-kit.
 *
 * @module types/gestures
 */

// ─── Enums ────────────────────────────────────────────────────────────────────

/** All possible states of a gesture recognizer */
export enum GestureState {
  UNDETERMINED = 0,
  BEGAN = 1,
  ACTIVE = 2,
  END = 3,
  CANCELLED = 4,
  FAILED = 5,
}

/** Swipe direction */
export type SwipeDirection = 'left' | 'right' | 'up' | 'down';

/** Fling direction using RNGH's direction constants */
export type FlingDirection = 'left' | 'right' | 'up' | 'down';

/** Gesture composition priority strategy  */
export type GesturePriority = 'simultaneous' | 'exclusive' | 'race';

// ─── Geometry ─────────────────────────────────────────────────────────────────

/** 2D point */
export interface Point {
  x: number;
  y: number;
}

/** Velocity vector */
export interface Velocity {
  x: number;
  y: number;
}

// ─── Event Payloads ───────────────────────────────────────────────────────────

/** Base event shared by all gestures */
export interface BaseGestureEvent {
  /** Absolute X position on screen */
  absoluteX: number;
  /** Absolute Y position on screen */
  absoluteY: number;
  /** X position relative to the handler view */
  x: number;
  /** Y position relative to the handler view */
  y: number;
}

/** Tap event payload */
export interface TapEvent extends BaseGestureEvent {
  /** Number of taps detected */
  numberOfTaps: number;
}

/** Long press event payload */
export interface LongPressEvent extends BaseGestureEvent {
  /** Duration of the long press in ms */
  duration: number;
}

/** Pan event payload */
export interface PanEvent extends BaseGestureEvent {
  /** Translation from the starting point */
  translationX: number;
  translationY: number;
  /** Current velocity */
  velocityX: number;
  velocityY: number;
}

/** Swipe event payload */
export interface SwipeEvent extends BaseGestureEvent {
  /** Detected swipe direction */
  direction: SwipeDirection;
  /** Swipe velocity */
  velocity: number;
  /** Translation distance */
  distance: number;
}

/** Pinch event payload */
export interface PinchEvent extends BaseGestureEvent {
  /** Current scale factor */
  scale: number;
  /** Velocity of the pinch */
  velocity: number;
  /** Focal point of the pinch */
  focalX: number;
  focalY: number;
}

/** Rotation event payload */
export interface RotationEvent extends BaseGestureEvent {
  /** Current rotation in radians */
  rotation: number;
  /** Angular velocity */
  velocity: number;
  /** Anchor point */
  anchorX: number;
  anchorY: number;
}

/** Fling event payload */
export interface FlingEvent extends BaseGestureEvent {
  /** Direction of the fling */
  direction: FlingDirection;
}

// ─── Component Props ──────────────────────────────────────────────────────────

/** Common props shared by all gesture components */
export interface BaseGestureProps {
  /** Whether the gesture is enabled */
  enabled?: boolean;
  /** Children to wrap */
  children: React.ReactNode;
}

/** TapGesture component props */
export interface TapGestureProps extends BaseGestureProps {
  /** Callback when tap is detected */
  onTap: (event: TapEvent) => void;
  /** Number of required taps (default: 1) */
  numberOfTaps?: number;
  /** Maximum duration of a tap in ms */
  maxDuration?: number;
  /** Maximum distance finger can travel */
  maxDistance?: number;
}

/** DoubleTapGesture component props */
export interface DoubleTapGestureProps extends BaseGestureProps {
  /** Callback when double tap is detected */
  onDoubleTap: (event: TapEvent) => void;
  /** Maximum delay between taps in ms */
  maxDelay?: number;
  /** Maximum distance between taps */
  maxDistance?: number;
}

/** LongPressGesture component props */
export interface LongPressGestureProps extends BaseGestureProps {
  /** Callback when long press is detected */
  onLongPress: (event: LongPressEvent) => void;
  /** Callback when press begins */
  onPressIn?: (event: LongPressEvent) => void;
  /** Callback when press ends */
  onPressOut?: (event: LongPressEvent) => void;
  /** Minimum duration to trigger (default: 500ms) */
  minDuration?: number;
  /** Maximum distance finger can travel */
  maxDistance?: number;
}

/** SwipeGesture component props */
export interface SwipeGestureProps extends BaseGestureProps {
  /** Callback when swipe is detected */
  onSwipe: (event: SwipeEvent) => void;
  /** Required swipe direction (any if omitted) */
  direction?: SwipeDirection;
  /** Minimum distance to qualify as swipe (default: 50) */
  threshold?: number;
  /** Minimum velocity to qualify (default: 300) */
  velocityThreshold?: number;
}

/** PanGesture component props */
export interface PanGestureProps extends BaseGestureProps {
  /** Callback when pan starts */
  onPanStart?: (event: PanEvent) => void;
  /** Callback during panning */
  onPanMove?: (event: PanEvent) => void;
  /** Callback when pan ends */
  onPanEnd?: (event: PanEvent) => void;
  /** Minimum distance to activate (default: 10) */
  minDistance?: number;
  /** Minimum number of pointers */
  minPointers?: number;
  /** Maximum number of pointers */
  maxPointers?: number;
}

/** PinchGesture component props */
export interface PinchGestureProps extends BaseGestureProps {
  /** Callback when pinch starts */
  onPinchStart?: (event: PinchEvent) => void;
  /** Callback during pinching */
  onPinch?: (event: PinchEvent) => void;
  /** Callback when pinch ends */
  onPinchEnd?: (event: PinchEvent) => void;
}

/** RotationGesture component props */
export interface RotationGestureProps extends BaseGestureProps {
  /** Callback when rotation starts */
  onRotationStart?: (event: RotationEvent) => void;
  /** Callback during rotation */
  onRotation?: (event: RotationEvent) => void;
  /** Callback when rotation ends */
  onRotationEnd?: (event: RotationEvent) => void;
}

/** FlingGesture component props */
export interface FlingGestureProps extends BaseGestureProps {
  /** Callback when fling is detected */
  onFling: (event: FlingEvent) => void;
  /** Required fling direction */
  direction?: FlingDirection;
  /** Number of required touching pointers (default: 1) */
  numberOfPointers?: number;
}

// ─── Gesture Composer Props ───────────────────────────────────────────────────

/** Props for the <Gesture> composer component */
export interface GestureComposerProps extends BaseGestureProps {
  /** Enable tap gesture */
  tap?: boolean;
  /** Enable double tap gesture */
  doubleTap?: boolean;
  /** Enable long press gesture */
  longPress?: boolean;
  /** Enable swipe gesture — pass true for any direction, or a specific direction */
  swipe?: boolean | SwipeDirection;
  /** Enable pan gesture */
  pan?: boolean;
  /** Enable pinch gesture */
  pinch?: boolean;
  /** Enable rotation gesture */
  rotate?: boolean;
  /** Enable fling gesture — pass true for any direction, or a specific direction */
  fling?: boolean | FlingDirection;

  /** How to compose multiple gestures */
  priority?: GesturePriority;

  // Callbacks
  onTap?: (event: TapEvent) => void;
  onDoubleTap?: (event: TapEvent) => void;
  onLongPress?: (event: LongPressEvent) => void;
  onSwipe?: (event: SwipeEvent) => void;
  onPanStart?: (event: PanEvent) => void;
  onPanMove?: (event: PanEvent) => void;
  onPanEnd?: (event: PanEvent) => void;
  onPinchStart?: (event: PinchEvent) => void;
  onPinch?: (event: PinchEvent) => void;
  onPinchEnd?: (event: PinchEvent) => void;
  onRotationStart?: (event: RotationEvent) => void;
  onRotation?: (event: RotationEvent) => void;
  onRotationEnd?: (event: RotationEvent) => void;
  onFling?: (event: FlingEvent) => void;
}

// ─── Hook Return Types ────────────────────────────────────────────────────────

/** Options for useTap hook */
export interface UseTapOptions {
  onTap: (event: TapEvent) => void;
  numberOfTaps?: number;
  maxDuration?: number;
  maxDistance?: number;
  enabled?: boolean;
}

/** Options for useDoubleTap hook */
export interface UseDoubleTapOptions {
  onDoubleTap: (event: TapEvent) => void;
  maxDelay?: number;
  maxDistance?: number;
  enabled?: boolean;
}

/** Options for useLongPress hook */
export interface UseLongPressOptions {
  onLongPress: (event: LongPressEvent) => void;
  onPressIn?: (event: LongPressEvent) => void;
  onPressOut?: (event: LongPressEvent) => void;
  minDuration?: number;
  maxDistance?: number;
  enabled?: boolean;
}

/** Options for useSwipe hook */
export interface UseSwipeOptions {
  onSwipe: (event: SwipeEvent) => void;
  direction?: SwipeDirection;
  threshold?: number;
  velocityThreshold?: number;
  enabled?: boolean;
}

/** Options for usePan hook */
export interface UsePanOptions {
  onPanStart?: (event: PanEvent) => void;
  onPanMove?: (event: PanEvent) => void;
  onPanEnd?: (event: PanEvent) => void;
  minDistance?: number;
  minPointers?: number;
  maxPointers?: number;
  enabled?: boolean;
}

/** Options for usePinch hook */
export interface UsePinchOptions {
  onPinchStart?: (event: PinchEvent) => void;
  onPinch?: (event: PinchEvent) => void;
  onPinchEnd?: (event: PinchEvent) => void;
  enabled?: boolean;
}

/** Options for useRotation hook */
export interface UseRotationOptions {
  onRotationStart?: (event: RotationEvent) => void;
  onRotation?: (event: RotationEvent) => void;
  onRotationEnd?: (event: RotationEvent) => void;
  enabled?: boolean;
}

/** Options for useFling hook */
export interface UseFlingOptions {
  onFling: (event: FlingEvent) => void;
  direction?: FlingDirection;
  numberOfPointers?: number;
  enabled?: boolean;
}

/** Options for useGesture (composer) hook */
export interface UseGestureOptions {
  tap?: UseTapOptions;
  doubleTap?: UseDoubleTapOptions;
  longPress?: UseLongPressOptions;
  swipe?: UseSwipeOptions;
  pan?: UsePanOptions;
  pinch?: UsePinchOptions;
  rotation?: UseRotationOptions;
  fling?: UseFlingOptions;
  priority?: GesturePriority;
}

// ─── Factory Types ────────────────────────────────────────────────────────────

/** Configuration for createGestureComponent factory */
export interface GestureComponentConfig<P> {
  /** Display name of the component */
  name: string;
  /** Function that creates a RNGH gesture from the component props */
  createGesture: (props: P) => import('react-native-gesture-handler').GestureType;
}
