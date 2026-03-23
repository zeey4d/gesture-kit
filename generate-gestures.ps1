$base = "c:\project\react-native-gesture-kit\src\gestures"

# ─── Helper function ───────────────────────────────────────────────────────────
function Write-File($path, $content) {
    $dir = Split-Path $path -Parent
    if (!(Test-Path $dir)) { New-Item -ItemType Directory -Force -Path $dir | Out-Null }
    Set-Content -Path $path -Value $content -Encoding UTF8
}

function Write-Component($dir, $name, $displayName, $desc) {
    $content = @"
/**
 * $displayName - $desc
 * @module gestures
 */

import React from 'react';
import { View } from 'react-native';

export interface ${name}Props {
  children: React.ReactNode;
  enabled?: boolean;
  [key: string]: any;
}

export const ${name}: React.FC<${name}Props> = ({ children, enabled = true, ...rest }) => {
  // TODO: Implement $displayName logic
  return <View {...rest}>{children}</View>;
};

${name}.displayName = '$name';
"@
    Write-File "$dir\$name.tsx" $content
}

function Write-Hook($dir, $hookName, $desc) {
    $content = @"
/**
 * $hookName - $desc
 */

import { useMemo } from 'react';

export interface ${hookName}Options {
  enabled?: boolean;
  [key: string]: any;
}

export function ${hookName}(options: ${hookName}Options = {}) {
  const { enabled = true } = options;
  return useMemo(() => {
    // TODO: Implement $hookName logic
    return { enabled };
  }, [enabled]);
}
"@
    Write-File "$dir\$hookName.ts" $content
}

function Write-CategoryTypes($dir, $interfaces) {
    $content = @"
/**
 * Type definitions for this gesture category.
 */

import type { BaseGestureEvent, BaseGestureProps } from '../../types';

$interfaces
"@
    Write-File "$dir\types.ts" $content
}

function Write-Index($dir, $components, $hooks) {
    $exports = "// Types`nexport * from './types';`n`n// Components`n"
    foreach ($c in $components) { $exports += "export { $c } from './$c';`n" }
    $exports += "`n// Hooks`nexport * from './hooks';`n"
    Write-File "$dir\index.ts" $exports

    $hookExports = ""
    foreach ($h in $hooks) { $hookExports += "export { $h } from './$h';`n" }
    Write-File "$dir\hooks\index.ts" $hookExports
}

Write-Output "=== Creating drag-pan ==="
$dp = "$base\drag-pan"
$dpComponents = @(
    @("PanGesture",          "Pan Gesture",            "Detects pan/drag movement"),
    @("DragGesture",         "Drag Gesture",           "Detects drag gestures"),
    @("DragAndDropGesture",  "Drag and Drop Gesture",  "Detects drag and drop"),
    @("SwipeUpGesture",      "Swipe Up Gesture",       "Detects upward swipes"),
    @("SwipeDownGesture",    "Swipe Down Gesture",     "Detects downward swipes"),
    @("SwipeLeftGesture",    "Swipe Left Gesture",     "Detects leftward swipes"),
    @("SwipeRightGesture",   "Swipe Right Gesture",    "Detects rightward swipes"),
    @("EdgeSwipeGesture",    "Edge Swipe Gesture",     "Detects swipes from screen edges"),
    @("CornerSwipeGesture",  "Corner Swipe Gesture",   "Detects swipes from screen corners"),
    @("DiagonalSwipeGesture","Diagonal Swipe Gesture", "Detects diagonal swipes"),
    @("CurvedSwipeGesture",  "Curved Swipe Gesture",   "Detects curved swipe paths"),
    @("CircularSwipeGesture","Circular Swipe Gesture",  "Detects circular swipe gestures")
)
foreach ($c in $dpComponents) { Write-Component $dp $c[0] $c[1] $c[2] }
$dpHooks = @("usePan","useDrag","useDragAndDrop","useSwipeUp","useSwipeDown","useSwipeLeft","useSwipeRight","useEdgeSwipe","useCornerSwipe","useDiagonalSwipe","useCurvedSwipe","useCircularSwipe")
foreach ($h in $dpHooks) { Write-Hook "$dp\hooks" $h "$h hook" }
Write-Index $dp ($dpComponents | ForEach-Object { $_[0] }) $dpHooks

