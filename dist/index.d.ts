import * as react_native_gesture_handler from 'react-native-gesture-handler';
import { GestureType, ComposedGesture } from 'react-native-gesture-handler';
import React$1 from 'react';
import * as react_native_gesture_handler_lib_typescript_handlers_gestures_tapGesture from 'react-native-gesture-handler/lib/typescript/handlers/gestures/tapGesture';
import * as react_native_gesture_handler_lib_typescript_handlers_gestures_longPressGesture from 'react-native-gesture-handler/lib/typescript/handlers/gestures/longPressGesture';
import * as react_native_gesture_handler_lib_typescript_handlers_gestures_gestureComposition from 'react-native-gesture-handler/lib/typescript/handlers/gestures/gestureComposition';
import * as react_native_gesture_handler_lib_typescript_handlers_gestures_forceTouchGesture from 'react-native-gesture-handler/lib/typescript/handlers/gestures/forceTouchGesture';

/**
 * Core gesture types and interfaces for react-native-gesture-kit.
 *
 * @module types/gestures
 */
/** All possible states of a gesture recognizer */
declare enum GestureState {
    UNDETERMINED = 0,
    BEGAN = 1,
    ACTIVE = 2,
    END = 3,
    CANCELLED = 4,
    FAILED = 5
}
/** Swipe direction */
type SwipeDirection = 'left' | 'right' | 'up' | 'down';
/** Fling direction using RNGH's direction constants */
type FlingDirection = 'left' | 'right' | 'up' | 'down';
/** Gesture composition priority strategy  */
type GesturePriority = 'simultaneous' | 'exclusive' | 'race';
/** 2D point */
interface Point {
    x: number;
    y: number;
}
/** Velocity vector */
interface Velocity {
    x: number;
    y: number;
}
/** Base event shared by all gestures */
interface BaseGestureEvent {
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
interface TapEvent extends BaseGestureEvent {
    /** Number of taps detected */
    numberOfTaps: number;
}
/** Long press event payload */
interface LongPressEvent extends BaseGestureEvent {
    /** Duration of the long press in ms */
    duration: number;
}
/** Pan event payload */
interface PanEvent extends BaseGestureEvent {
    /** Translation from the starting point */
    translationX: number;
    translationY: number;
    /** Current velocity */
    velocityX: number;
    velocityY: number;
}
/** Swipe event payload */
interface SwipeEvent extends BaseGestureEvent {
    /** Detected swipe direction */
    direction: SwipeDirection;
    /** Swipe velocity */
    velocity: number;
    /** Translation distance */
    distance: number;
}
/** Pinch event payload */
interface PinchEvent extends BaseGestureEvent {
    /** Current scale factor */
    scale: number;
    /** Velocity of the pinch */
    velocity: number;
    /** Focal point of the pinch */
    focalX: number;
    focalY: number;
}
/** Rotation event payload */
interface RotationEvent extends BaseGestureEvent {
    /** Current rotation in radians */
    rotation: number;
    /** Angular velocity */
    velocity: number;
    /** Anchor point */
    anchorX: number;
    anchorY: number;
}
/** Fling event payload */
interface FlingEvent extends BaseGestureEvent {
    /** Direction of the fling */
    direction: FlingDirection;
}
/** Common props shared by all gesture components */
interface BaseGestureProps {
    /** Whether the gesture is enabled */
    enabled?: boolean;
    /** Children to wrap */
    children: React.ReactNode;
}
/** TapGesture component props */
interface TapGestureProps extends BaseGestureProps {
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
interface DoubleTapGestureProps extends BaseGestureProps {
    /** Callback when double tap is detected */
    onDoubleTap: (event: TapEvent) => void;
    /** Maximum delay between taps in ms */
    maxDelay?: number;
    /** Maximum distance between taps */
    maxDistance?: number;
}
/** LongPressGesture component props */
interface LongPressGestureProps extends BaseGestureProps {
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
interface SwipeGestureProps extends BaseGestureProps {
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
interface PanGestureProps$1 extends BaseGestureProps {
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
interface PinchGestureProps$1 extends BaseGestureProps {
    /** Callback when pinch starts */
    onPinchStart?: (event: PinchEvent) => void;
    /** Callback during pinching */
    onPinch?: (event: PinchEvent) => void;
    /** Callback when pinch ends */
    onPinchEnd?: (event: PinchEvent) => void;
}
/** RotationGesture component props */
interface RotationGestureProps$1 extends BaseGestureProps {
    /** Callback when rotation starts */
    onRotationStart?: (event: RotationEvent) => void;
    /** Callback during rotation */
    onRotation?: (event: RotationEvent) => void;
    /** Callback when rotation ends */
    onRotationEnd?: (event: RotationEvent) => void;
}
/** FlingGesture component props */
interface FlingGestureProps extends BaseGestureProps {
    /** Callback when fling is detected */
    onFling: (event: FlingEvent) => void;
    /** Required fling direction */
    direction?: FlingDirection;
    /** Number of required touching pointers (default: 1) */
    numberOfPointers?: number;
}
/** Props for the <Gesture> composer component */
interface GestureComposerProps extends BaseGestureProps {
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
/** Options for useTap hook */
interface UseTapOptions {
    onTap: (event: TapEvent) => void;
    numberOfTaps?: number;
    maxDuration?: number;
    maxDistance?: number;
    enabled?: boolean;
}
/** Options for useDoubleTap hook */
interface UseDoubleTapOptions {
    onDoubleTap: (event: TapEvent) => void;
    maxDelay?: number;
    maxDistance?: number;
    enabled?: boolean;
}
/** Options for useLongPress hook */
interface UseLongPressOptions {
    onLongPress: (event: LongPressEvent) => void;
    onPressIn?: (event: LongPressEvent) => void;
    onPressOut?: (event: LongPressEvent) => void;
    minDuration?: number;
    maxDistance?: number;
    enabled?: boolean;
}
/** Options for useSwipe hook */
interface UseSwipeOptions {
    onSwipe: (event: SwipeEvent) => void;
    direction?: SwipeDirection;
    threshold?: number;
    velocityThreshold?: number;
    enabled?: boolean;
}
/** Options for usePan hook */
interface UsePanOptions {
    onPanStart?: (event: PanEvent) => void;
    onPanMove?: (event: PanEvent) => void;
    onPanEnd?: (event: PanEvent) => void;
    minDistance?: number;
    minPointers?: number;
    maxPointers?: number;
    enabled?: boolean;
}
/** Options for usePinch hook */
interface UsePinchOptions {
    onPinchStart?: (event: PinchEvent) => void;
    onPinch?: (event: PinchEvent) => void;
    onPinchEnd?: (event: PinchEvent) => void;
    enabled?: boolean;
}
/** Options for useRotation hook */
interface UseRotationOptions {
    onRotationStart?: (event: RotationEvent) => void;
    onRotation?: (event: RotationEvent) => void;
    onRotationEnd?: (event: RotationEvent) => void;
    enabled?: boolean;
}
/** Options for useFling hook */
interface UseFlingOptions {
    onFling: (event: FlingEvent) => void;
    direction?: FlingDirection;
    numberOfPointers?: number;
    enabled?: boolean;
}
/** Options for useGesture (composer) hook */
interface UseGestureOptions {
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
/** Configuration for createGestureComponent factory */
interface GestureComponentConfig<P> {
    /** Display name of the component */
    name: string;
    /** Function that creates a RNGH gesture from the component props */
    createGesture: (props: P) => react_native_gesture_handler.GestureType;
}

/**
 * Types for Basic Touch gestures.
 */

interface PressForceEvent extends BaseGestureEvent {
    force: number;
}
interface TapProps extends BaseGestureProps {
    onTap: (event: TapEvent) => void;
    numberOfTaps?: number;
    maxDuration?: number;
    maxDistance?: number;
}
interface DoubleTapProps extends BaseGestureProps {
    onDoubleTap: (event: TapEvent) => void;
    maxDelay?: number;
    maxDistance?: number;
}
interface TripleTapProps extends BaseGestureProps {
    onTripleTap: (event: TapEvent) => void;
    maxDelay?: number;
    maxDistance?: number;
}
interface QuadTapProps extends BaseGestureProps {
    onQuadTap: (event: TapEvent) => void;
    maxDelay?: number;
    maxDistance?: number;
}
interface LongPressProps extends BaseGestureProps {
    onLongPress: (event: LongPressEvent) => void;
    onPressIn?: (event: LongPressEvent) => void;
    onPressOut?: (event: LongPressEvent) => void;
    minDuration?: number;
    maxDistance?: number;
}
interface VeryLongPressProps extends BaseGestureProps {
    onVeryLongPress: (event: LongPressEvent) => void;
    onPressIn?: (event: LongPressEvent) => void;
    onPressOut?: (event: LongPressEvent) => void;
    minDuration?: number;
    maxDistance?: number;
}
interface TapAndHoldProps extends BaseGestureProps {
    onTapAndHold: (event: LongPressEvent) => void;
    onTap?: (event: TapEvent) => void;
    holdDuration?: number;
}
interface TapCancelProps extends BaseGestureProps {
    onTapCancel: (event: BaseGestureEvent) => void;
    onTapStart?: (event: BaseGestureEvent) => void;
    maxDuration?: number;
}
interface PressForceProps extends BaseGestureProps {
    onPressForce: (event: PressForceEvent) => void;
    forceThreshold?: number;
}
interface UseTripleTapOptions {
    onTripleTap: (event: TapEvent) => void;
    maxDelay?: number;
    maxDistance?: number;
    enabled?: boolean;
}
interface UseQuadTapOptions {
    onQuadTap: (event: TapEvent) => void;
    maxDelay?: number;
    maxDistance?: number;
    enabled?: boolean;
}
interface UseVeryLongPressOptions {
    onVeryLongPress: (event: LongPressEvent) => void;
    onPressIn?: (event: LongPressEvent) => void;
    onPressOut?: (event: LongPressEvent) => void;
    minDuration?: number;
    maxDistance?: number;
    enabled?: boolean;
}
interface UseTapAndHoldOptions {
    onTapAndHold: (event: LongPressEvent) => void;
    onTap?: (event: TapEvent) => void;
    holdDuration?: number;
    enabled?: boolean;
}
interface UseTapCancelOptions {
    onTapCancel: (event: BaseGestureEvent) => void;
    onTapStart?: (event: BaseGestureEvent) => void;
    maxDuration?: number;
    enabled?: boolean;
}
interface UsePressForceOptions {
    onPressForce: (event: PressForceEvent) => void;
    forceThreshold?: number;
    enabled?: boolean;
}

/**
 * Types for Drag/Pan gestures.
 */

type EdgePosition = 'top' | 'bottom' | 'left' | 'right';
type CornerPosition = 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
interface DragEvent extends PanEvent {
    state: 'start' | 'move' | 'end';
}
interface DragAndDropEvent extends DragEvent {
    dropTargetId?: string;
}
interface EdgeSwipeEvent extends SwipeEvent {
    edge: EdgePosition;
}
interface CornerSwipeEvent extends SwipeEvent {
    corner: CornerPosition;
}
interface CurvedSwipeEvent extends SwipeEvent {
    curvature: number;
    path: Array<{
        x: number;
        y: number;
    }>;
}
interface CircularSwipeEvent extends BaseGestureEvent {
    angle: number;
    direction: 'clockwise' | 'counterclockwise';
    revolutions: number;
}
interface PanProps extends BaseGestureProps {
    onPanStart?: (event: PanEvent) => void;
    onPanMove?: (event: PanEvent) => void;
    onPanEnd?: (event: PanEvent) => void;
    minDistance?: number;
}
interface DragProps extends BaseGestureProps {
    onDragStart?: (event: DragEvent) => void;
    onDrag?: (event: DragEvent) => void;
    onDragEnd?: (event: DragEvent) => void;
}
interface DragAndDropProps extends BaseGestureProps {
    onDragStart?: (event: DragAndDropEvent) => void;
    onDrag?: (event: DragAndDropEvent) => void;
    onDrop?: (event: DragAndDropEvent) => void;
}
interface SwipeProps extends BaseGestureProps {
    onSwipe: (event: SwipeEvent) => void;
    direction?: SwipeDirection;
    threshold?: number;
    velocityThreshold?: number;
}
interface EdgeSwipeProps extends BaseGestureProps {
    onEdgeSwipe: (event: EdgeSwipeEvent) => void;
    edge?: EdgePosition;
    edgeWidth?: number;
}
interface CornerSwipeProps extends BaseGestureProps {
    onCornerSwipe: (event: CornerSwipeEvent) => void;
    corner?: CornerPosition;
    cornerSize?: number;
}
interface DiagonalSwipeProps extends BaseGestureProps {
    onDiagonalSwipe: (event: SwipeEvent) => void;
    threshold?: number;
}
interface CurvedSwipeProps extends BaseGestureProps {
    onCurvedSwipe: (event: CurvedSwipeEvent) => void;
    minCurvature?: number;
}
interface CircularSwipeProps extends BaseGestureProps {
    onCircularSwipe: (event: CircularSwipeEvent) => void;
    minAngle?: number;
}
interface UseDragOptions {
    onDragStart?: (e: DragEvent) => void;
    onDrag?: (e: DragEvent) => void;
    onDragEnd?: (e: DragEvent) => void;
    enabled?: boolean;
}
interface UseDragAndDropOptions {
    onDragStart?: (e: DragAndDropEvent) => void;
    onDrag?: (e: DragAndDropEvent) => void;
    onDrop?: (e: DragAndDropEvent) => void;
    enabled?: boolean;
}
interface UseSwipeUpOptions {
    onSwipeUp: (e: SwipeEvent) => void;
    threshold?: number;
    enabled?: boolean;
}
interface UseSwipeDownOptions {
    onSwipeDown: (e: SwipeEvent) => void;
    threshold?: number;
    enabled?: boolean;
}
interface UseSwipeLeftOptions {
    onSwipeLeft: (e: SwipeEvent) => void;
    threshold?: number;
    enabled?: boolean;
}
interface UseSwipeRightOptions {
    onSwipeRight: (e: SwipeEvent) => void;
    threshold?: number;
    enabled?: boolean;
}
interface UseEdgeSwipeOptions {
    onEdgeSwipe: (e: EdgeSwipeEvent) => void;
    edge?: EdgePosition;
    edgeWidth?: number;
    enabled?: boolean;
}
interface UseCornerSwipeOptions {
    onCornerSwipe: (e: CornerSwipeEvent) => void;
    corner?: CornerPosition;
    cornerSize?: number;
    enabled?: boolean;
}
interface UseDiagonalSwipeOptions {
    onDiagonalSwipe: (e: SwipeEvent) => void;
    threshold?: number;
    enabled?: boolean;
}
interface UseCurvedSwipeOptions {
    onCurvedSwipe: (e: CurvedSwipeEvent) => void;
    minCurvature?: number;
    enabled?: boolean;
}
interface UseCircularSwipeOptions {
    onCircularSwipe: (e: CircularSwipeEvent) => void;
    minAngle?: number;
    enabled?: boolean;
}

/**
 * Type definitions for this gesture category.
 */

interface MultiFingerEvent extends BaseGestureEvent {
    numberOfFingers: number;
}
interface MultiFingerSwipeEvent extends MultiFingerEvent {
    direction: 'up' | 'down' | 'left' | 'right';
    velocity: number;
}
interface SpreadGatherEvent extends MultiFingerEvent {
    scale: number;
    velocity: number;
}

/**
 * Type definitions for this gesture category.
 */

interface RotateEvent extends BaseGestureEvent {
    rotation: number;
    velocity: number;
    anchorX: number;
    anchorY: number;
}
interface PinchRotateEvent extends BaseGestureEvent {
    scale: number;
    rotation: number;
    focalX: number;
    focalY: number;
}
interface StretchEvent extends BaseGestureEvent {
    scaleX: number;
    scaleY: number;
}

/**
 * Type definitions for this gesture category.
 */

interface DrawPoint {
    x: number;
    y: number;
    timestamp: number;
    pressure?: number;
}
interface DrawEvent extends BaseGestureEvent {
    path: DrawPoint[];
    strokeWidth: number;
}
interface ShapeRecognitionEvent extends DrawEvent {
    shape: string;
    confidence: number;
}

/**
 * Type definitions for this gesture category.
 */

type SequenceStep = 'tap' | 'swipe' | 'hold' | 'rotate' | 'pinch';
interface SequenceEvent extends BaseGestureEvent {
    steps: SequenceStep[];
    totalDuration: number;
}
interface SequenceConfig {
    steps: SequenceStep[];
    timingWindow?: number;
    interruptible?: boolean;
}

/**
 * Type definitions for this gesture category.
 */

interface SensorEvent extends BaseGestureEvent {
    accelerationX: number;
    accelerationY: number;
    accelerationZ: number;
}
interface TiltEvent extends SensorEvent {
    angle: number;
    direction: 'left' | 'right' | 'forward' | 'backward';
}
interface ShakeEvent extends SensorEvent {
    intensity: number;
    duration: number;
}
interface FlipEvent extends SensorEvent {
    orientation: 'faceUp' | 'faceDown';
}
interface MotionEvent extends SensorEvent {
    rotationX: number;
    rotationY: number;
    rotationZ: number;
}

/**
 * Type definitions for this gesture category.
 */

interface ProximityEvent extends BaseGestureEvent {
    distance: number;
    isNear: boolean;
}
interface HoverEvent extends BaseGestureEvent {
    duration: number;
    distance: number;
}

/**
 * Type definitions for this gesture category.
 */

interface AirGestureEvent extends BaseGestureEvent {
    handId: number;
    confidence: number;
    depth: number;
}
interface AirSwipeEvent extends AirGestureEvent {
    direction: 'up' | 'down' | 'left' | 'right';
    velocity: number;
}
interface AirPinchEvent extends AirGestureEvent {
    scale: number;
}
interface AirRotateEvent extends AirGestureEvent {
    rotation: number;
}
interface AirDrawEvent extends AirGestureEvent {
    path: Array<{
        x: number;
        y: number;
        z: number;
    }>;
}
interface MultiHandEvent extends AirGestureEvent {
    hands: number;
}

/**
 * Type definitions for this gesture category.
 */

interface BodyEvent extends BaseGestureEvent {
    confidence: number;
}
interface HeadEvent extends BodyEvent {
    direction: 'nod' | 'shake';
    angle: number;
}
interface PoseEvent extends BodyEvent {
    poseName: string;
    landmarks: Array<{
        x: number;
        y: number;
        z: number;
    }>;
}
interface ClapEvent extends BodyEvent {
    intensity: number;
}

/**
 * Type definitions for this gesture category.
 */

interface StylusEvent extends BaseGestureEvent {
    pressure: number;
    tiltX: number;
    tiltY: number;
}
interface StylusTapEvent extends StylusEvent {
    numberOfTaps: number;
}
interface StylusDrawEvent extends StylusEvent {
    path: Array<{
        x: number;
        y: number;
        pressure: number;
    }>;
    strokeWidth: number;
}
interface StylusHoverEvent extends BaseGestureEvent {
    altitude: number;
    azimuth: number;
}

/**
 * Type definitions for this gesture category.
 */

interface HybridEvent extends BaseGestureEvent {
    sources: string[];
    confidence: number;
}
interface TouchSensorEvent extends HybridEvent {
    sensorData: {
        x: number;
        y: number;
        z: number;
    };
}
interface TouchCameraEvent extends HybridEvent {
    cameraData: {
        handDetected: boolean;
        gestureClass: string;
    };
}
interface TouchVoiceEvent extends HybridEvent {
    voiceCommand: string;
    voiceConfidence: number;
}
interface MultiDeviceEvent extends HybridEvent {
    deviceId: string;
    syncTimestamp: number;
}

/**
 * Type definitions for this gesture category.
 */

interface AIGestureEvent extends BaseGestureEvent {
    confidence: number;
    modelVersion: string;
}
interface PredictionEvent extends AIGestureEvent {
    predictedGesture: string;
    alternatives: Array<{
        gesture: string;
        probability: number;
    }>;
}
interface AdaptiveEvent extends AIGestureEvent {
    userProfile: string;
    adaptationLevel: number;
}
interface ContextEvent extends AIGestureEvent {
    context: string;
    contextualFactors: Record<string, unknown>;
}
interface EmotionEvent extends AIGestureEvent {
    emotion: string;
    intensity: number;
}
interface IntentEvent extends AIGestureEvent {
    intent: string;
    entities: Record<string, string>;
}

/**
 * TapGesture — Detects single tap gestures.
 */

declare const TapGesture: React$1.FC<TapProps>;

/**
 * DoubleTapGesture — Detects double tap gestures.
 */

declare const DoubleTapGesture: React$1.FC<DoubleTapProps>;

/**
 * TripleTapGesture — Detects triple tap gestures.
 */

declare const TripleTapGesture: React$1.FC<TripleTapProps>;

/**
 * QuadTapGesture — Detects quad (four) tap gestures.
 */

declare const QuadTapGesture: React$1.FC<QuadTapProps>;

/**
 * LongPressGesture — Detects long press gestures.
 */

declare const LongPressGesture: React$1.FC<LongPressProps>;

/**
 * VeryLongPressGesture — Detects very long press gestures (default 1500ms).
 */

declare const VeryLongPressGesture: React$1.FC<VeryLongPressProps>;

/**
 * TapAndHoldGesture — Detects a tap followed by a hold.
 */

declare const TapAndHoldGesture: React$1.FC<TapAndHoldProps>;

/**
 * TapCancelGesture — Detects when a tap is cancelled (finger moves away).
 */

declare const TapCancelGesture: React$1.FC<TapCancelProps>;

/**
 * PressForceGesture — Detects force/pressure touch gestures (3D Touch / Force Touch).
 */

declare const PressForceGesture: React$1.FC<PressForceProps>;

declare function useTap(options: UseTapOptions): react_native_gesture_handler_lib_typescript_handlers_gestures_tapGesture.TapGesture;

declare function useDoubleTap(options: UseDoubleTapOptions): react_native_gesture_handler_lib_typescript_handlers_gestures_tapGesture.TapGesture;

declare function useTripleTap(options: UseTripleTapOptions): react_native_gesture_handler_lib_typescript_handlers_gestures_tapGesture.TapGesture;

declare function useQuadTap(options: UseQuadTapOptions): react_native_gesture_handler_lib_typescript_handlers_gestures_tapGesture.TapGesture;

declare function useLongPress(options: UseLongPressOptions): react_native_gesture_handler_lib_typescript_handlers_gestures_longPressGesture.LongPressGesture;

declare function useVeryLongPress(options: UseVeryLongPressOptions): react_native_gesture_handler_lib_typescript_handlers_gestures_longPressGesture.LongPressGesture;

declare function useTapAndHold(options: UseTapAndHoldOptions): react_native_gesture_handler_lib_typescript_handlers_gestures_longPressGesture.LongPressGesture | react_native_gesture_handler_lib_typescript_handlers_gestures_gestureComposition.ExclusiveGesture;

declare function useTapCancel(options: UseTapCancelOptions): react_native_gesture_handler_lib_typescript_handlers_gestures_tapGesture.TapGesture;

declare function usePressForce(options: UsePressForceOptions): react_native_gesture_handler_lib_typescript_handlers_gestures_forceTouchGesture.ForceTouchGesture;

/**
 * Pan Gesture - Detects pan/drag movement
 * @module gestures
 */

interface PanGestureProps {
    children: React$1.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const PanGesture: React$1.FC<PanGestureProps>;

/**
 * Drag Gesture - Detects drag gestures
 * @module gestures
 */

interface DragGestureProps {
    children: React$1.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const DragGesture: React$1.FC<DragGestureProps>;

/**
 * Drag and Drop Gesture - Detects drag and drop
 * @module gestures
 */

interface DragAndDropGestureProps {
    children: React$1.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const DragAndDropGesture: React$1.FC<DragAndDropGestureProps>;

/**
 * Swipe Up Gesture - Detects upward swipes
 * @module gestures
 */

interface SwipeUpGestureProps {
    children: React$1.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const SwipeUpGesture: React$1.FC<SwipeUpGestureProps>;

/**
 * Swipe Down Gesture - Detects downward swipes
 * @module gestures
 */

interface SwipeDownGestureProps {
    children: React$1.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const SwipeDownGesture: React$1.FC<SwipeDownGestureProps>;

/**
 * Swipe Left Gesture - Detects leftward swipes
 * @module gestures
 */

interface SwipeLeftGestureProps {
    children: React$1.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const SwipeLeftGesture: React$1.FC<SwipeLeftGestureProps>;

/**
 * Swipe Right Gesture - Detects rightward swipes
 * @module gestures
 */

interface SwipeRightGestureProps {
    children: React$1.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const SwipeRightGesture: React$1.FC<SwipeRightGestureProps>;

/**
 * Edge Swipe Gesture - Detects swipes from screen edges
 * @module gestures
 */

interface EdgeSwipeGestureProps {
    children: React$1.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const EdgeSwipeGesture: React$1.FC<EdgeSwipeGestureProps>;

/**
 * Corner Swipe Gesture - Detects swipes from screen corners
 * @module gestures
 */

interface CornerSwipeGestureProps {
    children: React$1.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const CornerSwipeGesture: React$1.FC<CornerSwipeGestureProps>;

/**
 * Diagonal Swipe Gesture - Detects diagonal swipes
 * @module gestures
 */

interface DiagonalSwipeGestureProps {
    children: React$1.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const DiagonalSwipeGesture: React$1.FC<DiagonalSwipeGestureProps>;

/**
 * Curved Swipe Gesture - Detects curved swipe paths
 * @module gestures
 */

interface CurvedSwipeGestureProps {
    children: React$1.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const CurvedSwipeGesture: React$1.FC<CurvedSwipeGestureProps>;

/**
 * Circular Swipe Gesture - Detects circular swipe gestures
 * @module gestures
 */

interface CircularSwipeGestureProps {
    children: React$1.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const CircularSwipeGesture: React$1.FC<CircularSwipeGestureProps>;

/**
 * usePan - usePan hook
 */
interface usePanOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function usePan(options?: usePanOptions): {
    enabled: boolean;
};

/**
 * useDrag - useDrag hook
 */
interface useDragOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function useDrag(options?: useDragOptions): {
    enabled: boolean;
};

/**
 * useDragAndDrop - useDragAndDrop hook
 */
interface useDragAndDropOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function useDragAndDrop(options?: useDragAndDropOptions): {
    enabled: boolean;
};

/**
 * useSwipeUp - useSwipeUp hook
 */
interface useSwipeUpOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function useSwipeUp(options?: useSwipeUpOptions): {
    enabled: boolean;
};

/**
 * useSwipeDown - useSwipeDown hook
 */
interface useSwipeDownOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function useSwipeDown(options?: useSwipeDownOptions): {
    enabled: boolean;
};

/**
 * useSwipeLeft - useSwipeLeft hook
 */
interface useSwipeLeftOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function useSwipeLeft(options?: useSwipeLeftOptions): {
    enabled: boolean;
};

/**
 * useSwipeRight - useSwipeRight hook
 */
interface useSwipeRightOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function useSwipeRight(options?: useSwipeRightOptions): {
    enabled: boolean;
};

/**
 * useEdgeSwipe - useEdgeSwipe hook
 */
interface useEdgeSwipeOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function useEdgeSwipe(options?: useEdgeSwipeOptions): {
    enabled: boolean;
};

/**
 * useCornerSwipe - useCornerSwipe hook
 */
interface useCornerSwipeOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function useCornerSwipe(options?: useCornerSwipeOptions): {
    enabled: boolean;
};

/**
 * useDiagonalSwipe - useDiagonalSwipe hook
 */
interface useDiagonalSwipeOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function useDiagonalSwipe(options?: useDiagonalSwipeOptions): {
    enabled: boolean;
};

/**
 * useCurvedSwipe - useCurvedSwipe hook
 */
interface useCurvedSwipeOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function useCurvedSwipe(options?: useCurvedSwipeOptions): {
    enabled: boolean;
};

/**
 * useCircularSwipe - useCircularSwipe hook
 */
interface useCircularSwipeOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function useCircularSwipe(options?: useCircularSwipeOptions): {
    enabled: boolean;
};

/**
 * Two Finger Tap - Detects two finger tap
 * @module gestures
 */

interface TwoFingerTapGestureProps {
    children: React$1.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const TwoFingerTapGesture: React$1.FC<TwoFingerTapGestureProps>;

/**
 * Three Finger Tap - Detects three finger tap
 * @module gestures
 */

interface ThreeFingerTapGestureProps {
    children: React$1.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const ThreeFingerTapGesture: React$1.FC<ThreeFingerTapGestureProps>;

/**
 * Four Finger Tap - Detects four finger tap
 * @module gestures
 */

interface FourFingerTapGestureProps {
    children: React$1.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const FourFingerTapGesture: React$1.FC<FourFingerTapGestureProps>;

/**
 * Two Finger Swipe - Detects two finger swipe
 * @module gestures
 */

interface TwoFingerSwipeGestureProps {
    children: React$1.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const TwoFingerSwipeGesture: React$1.FC<TwoFingerSwipeGestureProps>;

/**
 * Three Finger Swipe - Detects three finger swipe
 * @module gestures
 */

interface ThreeFingerSwipeGestureProps {
    children: React$1.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const ThreeFingerSwipeGesture: React$1.FC<ThreeFingerSwipeGestureProps>;

/**
 * Multi Finger Drag - Detects multi finger drag
 * @module gestures
 */

interface MultiFingerDragGestureProps {
    children: React$1.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const MultiFingerDragGesture: React$1.FC<MultiFingerDragGestureProps>;

/**
 * Finger Spread - Detects finger spread (pinch out)
 * @module gestures
 */

interface FingerSpreadGestureProps {
    children: React$1.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const FingerSpreadGesture: React$1.FC<FingerSpreadGestureProps>;

/**
 * Finger Gather - Detects finger gather (pinch in)
 * @module gestures
 */

interface FingerGatherGestureProps {
    children: React$1.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const FingerGatherGesture: React$1.FC<FingerGatherGestureProps>;

/**
 * useTwoFingerTap - useTwoFingerTap hook
 */
interface useTwoFingerTapOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function useTwoFingerTap(options?: useTwoFingerTapOptions): {
    enabled: boolean;
};

/**
 * useThreeFingerTap - useThreeFingerTap hook
 */
interface useThreeFingerTapOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function useThreeFingerTap(options?: useThreeFingerTapOptions): {
    enabled: boolean;
};

/**
 * useFourFingerTap - useFourFingerTap hook
 */
interface useFourFingerTapOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function useFourFingerTap(options?: useFourFingerTapOptions): {
    enabled: boolean;
};

/**
 * useTwoFingerSwipe - useTwoFingerSwipe hook
 */
interface useTwoFingerSwipeOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function useTwoFingerSwipe(options?: useTwoFingerSwipeOptions): {
    enabled: boolean;
};

/**
 * useThreeFingerSwipe - useThreeFingerSwipe hook
 */
interface useThreeFingerSwipeOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function useThreeFingerSwipe(options?: useThreeFingerSwipeOptions): {
    enabled: boolean;
};

/**
 * useMultiFingerDrag - useMultiFingerDrag hook
 */
interface useMultiFingerDragOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function useMultiFingerDrag(options?: useMultiFingerDragOptions): {
    enabled: boolean;
};

/**
 * useFingerSpread - useFingerSpread hook
 */
interface useFingerSpreadOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function useFingerSpread(options?: useFingerSpreadOptions): {
    enabled: boolean;
};

/**
 * useFingerGather - useFingerGather hook
 */
interface useFingerGatherOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function useFingerGather(options?: useFingerGatherOptions): {
    enabled: boolean;
};

/**
 * Pinch Gesture - Detects pinch in/out
 * @module gestures
 */

interface PinchGestureProps {
    children: React$1.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const PinchGesture: React$1.FC<PinchGestureProps>;

/**
 * Rotation Gesture - Detects rotation
 * @module gestures
 */

interface RotationGestureProps {
    children: React$1.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const RotationGesture: React$1.FC<RotationGestureProps>;

/**
 * Pinch Rotate Gesture - Detects simultaneous pinch and rotate
 * @module gestures
 */

interface PinchRotateGestureProps {
    children: React$1.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const PinchRotateGesture: React$1.FC<PinchRotateGestureProps>;

/**
 * Stretch Gesture - Detects stretch transforms
 * @module gestures
 */

interface StretchGestureProps {
    children: React$1.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const StretchGesture: React$1.FC<StretchGestureProps>;

/**
 * Compress Gesture - Detects compress transforms
 * @module gestures
 */

interface CompressGestureProps {
    children: React$1.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const CompressGesture: React$1.FC<CompressGestureProps>;

/**
 * usePinch - usePinch hook
 */
interface usePinchOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function usePinch(options?: usePinchOptions): {
    enabled: boolean;
};

/**
 * useRotation - useRotation hook
 */
interface useRotationOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function useRotation(options?: useRotationOptions): {
    enabled: boolean;
};

/**
 * usePinchRotate - usePinchRotate hook
 */
interface usePinchRotateOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function usePinchRotate(options?: usePinchRotateOptions): {
    enabled: boolean;
};

/**
 * useStretch - useStretch hook
 */
interface useStretchOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function useStretch(options?: useStretchOptions): {
    enabled: boolean;
};

/**
 * useCompress - useCompress hook
 */
interface useCompressOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function useCompress(options?: useCompressOptions): {
    enabled: boolean;
};

/**
 * Draw Line - Detects line drawing
 * @module gestures
 */

interface DrawLineGestureProps {
    children: React$1.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const DrawLineGesture: React$1.FC<DrawLineGestureProps>;

/**
 * Draw Circle - Detects circle drawing
 * @module gestures
 */

interface DrawCircleGestureProps {
    children: React$1.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const DrawCircleGesture: React$1.FC<DrawCircleGestureProps>;

/**
 * Draw Square - Detects square drawing
 * @module gestures
 */

interface DrawSquareGestureProps {
    children: React$1.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const DrawSquareGesture: React$1.FC<DrawSquareGestureProps>;

/**
 * Draw Triangle - Detects triangle drawing
 * @module gestures
 */

interface DrawTriangleGestureProps {
    children: React$1.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const DrawTriangleGesture: React$1.FC<DrawTriangleGestureProps>;

/**
 * Draw Star - Detects star drawing
 * @module gestures
 */

interface DrawStarGestureProps {
    children: React$1.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const DrawStarGesture: React$1.FC<DrawStarGestureProps>;

/**
 * Draw Letter - Detects letter/symbol drawing
 * @module gestures
 */

interface DrawLetterGestureProps {
    children: React$1.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const DrawLetterGesture: React$1.FC<DrawLetterGestureProps>;

/**
 * Custom Shape - Detects custom shape recognition
 * @module gestures
 */

interface CustomShapeGestureProps {
    children: React$1.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const CustomShapeGesture: React$1.FC<CustomShapeGestureProps>;

/**
 * useDrawLine - useDrawLine hook
 */
interface useDrawLineOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function useDrawLine(options?: useDrawLineOptions): {
    enabled: boolean;
};

/**
 * useDrawCircle - useDrawCircle hook
 */
interface useDrawCircleOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function useDrawCircle(options?: useDrawCircleOptions): {
    enabled: boolean;
};

/**
 * useDrawSquare - useDrawSquare hook
 */
interface useDrawSquareOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function useDrawSquare(options?: useDrawSquareOptions): {
    enabled: boolean;
};

/**
 * useDrawTriangle - useDrawTriangle hook
 */
interface useDrawTriangleOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function useDrawTriangle(options?: useDrawTriangleOptions): {
    enabled: boolean;
};

/**
 * useDrawStar - useDrawStar hook
 */
interface useDrawStarOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function useDrawStar(options?: useDrawStarOptions): {
    enabled: boolean;
};

/**
 * useDrawLetter - useDrawLetter hook
 */
interface useDrawLetterOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function useDrawLetter(options?: useDrawLetterOptions): {
    enabled: boolean;
};

/**
 * useCustomShape - useCustomShape hook
 */
interface useCustomShapeOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function useCustomShape(options?: useCustomShapeOptions): {
    enabled: boolean;
};

/**
 * Tap Swipe Sequence - Detects tap then swipe
 * @module gestures
 */

interface TapSwipeSequenceProps {
    children: React$1.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const TapSwipeSequence: React$1.FC<TapSwipeSequenceProps>;

/**
 * Swipe Tap Sequence - Detects swipe then tap
 * @module gestures
 */

interface SwipeTapSequenceProps {
    children: React$1.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const SwipeTapSequence: React$1.FC<SwipeTapSequenceProps>;

/**
 * Tap Hold Sequence - Detects tap then hold
 * @module gestures
 */

interface TapHoldSequenceProps {
    children: React$1.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const TapHoldSequence: React$1.FC<TapHoldSequenceProps>;

/**
 * Swipe Rotate Sequence - Detects swipe then rotate
 * @module gestures
 */

interface SwipeRotateSequenceProps {
    children: React$1.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const SwipeRotateSequence: React$1.FC<SwipeRotateSequenceProps>;

/**
 * Tap Tap Swipe Sequence - Detects tap tap then swipe
 * @module gestures
 */

interface TapTapSwipeSequenceProps {
    children: React$1.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const TapTapSwipeSequence: React$1.FC<TapTapSwipeSequenceProps>;

/**
 * Multi Step Gesture - Detects configurable multi-step gestures
 * @module gestures
 */

interface MultiStepGestureProps {
    children: React$1.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const MultiStepGesture: React$1.FC<MultiStepGestureProps>;

/**
 * useTapSwipe - useTapSwipe hook
 */
interface useTapSwipeOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function useTapSwipe(options?: useTapSwipeOptions): {
    enabled: boolean;
};

/**
 * useSwipeTap - useSwipeTap hook
 */
interface useSwipeTapOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function useSwipeTap(options?: useSwipeTapOptions): {
    enabled: boolean;
};

/**
 * useTapHold - useTapHold hook
 */
interface useTapHoldOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function useTapHold(options?: useTapHoldOptions): {
    enabled: boolean;
};

/**
 * useSwipeRotate - useSwipeRotate hook
 */
interface useSwipeRotateOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function useSwipeRotate(options?: useSwipeRotateOptions): {
    enabled: boolean;
};

/**
 * useTapTapSwipe - useTapTapSwipe hook
 */
interface useTapTapSwipeOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function useTapTapSwipe(options?: useTapTapSwipeOptions): {
    enabled: boolean;
};

/**
 * useMultiStep - useMultiStep hook
 */
interface useMultiStepOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function useMultiStep(options?: useMultiStepOptions): {
    enabled: boolean;
};

/**
 * Shake Gesture - Detects shake motion
 * @module gestures
 */

interface ShakeGestureProps {
    children: React$1.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const ShakeGesture: React$1.FC<ShakeGestureProps>;

/**
 * Tilt Left Gesture - Detects left tilt
 * @module gestures
 */

interface TiltLeftGestureProps {
    children: React$1.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const TiltLeftGesture: React$1.FC<TiltLeftGestureProps>;

/**
 * Tilt Right Gesture - Detects right tilt
 * @module gestures
 */

interface TiltRightGestureProps {
    children: React$1.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const TiltRightGesture: React$1.FC<TiltRightGestureProps>;

/**
 * Tilt Forward Gesture - Detects forward tilt
 * @module gestures
 */

interface TiltForwardGestureProps {
    children: React$1.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const TiltForwardGesture: React$1.FC<TiltForwardGestureProps>;

/**
 * Tilt Backward Gesture - Detects backward tilt
 * @module gestures
 */

interface TiltBackwardGestureProps {
    children: React$1.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const TiltBackwardGesture: React$1.FC<TiltBackwardGestureProps>;

/**
 * Flip Gesture - Detects device flip
 * @module gestures
 */

interface FlipGestureProps {
    children: React$1.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const FlipGesture: React$1.FC<FlipGestureProps>;

/**
 * Face Up/Down Gesture - Detects face up/down orientation
 * @module gestures
 */

interface FaceUpDownGestureProps {
    children: React$1.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const FaceUpDownGesture: React$1.FC<FaceUpDownGestureProps>;

/**
 * Free Fall Gesture - Detects free fall
 * @module gestures
 */

interface FreeFallGestureProps {
    children: React$1.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const FreeFallGesture: React$1.FC<FreeFallGestureProps>;

/**
 * Swing Gesture - Detects swing/twirl motion
 * @module gestures
 */

interface SwingGestureProps {
    children: React$1.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const SwingGesture: React$1.FC<SwingGestureProps>;

/**
 * Circular Motion Gesture - Detects circular motion
 * @module gestures
 */

interface CircularMotionGestureProps {
    children: React$1.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const CircularMotionGesture: React$1.FC<CircularMotionGestureProps>;

/**
 * Multi Axis Tilt Gesture - Detects multi-axis tilt
 * @module gestures
 */

interface MultiAxisTiltGestureProps {
    children: React$1.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const MultiAxisTiltGesture: React$1.FC<MultiAxisTiltGestureProps>;

/**
 * useShake - useShake hook
 */
interface useShakeOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function useShake(options?: useShakeOptions): {
    enabled: boolean;
};

/**
 * useTiltLeft - useTiltLeft hook
 */
interface useTiltLeftOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function useTiltLeft(options?: useTiltLeftOptions): {
    enabled: boolean;
};

/**
 * useTiltRight - useTiltRight hook
 */
interface useTiltRightOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function useTiltRight(options?: useTiltRightOptions): {
    enabled: boolean;
};

/**
 * useTiltForward - useTiltForward hook
 */
interface useTiltForwardOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function useTiltForward(options?: useTiltForwardOptions): {
    enabled: boolean;
};

/**
 * useTiltBackward - useTiltBackward hook
 */
interface useTiltBackwardOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function useTiltBackward(options?: useTiltBackwardOptions): {
    enabled: boolean;
};

/**
 * useFlip - useFlip hook
 */
interface useFlipOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function useFlip(options?: useFlipOptions): {
    enabled: boolean;
};

/**
 * useFaceUpDown - useFaceUpDown hook
 */
interface useFaceUpDownOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function useFaceUpDown(options?: useFaceUpDownOptions): {
    enabled: boolean;
};

/**
 * useFreeFall - useFreeFall hook
 */
interface useFreeFallOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function useFreeFall(options?: useFreeFallOptions): {
    enabled: boolean;
};

/**
 * useSwing - useSwing hook
 */
interface useSwingOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function useSwing(options?: useSwingOptions): {
    enabled: boolean;
};

/**
 * useCircularMotion - useCircularMotion hook
 */
interface useCircularMotionOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function useCircularMotion(options?: useCircularMotionOptions): {
    enabled: boolean;
};

/**
 * useMultiAxisTilt - useMultiAxisTilt hook
 */
interface useMultiAxisTiltOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function useMultiAxisTilt(options?: useMultiAxisTiltOptions): {
    enabled: boolean;
};

/**
 * Hand Near Gesture - Detects hand approaching
 * @module gestures
 */

interface HandNearGestureProps {
    children: React$1.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const HandNearGesture: React$1.FC<HandNearGestureProps>;

/**
 * Hand Away Gesture - Detects hand moving away
 * @module gestures
 */

interface HandAwayGestureProps {
    children: React$1.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const HandAwayGesture: React$1.FC<HandAwayGestureProps>;

/**
 * Proximity Tap Gesture - Detects proximity-based tap
 * @module gestures
 */

interface ProximityTapGestureProps {
    children: React$1.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const ProximityTapGesture: React$1.FC<ProximityTapGestureProps>;

/**
 * Hover Gesture - Detects hovering
 * @module gestures
 */

interface HoverGestureProps {
    children: React$1.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const HoverGesture: React$1.FC<HoverGestureProps>;

/**
 * useHandNear - useHandNear hook
 */
interface useHandNearOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function useHandNear(options?: useHandNearOptions): {
    enabled: boolean;
};

/**
 * useHandAway - useHandAway hook
 */
interface useHandAwayOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function useHandAway(options?: useHandAwayOptions): {
    enabled: boolean;
};

/**
 * useProximityTap - useProximityTap hook
 */
interface useProximityTapOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function useProximityTap(options?: useProximityTapOptions): {
    enabled: boolean;
};

/**
 * useHover - useHover hook
 */
interface useHoverOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function useHover(options?: useHoverOptions): {
    enabled: boolean;
};

/**
 * Hand Wave Gesture - Detects hand wave
 * @module gestures
 */

interface HandWaveGestureProps {
    children: React$1.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const HandWaveGesture: React$1.FC<HandWaveGestureProps>;

/**
 * Air Swipe Gesture - Detects air swipe
 * @module gestures
 */

interface AirSwipeGestureProps {
    children: React$1.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const AirSwipeGesture: React$1.FC<AirSwipeGestureProps>;

/**
 * Air Tap Gesture - Detects air tap
 * @module gestures
 */

interface AirTapGestureProps {
    children: React$1.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const AirTapGesture: React$1.FC<AirTapGestureProps>;

/**
 * Air Pinch Gesture - Detects air pinch
 * @module gestures
 */

interface AirPinchGestureProps {
    children: React$1.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const AirPinchGesture: React$1.FC<AirPinchGestureProps>;

/**
 * Air Rotate Gesture - Detects air rotation
 * @module gestures
 */

interface AirRotateGestureProps {
    children: React$1.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const AirRotateGesture: React$1.FC<AirRotateGestureProps>;

/**
 * Air Draw Gesture - Detects air drawing
 * @module gestures
 */

interface AirDrawGestureProps {
    children: React$1.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const AirDrawGesture: React$1.FC<AirDrawGestureProps>;

/**
 * Multi Hand Gesture - Detects multi-hand gestures
 * @module gestures
 */

interface MultiHandGestureProps {
    children: React$1.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const MultiHandGesture: React$1.FC<MultiHandGestureProps>;

/**
 * useHandWave - useHandWave hook
 */
interface useHandWaveOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function useHandWave(options?: useHandWaveOptions): {
    enabled: boolean;
};

/**
 * useAirSwipe - useAirSwipe hook
 */
interface useAirSwipeOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function useAirSwipe(options?: useAirSwipeOptions): {
    enabled: boolean;
};

/**
 * useAirTap - useAirTap hook
 */
interface useAirTapOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function useAirTap(options?: useAirTapOptions): {
    enabled: boolean;
};

/**
 * useAirPinch - useAirPinch hook
 */
interface useAirPinchOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function useAirPinch(options?: useAirPinchOptions): {
    enabled: boolean;
};

/**
 * useAirRotate - useAirRotate hook
 */
interface useAirRotateOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function useAirRotate(options?: useAirRotateOptions): {
    enabled: boolean;
};

/**
 * useAirDraw - useAirDraw hook
 */
interface useAirDrawOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function useAirDraw(options?: useAirDrawOptions): {
    enabled: boolean;
};

/**
 * useMultiHand - useMultiHand hook
 */
interface useMultiHandOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function useMultiHand(options?: useMultiHandOptions): {
    enabled: boolean;
};

/**
 * Head Nod Gesture - Detects head nod
 * @module gestures
 */

interface HeadNodGestureProps {
    children: React$1.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const HeadNodGesture: React$1.FC<HeadNodGestureProps>;

/**
 * Head Shake Gesture - Detects head shake
 * @module gestures
 */

interface HeadShakeGestureProps {
    children: React$1.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const HeadShakeGesture: React$1.FC<HeadShakeGestureProps>;

/**
 * Raise Hand Gesture - Detects raised hand
 * @module gestures
 */

interface RaiseHandGestureProps {
    children: React$1.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const RaiseHandGesture: React$1.FC<RaiseHandGestureProps>;

/**
 * Clap Gesture - Detects clapping
 * @module gestures
 */

interface ClapGestureProps {
    children: React$1.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const ClapGesture: React$1.FC<ClapGestureProps>;

/**
 * Step Gesture - Detects step gestures
 * @module gestures
 */

interface StepGestureProps {
    children: React$1.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const StepGesture: React$1.FC<StepGestureProps>;

/**
 * Body Pose Gesture - Detects full body poses
 * @module gestures
 */

interface BodyPoseGestureProps {
    children: React$1.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const BodyPoseGesture: React$1.FC<BodyPoseGestureProps>;

/**
 * useHeadNod - useHeadNod hook
 */
interface useHeadNodOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function useHeadNod(options?: useHeadNodOptions): {
    enabled: boolean;
};

/**
 * useHeadShake - useHeadShake hook
 */
interface useHeadShakeOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function useHeadShake(options?: useHeadShakeOptions): {
    enabled: boolean;
};

/**
 * useRaiseHand - useRaiseHand hook
 */
interface useRaiseHandOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function useRaiseHand(options?: useRaiseHandOptions): {
    enabled: boolean;
};

/**
 * useClap - useClap hook
 */
interface useClapOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function useClap(options?: useClapOptions): {
    enabled: boolean;
};

/**
 * useStep - useStep hook
 */
interface useStepOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function useStep(options?: useStepOptions): {
    enabled: boolean;
};

/**
 * useBodyPose - useBodyPose hook
 */
interface useBodyPoseOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function useBodyPose(options?: useBodyPoseOptions): {
    enabled: boolean;
};

/**
 * Stylus Tap Gesture - Detects stylus tap
 * @module gestures
 */

interface StylusTapGestureProps {
    children: React$1.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const StylusTapGesture: React$1.FC<StylusTapGestureProps>;

/**
 * Stylus Pressure Gesture - Detects stylus pressure
 * @module gestures
 */

interface StylusPressureGestureProps {
    children: React$1.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const StylusPressureGesture: React$1.FC<StylusPressureGestureProps>;

/**
 * Stylus Tilt Gesture - Detects stylus tilt angle
 * @module gestures
 */

interface StylusTiltGestureProps {
    children: React$1.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const StylusTiltGesture: React$1.FC<StylusTiltGestureProps>;

/**
 * Stylus Hover Gesture - Detects stylus hovering
 * @module gestures
 */

interface StylusHoverGestureProps {
    children: React$1.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const StylusHoverGesture: React$1.FC<StylusHoverGestureProps>;

/**
 * Stylus Draw Gesture - Detects stylus drawing
 * @module gestures
 */

interface StylusDrawGestureProps {
    children: React$1.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const StylusDrawGesture: React$1.FC<StylusDrawGestureProps>;

/**
 * useStylusTap - useStylusTap hook
 */
interface useStylusTapOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function useStylusTap(options?: useStylusTapOptions): {
    enabled: boolean;
};

/**
 * useStylusPressure - useStylusPressure hook
 */
interface useStylusPressureOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function useStylusPressure(options?: useStylusPressureOptions): {
    enabled: boolean;
};

/**
 * useStylusTilt - useStylusTilt hook
 */
interface useStylusTiltOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function useStylusTilt(options?: useStylusTiltOptions): {
    enabled: boolean;
};

/**
 * useStylusHover - useStylusHover hook
 */
interface useStylusHoverOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function useStylusHover(options?: useStylusHoverOptions): {
    enabled: boolean;
};

/**
 * useStylusDraw - useStylusDraw hook
 */
interface useStylusDrawOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function useStylusDraw(options?: useStylusDrawOptions): {
    enabled: boolean;
};

/**
 * Touch Sensor Gesture - Combines touch with sensor data
 * @module gestures
 */

interface TouchSensorGestureProps {
    children: React$1.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const TouchSensorGesture: React$1.FC<TouchSensorGestureProps>;

/**
 * Touch Camera Gesture - Combines touch with camera input
 * @module gestures
 */

interface TouchCameraGestureProps {
    children: React$1.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const TouchCameraGesture: React$1.FC<TouchCameraGestureProps>;

/**
 * Sensor Camera Gesture - Combines sensor with camera
 * @module gestures
 */

interface SensorCameraGestureProps {
    children: React$1.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const SensorCameraGesture: React$1.FC<SensorCameraGestureProps>;

/**
 * Touch Voice Gesture - Combines touch with voice input
 * @module gestures
 */

interface TouchVoiceGestureProps {
    children: React$1.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const TouchVoiceGesture: React$1.FC<TouchVoiceGestureProps>;

/**
 * Multi Device Gesture - Cross-device gesture coordination
 * @module gestures
 */

interface MultiDeviceGestureProps {
    children: React$1.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const MultiDeviceGesture: React$1.FC<MultiDeviceGestureProps>;

/**
 * useTouchSensor - useTouchSensor hook
 */
interface useTouchSensorOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function useTouchSensor(options?: useTouchSensorOptions): {
    enabled: boolean;
};

/**
 * useTouchCamera - useTouchCamera hook
 */
interface useTouchCameraOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function useTouchCamera(options?: useTouchCameraOptions): {
    enabled: boolean;
};

/**
 * useSensorCamera - useSensorCamera hook
 */
interface useSensorCameraOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function useSensorCamera(options?: useSensorCameraOptions): {
    enabled: boolean;
};

/**
 * useTouchVoice - useTouchVoice hook
 */
interface useTouchVoiceOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function useTouchVoice(options?: useTouchVoiceOptions): {
    enabled: boolean;
};

/**
 * useMultiDevice - useMultiDevice hook
 */
interface useMultiDeviceOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function useMultiDevice(options?: useMultiDeviceOptions): {
    enabled: boolean;
};

/**
 * Gesture Prediction - AI-based gesture prediction
 * @module gestures
 */

interface GesturePredictionProps {
    children: React$1.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const GesturePrediction: React$1.FC<GesturePredictionProps>;

/**
 * Adaptive Gesture - Gestures that adapt to user behavior
 * @module gestures
 */

interface AdaptiveGestureProps {
    children: React$1.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const AdaptiveGesture: React$1.FC<AdaptiveGestureProps>;

/**
 * Context Aware Gesture - Context-aware gesture recognition
 * @module gestures
 */

interface ContextAwareGestureProps {
    children: React$1.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const ContextAwareGesture: React$1.FC<ContextAwareGestureProps>;

/**
 * Emotion Based Gesture - Emotion-driven gesture responses
 * @module gestures
 */

interface EmotionBasedGestureProps {
    children: React$1.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const EmotionBasedGesture: React$1.FC<EmotionBasedGestureProps>;

/**
 * Intent Based Gesture - Intent-based gesture recognition
 * @module gestures
 */

interface IntentBasedGestureProps {
    children: React$1.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const IntentBasedGesture: React$1.FC<IntentBasedGestureProps>;

/**
 * useGesturePrediction - useGesturePrediction hook
 */
interface useGesturePredictionOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function useGesturePrediction(options?: useGesturePredictionOptions): {
    enabled: boolean;
};

/**
 * useAdaptiveGesture - useAdaptiveGesture hook
 */
interface useAdaptiveGestureOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function useAdaptiveGesture(options?: useAdaptiveGestureOptions): {
    enabled: boolean;
};

/**
 * useContextAware - useContextAware hook
 */
interface useContextAwareOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function useContextAware(options?: useContextAwareOptions): {
    enabled: boolean;
};

/**
 * useEmotionBased - useEmotionBased hook
 */
interface useEmotionBasedOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function useEmotionBased(options?: useEmotionBasedOptions): {
    enabled: boolean;
};

/**
 * useIntentBased - useIntentBased hook
 */
interface useIntentBasedOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function useIntentBased(options?: useIntentBasedOptions): {
    enabled: boolean;
};

/**
 * Gesture Composer component.
 *
 * Allows combining multiple gestures on a single view using a
 * declarative props-driven API.
 *
 * @module core/GestureComposer
 *
 * @example
 * ```tsx
 * <Gesture
 *   tap
 *   swipe="left"
 *   pinch
 *   onTap={handleTap}
 *   onSwipe={handleSwipe}
 *   onPinch={handlePinch}
 *   priority="simultaneous"
 * >
 *   <View />
 * </Gesture>
 * ```
 */

/**
 * `<Gesture>` — A declarative gesture composer component.
 *
 * Enable gestures via boolean or value props, attach callbacks,
 * and control conflict resolution with `priority`.
 */
declare const GestureComposer: React$1.FC<GestureComposerProps>;

/**
 * Factory function to create gesture components.
 *
 * This is the foundation of the library's extensibility — any gesture
 * recognizer can be wrapped into a declarative React component.
 *
 * @module core/createGestureComponent
 *
 * @example
 * ```tsx
 * const TripleTapGesture = createGestureComponent({
 *   name: 'TripleTapGesture',
 *   createGesture: (props) =>
 *     Gesture.Tap()
 *       .numberOfTaps(3)
 *       .onEnd(() => props.onTripleTap()),
 * });
 * ```
 */

interface CreateGestureComponentConfig<P> {
    /** Display name for React DevTools */
    name: string;
    /** Create the RNGH gesture from the provided props */
    createGesture: (props: P) => GestureType;
}
/**
 * Create a gesture component from a configuration object.
 *
 * @param config - The component name and gesture factory function.
 * @returns A React component that wraps its children in a GestureDetector.
 */
declare function createGestureComponent<P extends {
    enabled?: boolean;
    children: React$1.ReactNode;
}>(config: CreateGestureComponentConfig<P>): React$1.FC<P>;

/**
 * Swipe direction detection utilities.
 *
 * @module utils/direction
 */

/**
 * Detect swipe direction from pan translation and velocity.
 *
 * Uses velocity as the primary signal. Falls back to translation
 * when velocity is near-zero.
 */
declare function detectSwipeDirection(translationX: number, translationY: number, velocityX: number, velocityY: number): SwipeDirection;
/**
 * Check if a detected direction matches the desired direction.
 * Returns true if no desired direction is specified (any direction).
 */
declare function matchesDirection(detected: SwipeDirection, desired?: SwipeDirection): boolean;
/**
 * Calculate the magnitude of a 2D vector.
 */
declare function magnitude(x: number, y: number): number;

/**
 * Gesture composition utilities.
 *
 * @module utils/compose
 */

/** A gesture that can be passed to GestureDetector */
type AnyGesture = GestureType | ComposedGesture;
/**
 * Compose an array of gestures using the specified priority strategy.
 *
 * - `simultaneous` — All gestures can activate at the same time.
 * - `exclusive`    — Only one gesture in the group can activate (first wins).
 * - `race`         — Gestures compete; the first to activate cancels the rest.
 *
 * If only one gesture is provided it is returned as-is.
 */
declare function composeGestures(gestures: GestureType[], priority?: GesturePriority): AnyGesture;

export { type AIGestureEvent, type AdaptiveEvent, AdaptiveGesture, type AirDrawEvent, AirDrawGesture, type AirGestureEvent, type AirPinchEvent, AirPinchGesture, type AirRotateEvent, AirRotateGesture, type AirSwipeEvent, AirSwipeGesture, AirTapGesture, type AnyGesture, type BaseGestureEvent, type BaseGestureProps, type BodyEvent, BodyPoseGesture, CircularMotionGesture, type CircularSwipeEvent, CircularSwipeGesture, type CircularSwipeProps, type ClapEvent, ClapGesture, CompressGesture, ContextAwareGesture, type ContextEvent, type CornerPosition, type CornerSwipeEvent, CornerSwipeGesture, type CornerSwipeProps, type CurvedSwipeEvent, CurvedSwipeGesture, type CurvedSwipeProps, CustomShapeGesture, DiagonalSwipeGesture, type DiagonalSwipeProps, DoubleTapGesture, type DoubleTapGestureProps, type DoubleTapProps, type DragAndDropEvent, DragAndDropGesture, type DragAndDropProps, type DragEvent, DragGesture, type DragProps, DrawCircleGesture, type DrawEvent, DrawLetterGesture, DrawLineGesture, type DrawPoint, DrawSquareGesture, DrawStarGesture, DrawTriangleGesture, type EdgePosition, type EdgeSwipeEvent, EdgeSwipeGesture, type EdgeSwipeProps, EmotionBasedGesture, type EmotionEvent, FaceUpDownGesture, FingerGatherGesture, FingerSpreadGesture, type FlingDirection, type FlingEvent, type FlingGestureProps, type FlipEvent, FlipGesture, FourFingerTapGesture, FreeFallGesture, GestureComposer as Gesture, type GestureComponentConfig, GestureComposer, type GestureComposerProps, GesturePrediction, type GesturePriority, GestureState, HandAwayGesture, HandNearGesture, HandWaveGesture, type HeadEvent, HeadNodGesture, HeadShakeGesture, type HoverEvent, HoverGesture, type HybridEvent, IntentBasedGesture, type IntentEvent, type LongPressEvent, LongPressGesture, type LongPressGestureProps, type LongPressProps, type MotionEvent, MultiAxisTiltGesture, type MultiDeviceEvent, MultiDeviceGesture, MultiFingerDragGesture, type MultiFingerEvent, type MultiFingerSwipeEvent, type MultiHandEvent, MultiHandGesture, MultiStepGesture, type PanEvent, PanGesture, type PanGestureProps$1 as PanGestureProps, type PanProps, type PinchEvent, PinchGesture, type PinchGestureProps$1 as PinchGestureProps, type PinchRotateEvent, PinchRotateGesture, type Point, type PoseEvent, type PredictionEvent, type PressForceEvent, PressForceGesture, type PressForceProps, type ProximityEvent, ProximityTapGesture, QuadTapGesture, type QuadTapProps, RaiseHandGesture, type RotateEvent, type RotationEvent, RotationGesture, type RotationGestureProps$1 as RotationGestureProps, SensorCameraGesture, type SensorEvent, type SequenceConfig, type SequenceEvent, type SequenceStep, type ShakeEvent, ShakeGesture, type ShapeRecognitionEvent, type SpreadGatherEvent, StepGesture, type StretchEvent, StretchGesture, type StylusDrawEvent, StylusDrawGesture, type StylusEvent, type StylusHoverEvent, StylusHoverGesture, StylusPressureGesture, type StylusTapEvent, StylusTapGesture, StylusTiltGesture, SwingGesture, type SwipeDirection, SwipeDownGesture, type SwipeEvent, type SwipeGestureProps, SwipeLeftGesture, type SwipeProps, SwipeRightGesture, SwipeRotateSequence, SwipeTapSequence, SwipeUpGesture, TapAndHoldGesture, type TapAndHoldProps, TapCancelGesture, type TapCancelProps, type TapEvent, TapGesture, type TapGestureProps, TapHoldSequence, type TapProps, TapSwipeSequence, TapTapSwipeSequence, ThreeFingerSwipeGesture, ThreeFingerTapGesture, TiltBackwardGesture, type TiltEvent, TiltForwardGesture, TiltLeftGesture, TiltRightGesture, type TouchCameraEvent, TouchCameraGesture, type TouchSensorEvent, TouchSensorGesture, type TouchVoiceEvent, TouchVoiceGesture, TripleTapGesture, type TripleTapProps, TwoFingerSwipeGesture, TwoFingerTapGesture, type UseCircularSwipeOptions, type UseCornerSwipeOptions, type UseCurvedSwipeOptions, type UseDiagonalSwipeOptions, type UseDoubleTapOptions, type UseDragAndDropOptions, type UseDragOptions, type UseEdgeSwipeOptions, type UseFlingOptions, type UseGestureOptions, type UseLongPressOptions, type UsePanOptions, type UsePinchOptions, type UsePressForceOptions, type UseQuadTapOptions, type UseRotationOptions, type UseSwipeDownOptions, type UseSwipeLeftOptions, type UseSwipeOptions, type UseSwipeRightOptions, type UseSwipeUpOptions, type UseTapAndHoldOptions, type UseTapCancelOptions, type UseTapOptions, type UseTripleTapOptions, type UseVeryLongPressOptions, type Velocity, VeryLongPressGesture, type VeryLongPressProps, composeGestures, createGestureComponent, detectSwipeDirection, magnitude, matchesDirection, useAdaptiveGesture, useAirDraw, useAirPinch, useAirRotate, useAirSwipe, useAirTap, useBodyPose, useCircularMotion, useCircularSwipe, useClap, useCompress, useContextAware, useCornerSwipe, useCurvedSwipe, useCustomShape, useDiagonalSwipe, useDoubleTap, useDrag, useDragAndDrop, useDrawCircle, useDrawLetter, useDrawLine, useDrawSquare, useDrawStar, useDrawTriangle, useEdgeSwipe, useEmotionBased, useFaceUpDown, useFingerGather, useFingerSpread, useFlip, useFourFingerTap, useFreeFall, useGesturePrediction, useHandAway, useHandNear, useHandWave, useHeadNod, useHeadShake, useHover, useIntentBased, useLongPress, useMultiAxisTilt, useMultiDevice, useMultiFingerDrag, useMultiHand, useMultiStep, usePan, usePinch, usePinchRotate, usePressForce, useProximityTap, useQuadTap, useRaiseHand, useRotation, useSensorCamera, useShake, useStep, useStretch, useStylusDraw, useStylusHover, useStylusPressure, useStylusTap, useStylusTilt, useSwing, useSwipeDown, useSwipeLeft, useSwipeRight, useSwipeRotate, useSwipeTap, useSwipeUp, useTap, useTapAndHold, useTapCancel, useTapHold, useTapSwipe, useTapTapSwipe, useThreeFingerSwipe, useThreeFingerTap, useTiltBackward, useTiltForward, useTiltLeft, useTiltRight, useTouchCamera, useTouchSensor, useTouchVoice, useTripleTap, useTwoFingerSwipe, useTwoFingerTap, useVeryLongPress };