Write-Output "=== Creating multi-finger ==="
$mf = "$base\multi-finger"
$mfComponents = @(
    @("TwoFingerTapGesture",     "Two Finger Tap",      "Detects two finger tap"),
    @("ThreeFingerTapGesture",   "Three Finger Tap",    "Detects three finger tap"),
    @("FourFingerTapGesture",    "Four Finger Tap",     "Detects four finger tap"),
    @("TwoFingerSwipeGesture",   "Two Finger Swipe",    "Detects two finger swipe"),
    @("ThreeFingerSwipeGesture", "Three Finger Swipe",  "Detects three finger swipe"),
    @("MultiFingerDragGesture",  "Multi Finger Drag",   "Detects multi finger drag"),
    @("FingerSpreadGesture",     "Finger Spread",       "Detects finger spread (pinch out)"),
    @("FingerGatherGesture",     "Finger Gather",       "Detects finger gather (pinch in)")
)
Write-CategoryTypes $mf @"
export interface MultiFingerEvent extends BaseGestureEvent {
  numberOfFingers: number;
}

export interface MultiFingerSwipeEvent extends MultiFingerEvent {
  direction: 'up' | 'down' | 'left' | 'right';
  velocity: number;
}

export interface SpreadGatherEvent extends MultiFingerEvent {
  scale: number;
  velocity: number;
}
"@
foreach ($c in $mfComponents) { Write-Component $mf $c[0] $c[1] $c[2] }
$mfHooks = @("useTwoFingerTap","useThreeFingerTap","useFourFingerTap","useTwoFingerSwipe","useThreeFingerSwipe","useMultiFingerDrag","useFingerSpread","useFingerGather")
foreach ($h in $mfHooks) { Write-Hook "$mf\hooks" $h "$h hook" }
Write-Index $mf ($mfComponents | ForEach-Object { $_[0] }) $mfHooks

Write-Output "=== Creating transform ==="
$tf = "$base\transform"
$tfComponents = @(
    @("PinchGesture",       "Pinch Gesture",         "Detects pinch in/out"),
    @("RotationGesture",    "Rotation Gesture",      "Detects rotation"),
    @("PinchRotateGesture", "Pinch Rotate Gesture",  "Detects simultaneous pinch and rotate"),
    @("StretchGesture",     "Stretch Gesture",       "Detects stretch transforms"),
    @("CompressGesture",    "Compress Gesture",      "Detects compress transforms")
)
Write-CategoryTypes $tf @"
export interface PinchEvent extends BaseGestureEvent {
  scale: number;
  velocity: number;
  focalX: number;
  focalY: number;
}

export interface RotateEvent extends BaseGestureEvent {
  rotation: number;
  velocity: number;
  anchorX: number;
  anchorY: number;
}

export interface PinchRotateEvent extends BaseGestureEvent {
  scale: number;
  rotation: number;
  focalX: number;
  focalY: number;
}

export interface StretchEvent extends BaseGestureEvent {
  scaleX: number;
  scaleY: number;
}
"@
foreach ($c in $tfComponents) { Write-Component $tf $c[0] $c[1] $c[2] }
$tfHooks = @("usePinch","useRotation","usePinchRotate","useStretch","useCompress")
foreach ($h in $tfHooks) { Write-Hook "$tf\hooks" $h "$h hook" }
Write-Index $tf ($tfComponents | ForEach-Object { $_[0] }) $tfHooks

Write-Output "=== Creating drawing ==="
$dr = "$base\drawing"
$drComponents = @(
    @("DrawLineGesture",     "Draw Line",      "Detects line drawing"),
    @("DrawCircleGesture",   "Draw Circle",    "Detects circle drawing"),
    @("DrawSquareGesture",   "Draw Square",    "Detects square drawing"),
    @("DrawTriangleGesture", "Draw Triangle",  "Detects triangle drawing"),
    @("DrawStarGesture",     "Draw Star",      "Detects star drawing"),
    @("DrawLetterGesture",   "Draw Letter",    "Detects letter/symbol drawing"),
    @("CustomShapeGesture",  "Custom Shape",   "Detects custom shape recognition")
)
Write-CategoryTypes $dr @"
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
"@
foreach ($c in $drComponents) { Write-Component $dr $c[0] $c[1] $c[2] }
$drHooks = @("useDrawLine","useDrawCircle","useDrawSquare","useDrawTriangle","useDrawStar","useDrawLetter","useCustomShape")
foreach ($h in $drHooks) { Write-Hook "$dr\hooks" $h "$h hook" }
Write-Index $dr ($drComponents | ForEach-Object { $_[0] }) $drHooks

Write-Output "=== Creating sequences ==="
$sq = "$base\sequences"
$sqComponents = @(
    @("TapSwipeSequence",    "Tap Swipe Sequence",    "Detects tap then swipe"),
    @("SwipeTapSequence",    "Swipe Tap Sequence",    "Detects swipe then tap"),
    @("TapHoldSequence",     "Tap Hold Sequence",     "Detects tap then hold"),
    @("SwipeRotateSequence", "Swipe Rotate Sequence", "Detects swipe then rotate"),
    @("TapTapSwipeSequence", "Tap Tap Swipe Sequence","Detects tap tap then swipe"),
    @("MultiStepGesture",    "Multi Step Gesture",    "Detects configurable multi-step gestures")
)
Write-CategoryTypes $sq @"
export type SequenceStep = 'tap' | 'swipe' | 'hold' | 'rotate' | 'pinch';

export interface SequenceEvent extends BaseGestureEvent {
  steps: SequenceStep[];
  totalDuration: number;
}

export interface SequenceConfig {
  steps: SequenceStep[];
  timingWindow?: number;
  interruptible?: boolean;
}
"@
foreach ($c in $sqComponents) { Write-Component $sq $c[0] $c[1] $c[2] }
$sqHooks = @("useTapSwipe","useSwipeTap","useTapHold","useSwipeRotate","useTapTapSwipe","useMultiStep")
foreach ($h in $sqHooks) { Write-Hook "$sq\hooks" $h "$h hook" }
Write-Index $sq ($sqComponents | ForEach-Object { $_[0] }) $sqHooks

Write-Output "=== Creating sensor ==="
$sn = "$base\sensor"
$snComponents = @(
    @("ShakeGesture",          "Shake Gesture",          "Detects shake motion"),
    @("TiltLeftGesture",       "Tilt Left Gesture",      "Detects left tilt"),
    @("TiltRightGesture",      "Tilt Right Gesture",     "Detects right tilt"),
    @("TiltForwardGesture",    "Tilt Forward Gesture",   "Detects forward tilt"),
    @("TiltBackwardGesture",   "Tilt Backward Gesture",  "Detects backward tilt"),
    @("FlipGesture",           "Flip Gesture",           "Detects device flip"),
    @("FaceUpDownGesture",     "Face Up/Down Gesture",   "Detects face up/down orientation"),
    @("FreeFallGesture",       "Free Fall Gesture",      "Detects free fall"),
    @("SwingGesture",          "Swing Gesture",          "Detects swing/twirl motion"),
    @("CircularMotionGesture", "Circular Motion Gesture","Detects circular motion"),
    @("MultiAxisTiltGesture",  "Multi Axis Tilt Gesture","Detects multi-axis tilt")
)
Write-CategoryTypes $sn @"
export interface SensorEvent extends BaseGestureEvent {
  accelerationX: number;
  accelerationY: number;
  accelerationZ: number;
}

export interface TiltEvent extends SensorEvent {
  angle: number;
  direction: 'left' | 'right' | 'forward' | 'backward';
}

export interface ShakeEvent extends SensorEvent {
  intensity: number;
  duration: number;
}

export interface FlipEvent extends SensorEvent {
  orientation: 'faceUp' | 'faceDown';
}

export interface MotionEvent extends SensorEvent {
  rotationX: number;
  rotationY: number;
  rotationZ: number;
}
"@
foreach ($c in $snComponents) { Write-Component $sn $c[0] $c[1] $c[2] }
$snHooks = @("useShake","useTiltLeft","useTiltRight","useTiltForward","useTiltBackward","useFlip","useFaceUpDown","useFreeFall","useSwing","useCircularMotion","useMultiAxisTilt")
foreach ($h in $snHooks) { Write-Hook "$sn\hooks" $h "$h hook" }
Write-Index $sn ($snComponents | ForEach-Object { $_[0] }) $snHooks

Write-Output "=== Creating proximity ==="
$px = "$base\proximity"
$pxComponents = @(
    @("HandNearGesture",     "Hand Near Gesture",     "Detects hand approaching"),
    @("HandAwayGesture",     "Hand Away Gesture",     "Detects hand moving away"),
    @("ProximityTapGesture", "Proximity Tap Gesture", "Detects proximity-based tap"),
    @("HoverGesture",        "Hover Gesture",         "Detects hovering")
)
Write-CategoryTypes $px @"
export interface ProximityEvent extends BaseGestureEvent {
  distance: number;
  isNear: boolean;
}

export interface HoverEvent extends BaseGestureEvent {
  duration: number;
  distance: number;
}
"@
foreach ($c in $pxComponents) { Write-Component $px $c[0] $c[1] $c[2] }
$pxHooks = @("useHandNear","useHandAway","useProximityTap","useHover")
foreach ($h in $pxHooks) { Write-Hook "$px\hooks" $h "$h hook" }
Write-Index $px ($pxComponents | ForEach-Object { $_[0] }) $pxHooks

Write-Output "=== Creating air ==="
$ai = "$base\air"
$aiComponents = @(
    @("HandWaveGesture",  "Hand Wave Gesture",  "Detects hand wave"),
    @("AirSwipeGesture",  "Air Swipe Gesture",  "Detects air swipe"),
    @("AirTapGesture",    "Air Tap Gesture",    "Detects air tap"),
    @("AirPinchGesture",  "Air Pinch Gesture",  "Detects air pinch"),
    @("AirRotateGesture", "Air Rotate Gesture", "Detects air rotation"),
    @("AirDrawGesture",   "Air Draw Gesture",   "Detects air drawing"),
    @("MultiHandGesture", "Multi Hand Gesture", "Detects multi-hand gestures")
)
Write-CategoryTypes $ai @"
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
  path: Array<{ x: number; y: number; z: number }>;
}

export interface MultiHandEvent extends AirGestureEvent {
  hands: number;
}
"@
foreach ($c in $aiComponents) { Write-Component $ai $c[0] $c[1] $c[2] }
$aiHooks = @("useHandWave","useAirSwipe","useAirTap","useAirPinch","useAirRotate","useAirDraw","useMultiHand")
foreach ($h in $aiHooks) { Write-Hook "$ai\hooks" $h "$h hook" }
Write-Index $ai ($aiComponents | ForEach-Object { $_[0] }) $aiHooks

Write-Output "=== Creating body ==="
$bd = "$base\body"
$bdComponents = @(
    @("HeadNodGesture",   "Head Nod Gesture",  "Detects head nod"),
    @("HeadShakeGesture", "Head Shake Gesture","Detects head shake"),
    @("RaiseHandGesture", "Raise Hand Gesture","Detects raised hand"),
    @("ClapGesture",      "Clap Gesture",      "Detects clapping"),
    @("StepGesture",      "Step Gesture",      "Detects step gestures"),
    @("BodyPoseGesture",  "Body Pose Gesture", "Detects full body poses")
)
Write-CategoryTypes $bd @"
export interface BodyEvent extends BaseGestureEvent {
  confidence: number;
}

export interface HeadEvent extends BodyEvent {
  direction: 'nod' | 'shake';
  angle: number;
}

export interface PoseEvent extends BodyEvent {
  poseName: string;
  landmarks: Array<{ x: number; y: number; z: number }>;
}

export interface ClapEvent extends BodyEvent {
  intensity: number;
}
"@
foreach ($c in $bdComponents) { Write-Component $bd $c[0] $c[1] $c[2] }
$bdHooks = @("useHeadNod","useHeadShake","useRaiseHand","useClap","useStep","useBodyPose")
foreach ($h in $bdHooks) { Write-Hook "$bd\hooks" $h "$h hook" }
Write-Index $bd ($bdComponents | ForEach-Object { $_[0] }) $bdHooks

Write-Output "=== Creating stylus ==="
$st = "$base\stylus"
$stComponents = @(
    @("StylusTapGesture",      "Stylus Tap Gesture",      "Detects stylus tap"),
    @("StylusPressureGesture", "Stylus Pressure Gesture", "Detects stylus pressure"),
    @("StylusTiltGesture",     "Stylus Tilt Gesture",     "Detects stylus tilt angle"),
    @("StylusHoverGesture",    "Stylus Hover Gesture",    "Detects stylus hovering"),
    @("StylusDrawGesture",     "Stylus Draw Gesture",     "Detects stylus drawing")
)
Write-CategoryTypes $st @"
export interface StylusEvent extends BaseGestureEvent {
  pressure: number;
  tiltX: number;
  tiltY: number;
}

export interface StylusTapEvent extends StylusEvent {
  numberOfTaps: number;
}

export interface StylusDrawEvent extends StylusEvent {
  path: Array<{ x: number; y: number; pressure: number }>;
  strokeWidth: number;
}

export interface StylusHoverEvent extends BaseGestureEvent {
  altitude: number;
  azimuth: number;
}
"@
foreach ($c in $stComponents) { Write-Component $st $c[0] $c[1] $c[2] }
$stHooks = @("useStylusTap","useStylusPressure","useStylusTilt","useStylusHover","useStylusDraw")
foreach ($h in $stHooks) { Write-Hook "$st\hooks" $h "$h hook" }
Write-Index $st ($stComponents | ForEach-Object { $_[0] }) $stHooks

Write-Output "=== Creating hybrid ==="
$hy = "$base\hybrid"
$hyComponents = @(
    @("TouchSensorGesture",  "Touch Sensor Gesture",   "Combines touch with sensor data"),
    @("TouchCameraGesture",  "Touch Camera Gesture",   "Combines touch with camera input"),
    @("SensorCameraGesture", "Sensor Camera Gesture",  "Combines sensor with camera"),
    @("TouchVoiceGesture",   "Touch Voice Gesture",    "Combines touch with voice input"),
    @("MultiDeviceGesture",  "Multi Device Gesture",   "Cross-device gesture coordination")
)
Write-CategoryTypes $hy @"
export interface HybridEvent extends BaseGestureEvent {
  sources: string[];
  confidence: number;
}

export interface TouchSensorEvent extends HybridEvent {
  sensorData: { x: number; y: number; z: number };
}

export interface TouchCameraEvent extends HybridEvent {
  cameraData: { handDetected: boolean; gestureClass: string };
}

export interface TouchVoiceEvent extends HybridEvent {
  voiceCommand: string;
  voiceConfidence: number;
}

export interface MultiDeviceEvent extends HybridEvent {
  deviceId: string;
  syncTimestamp: number;
}
"@
foreach ($c in $hyComponents) { Write-Component $hy $c[0] $c[1] $c[2] }
$hyHooks = @("useTouchSensor","useTouchCamera","useSensorCamera","useTouchVoice","useMultiDevice")
foreach ($h in $hyHooks) { Write-Hook "$hy\hooks" $h "$h hook" }
Write-Index $hy ($hyComponents | ForEach-Object { $_[0] }) $hyHooks

Write-Output "=== Creating ai ==="
$ag = "$base\ai"
$agComponents = @(
    @("GesturePrediction",    "Gesture Prediction",     "AI-based gesture prediction"),
    @("AdaptiveGesture",      "Adaptive Gesture",       "Gestures that adapt to user behavior"),
    @("ContextAwareGesture",  "Context Aware Gesture",  "Context-aware gesture recognition"),
    @("EmotionBasedGesture",  "Emotion Based Gesture",  "Emotion-driven gesture responses"),
    @("IntentBasedGesture",   "Intent Based Gesture",   "Intent-based gesture recognition")
)
Write-CategoryTypes $ag @"
export interface AIGestureEvent extends BaseGestureEvent {
  confidence: number;
  modelVersion: string;
}

export interface PredictionEvent extends AIGestureEvent {
  predictedGesture: string;
  alternatives: Array<{ gesture: string; probability: number }>;
}

export interface AdaptiveEvent extends AIGestureEvent {
  userProfile: string;
  adaptationLevel: number;
}

export interface ContextEvent extends AIGestureEvent {
  context: string;
  contextualFactors: Record<string, unknown>;
}

export interface EmotionEvent extends AIGestureEvent {
  emotion: string;
  intensity: number;
}

export interface IntentEvent extends AIGestureEvent {
  intent: string;
  entities: Record<string, string>;
}
"@
foreach ($c in $agComponents) { Write-Component $ag $c[0] $c[1] $c[2] }
$agHooks = @("useGesturePrediction","useAdaptiveGesture","useContextAware","useEmotionBased","useIntentBased")
foreach ($h in $agHooks) { Write-Hook "$ag\hooks" $h "$h hook" }
Write-Index $ag ($agComponents | ForEach-Object { $_[0] }) $agHooks

# ─── Top-level gestures barrel ─────────────────────────────────────────────────
$gesturesIndex = @"
// Gesture categories barrel export
export * from './basic-touch';
export * from './drag-pan';
export * from './multi-finger';
export * from './transform';
export * from './drawing';
export * from './sequences';
export * from './sensor';
export * from './proximity';
export * from './air';
export * from './body';
export * from './stylus';
export * from './hybrid';
export * from './ai';
"@
Write-File "$base\index.ts" $gesturesIndex

Write-Output ""
Write-Output "============================================="
Write-Output "  ALL 13 GESTURE CATEGORIES CREATED!"
Write-Output "============================================="
Write-Output ""
