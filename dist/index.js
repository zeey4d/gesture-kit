"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  AdaptiveGesture: () => AdaptiveGesture,
  AirDrawGesture: () => AirDrawGesture,
  AirPinchGesture: () => AirPinchGesture,
  AirRotateGesture: () => AirRotateGesture,
  AirSwipeGesture: () => AirSwipeGesture,
  AirTapGesture: () => AirTapGesture,
  BodyPoseGesture: () => BodyPoseGesture,
  CircularMotionGesture: () => CircularMotionGesture,
  CircularSwipeGesture: () => CircularSwipeGesture,
  ClapGesture: () => ClapGesture,
  CompressGesture: () => CompressGesture,
  ContextAwareGesture: () => ContextAwareGesture,
  CornerSwipeGesture: () => CornerSwipeGesture,
  CurvedSwipeGesture: () => CurvedSwipeGesture,
  CustomShapeGesture: () => CustomShapeGesture,
  DiagonalSwipeGesture: () => DiagonalSwipeGesture,
  DoubleTapGesture: () => DoubleTapGesture,
  DragAndDropGesture: () => DragAndDropGesture,
  DragGesture: () => DragGesture,
  DrawCircleGesture: () => DrawCircleGesture,
  DrawLetterGesture: () => DrawLetterGesture,
  DrawLineGesture: () => DrawLineGesture,
  DrawSquareGesture: () => DrawSquareGesture,
  DrawStarGesture: () => DrawStarGesture,
  DrawTriangleGesture: () => DrawTriangleGesture,
  EdgeSwipeGesture: () => EdgeSwipeGesture,
  EmotionBasedGesture: () => EmotionBasedGesture,
  FaceUpDownGesture: () => FaceUpDownGesture,
  FingerGatherGesture: () => FingerGatherGesture,
  FingerSpreadGesture: () => FingerSpreadGesture,
  FlipGesture: () => FlipGesture,
  FourFingerTapGesture: () => FourFingerTapGesture,
  FreeFallGesture: () => FreeFallGesture,
  Gesture: () => GestureComposer,
  GestureComposer: () => GestureComposer,
  GesturePrediction: () => GesturePrediction,
  GestureState: () => GestureState,
  HandAwayGesture: () => HandAwayGesture,
  HandNearGesture: () => HandNearGesture,
  HandWaveGesture: () => HandWaveGesture,
  HeadNodGesture: () => HeadNodGesture,
  HeadShakeGesture: () => HeadShakeGesture,
  HoverGesture: () => HoverGesture,
  IntentBasedGesture: () => IntentBasedGesture,
  LongPressGesture: () => LongPressGesture,
  MultiAxisTiltGesture: () => MultiAxisTiltGesture,
  MultiDeviceGesture: () => MultiDeviceGesture,
  MultiFingerDragGesture: () => MultiFingerDragGesture,
  MultiHandGesture: () => MultiHandGesture,
  MultiStepGesture: () => MultiStepGesture,
  PanGesture: () => PanGesture,
  PinchGesture: () => PinchGesture,
  PinchRotateGesture: () => PinchRotateGesture,
  PressForceGesture: () => PressForceGesture,
  ProximityTapGesture: () => ProximityTapGesture,
  QuadTapGesture: () => QuadTapGesture,
  RaiseHandGesture: () => RaiseHandGesture,
  RotationGesture: () => RotationGesture,
  SensorCameraGesture: () => SensorCameraGesture,
  ShakeGesture: () => ShakeGesture,
  StepGesture: () => StepGesture,
  StretchGesture: () => StretchGesture,
  StylusDrawGesture: () => StylusDrawGesture,
  StylusHoverGesture: () => StylusHoverGesture,
  StylusPressureGesture: () => StylusPressureGesture,
  StylusTapGesture: () => StylusTapGesture,
  StylusTiltGesture: () => StylusTiltGesture,
  SwingGesture: () => SwingGesture,
  SwipeDownGesture: () => SwipeDownGesture,
  SwipeLeftGesture: () => SwipeLeftGesture,
  SwipeRightGesture: () => SwipeRightGesture,
  SwipeRotateSequence: () => SwipeRotateSequence,
  SwipeTapSequence: () => SwipeTapSequence,
  SwipeUpGesture: () => SwipeUpGesture,
  TapAndHoldGesture: () => TapAndHoldGesture,
  TapCancelGesture: () => TapCancelGesture,
  TapGesture: () => TapGesture,
  TapHoldSequence: () => TapHoldSequence,
  TapSwipeSequence: () => TapSwipeSequence,
  TapTapSwipeSequence: () => TapTapSwipeSequence,
  ThreeFingerSwipeGesture: () => ThreeFingerSwipeGesture,
  ThreeFingerTapGesture: () => ThreeFingerTapGesture,
  TiltBackwardGesture: () => TiltBackwardGesture,
  TiltForwardGesture: () => TiltForwardGesture,
  TiltLeftGesture: () => TiltLeftGesture,
  TiltRightGesture: () => TiltRightGesture,
  TouchCameraGesture: () => TouchCameraGesture,
  TouchSensorGesture: () => TouchSensorGesture,
  TouchVoiceGesture: () => TouchVoiceGesture,
  TripleTapGesture: () => TripleTapGesture,
  TwoFingerSwipeGesture: () => TwoFingerSwipeGesture,
  TwoFingerTapGesture: () => TwoFingerTapGesture,
  VeryLongPressGesture: () => VeryLongPressGesture,
  composeGestures: () => composeGestures,
  createGestureComponent: () => createGestureComponent,
  detectSwipeDirection: () => detectSwipeDirection,
  magnitude: () => magnitude,
  matchesDirection: () => matchesDirection,
  useAdaptiveGesture: () => useAdaptiveGesture,
  useAirDraw: () => useAirDraw,
  useAirPinch: () => useAirPinch,
  useAirRotate: () => useAirRotate,
  useAirSwipe: () => useAirSwipe,
  useAirTap: () => useAirTap,
  useBodyPose: () => useBodyPose,
  useCircularMotion: () => useCircularMotion,
  useCircularSwipe: () => useCircularSwipe,
  useClap: () => useClap,
  useCompress: () => useCompress,
  useContextAware: () => useContextAware,
  useCornerSwipe: () => useCornerSwipe,
  useCurvedSwipe: () => useCurvedSwipe,
  useCustomShape: () => useCustomShape,
  useDiagonalSwipe: () => useDiagonalSwipe,
  useDoubleTap: () => useDoubleTap,
  useDrag: () => useDrag,
  useDragAndDrop: () => useDragAndDrop,
  useDrawCircle: () => useDrawCircle,
  useDrawLetter: () => useDrawLetter,
  useDrawLine: () => useDrawLine,
  useDrawSquare: () => useDrawSquare,
  useDrawStar: () => useDrawStar,
  useDrawTriangle: () => useDrawTriangle,
  useEdgeSwipe: () => useEdgeSwipe,
  useEmotionBased: () => useEmotionBased,
  useFaceUpDown: () => useFaceUpDown,
  useFingerGather: () => useFingerGather,
  useFingerSpread: () => useFingerSpread,
  useFlip: () => useFlip,
  useFourFingerTap: () => useFourFingerTap,
  useFreeFall: () => useFreeFall,
  useGesturePrediction: () => useGesturePrediction,
  useHandAway: () => useHandAway,
  useHandNear: () => useHandNear,
  useHandWave: () => useHandWave,
  useHeadNod: () => useHeadNod,
  useHeadShake: () => useHeadShake,
  useHover: () => useHover,
  useIntentBased: () => useIntentBased,
  useLongPress: () => useLongPress,
  useMultiAxisTilt: () => useMultiAxisTilt,
  useMultiDevice: () => useMultiDevice,
  useMultiFingerDrag: () => useMultiFingerDrag,
  useMultiHand: () => useMultiHand,
  useMultiStep: () => useMultiStep,
  usePan: () => usePan,
  usePinch: () => usePinch,
  usePinchRotate: () => usePinchRotate,
  usePressForce: () => usePressForce,
  useProximityTap: () => useProximityTap,
  useQuadTap: () => useQuadTap,
  useRaiseHand: () => useRaiseHand,
  useRotation: () => useRotation,
  useSensorCamera: () => useSensorCamera,
  useShake: () => useShake,
  useStep: () => useStep,
  useStretch: () => useStretch,
  useStylusDraw: () => useStylusDraw,
  useStylusHover: () => useStylusHover,
  useStylusPressure: () => useStylusPressure,
  useStylusTap: () => useStylusTap,
  useStylusTilt: () => useStylusTilt,
  useSwing: () => useSwing,
  useSwipeDown: () => useSwipeDown,
  useSwipeLeft: () => useSwipeLeft,
  useSwipeRight: () => useSwipeRight,
  useSwipeRotate: () => useSwipeRotate,
  useSwipeTap: () => useSwipeTap,
  useSwipeUp: () => useSwipeUp,
  useTap: () => useTap,
  useTapAndHold: () => useTapAndHold,
  useTapCancel: () => useTapCancel,
  useTapHold: () => useTapHold,
  useTapSwipe: () => useTapSwipe,
  useTapTapSwipe: () => useTapTapSwipe,
  useThreeFingerSwipe: () => useThreeFingerSwipe,
  useThreeFingerTap: () => useThreeFingerTap,
  useTiltBackward: () => useTiltBackward,
  useTiltForward: () => useTiltForward,
  useTiltLeft: () => useTiltLeft,
  useTiltRight: () => useTiltRight,
  useTouchCamera: () => useTouchCamera,
  useTouchSensor: () => useTouchSensor,
  useTouchVoice: () => useTouchVoice,
  useTripleTap: () => useTripleTap,
  useTwoFingerSwipe: () => useTwoFingerSwipe,
  useTwoFingerTap: () => useTwoFingerTap,
  useVeryLongPress: () => useVeryLongPress
});
module.exports = __toCommonJS(index_exports);

// src/types/gestures.ts
var GestureState = /* @__PURE__ */ ((GestureState2) => {
  GestureState2[GestureState2["UNDETERMINED"] = 0] = "UNDETERMINED";
  GestureState2[GestureState2["BEGAN"] = 1] = "BEGAN";
  GestureState2[GestureState2["ACTIVE"] = 2] = "ACTIVE";
  GestureState2[GestureState2["END"] = 3] = "END";
  GestureState2[GestureState2["CANCELLED"] = 4] = "CANCELLED";
  GestureState2[GestureState2["FAILED"] = 5] = "FAILED";
  return GestureState2;
})(GestureState || {});

// src/gestures/basic-touch/TapGesture.tsx
var import_react = __toESM(require("react"));
var import_react_native_gesture_handler = require("react-native-gesture-handler");
var TapGesture = ({
  children,
  onTap,
  numberOfTaps = 1,
  maxDuration,
  maxDistance,
  enabled = true
}) => {
  const gesture = (0, import_react.useMemo)(() => {
    let g = import_react_native_gesture_handler.Gesture.Tap().numberOfTaps(numberOfTaps);
    if (maxDuration !== void 0) g = g.maxDuration(maxDuration);
    if (maxDistance !== void 0) g = g.maxDistance(maxDistance);
    g = g.onEnd((e) => {
      const event = {
        absoluteX: e.absoluteX,
        absoluteY: e.absoluteY,
        x: e.x,
        y: e.y,
        numberOfTaps
      };
      onTap(event);
    });
    return g.enabled(enabled);
  }, [onTap, numberOfTaps, maxDuration, maxDistance, enabled]);
  return /* @__PURE__ */ import_react.default.createElement(import_react_native_gesture_handler.GestureDetector, { gesture }, children);
};
TapGesture.displayName = "TapGesture";

// src/gestures/basic-touch/DoubleTapGesture.tsx
var import_react2 = __toESM(require("react"));
var import_react_native_gesture_handler2 = require("react-native-gesture-handler");
var DoubleTapGesture = ({
  children,
  onDoubleTap,
  maxDelay,
  maxDistance,
  enabled = true
}) => {
  const gesture = (0, import_react2.useMemo)(() => {
    let g = import_react_native_gesture_handler2.Gesture.Tap().numberOfTaps(2);
    if (maxDelay !== void 0) g = g.maxDuration(maxDelay);
    if (maxDistance !== void 0) g = g.maxDistance(maxDistance);
    g = g.onEnd((e) => {
      const event = {
        absoluteX: e.absoluteX,
        absoluteY: e.absoluteY,
        x: e.x,
        y: e.y,
        numberOfTaps: 2
      };
      onDoubleTap(event);
    });
    return g.enabled(enabled);
  }, [onDoubleTap, maxDelay, maxDistance, enabled]);
  return /* @__PURE__ */ import_react2.default.createElement(import_react_native_gesture_handler2.GestureDetector, { gesture }, children);
};
DoubleTapGesture.displayName = "DoubleTapGesture";

// src/gestures/basic-touch/TripleTapGesture.tsx
var import_react3 = __toESM(require("react"));
var import_react_native_gesture_handler3 = require("react-native-gesture-handler");
var TripleTapGesture = ({
  children,
  onTripleTap,
  maxDelay,
  maxDistance,
  enabled = true
}) => {
  const gesture = (0, import_react3.useMemo)(() => {
    let g = import_react_native_gesture_handler3.Gesture.Tap().numberOfTaps(3);
    if (maxDelay !== void 0) g = g.maxDuration(maxDelay);
    if (maxDistance !== void 0) g = g.maxDistance(maxDistance);
    g = g.onEnd((e) => {
      const event = {
        absoluteX: e.absoluteX,
        absoluteY: e.absoluteY,
        x: e.x,
        y: e.y,
        numberOfTaps: 3
      };
      onTripleTap(event);
    });
    return g.enabled(enabled);
  }, [onTripleTap, maxDelay, maxDistance, enabled]);
  return /* @__PURE__ */ import_react3.default.createElement(import_react_native_gesture_handler3.GestureDetector, { gesture }, children);
};
TripleTapGesture.displayName = "TripleTapGesture";

// src/gestures/basic-touch/QuadTapGesture.tsx
var import_react4 = __toESM(require("react"));
var import_react_native_gesture_handler4 = require("react-native-gesture-handler");
var QuadTapGesture = ({
  children,
  onQuadTap,
  maxDelay,
  maxDistance,
  enabled = true
}) => {
  const gesture = (0, import_react4.useMemo)(() => {
    let g = import_react_native_gesture_handler4.Gesture.Tap().numberOfTaps(4);
    if (maxDelay !== void 0) g = g.maxDuration(maxDelay);
    if (maxDistance !== void 0) g = g.maxDistance(maxDistance);
    g = g.onEnd((e) => {
      const event = {
        absoluteX: e.absoluteX,
        absoluteY: e.absoluteY,
        x: e.x,
        y: e.y,
        numberOfTaps: 4
      };
      onQuadTap(event);
    });
    return g.enabled(enabled);
  }, [onQuadTap, maxDelay, maxDistance, enabled]);
  return /* @__PURE__ */ import_react4.default.createElement(import_react_native_gesture_handler4.GestureDetector, { gesture }, children);
};
QuadTapGesture.displayName = "QuadTapGesture";

// src/gestures/basic-touch/LongPressGesture.tsx
var import_react5 = __toESM(require("react"));
var import_react_native_gesture_handler5 = require("react-native-gesture-handler");
var LongPressGesture = ({
  children,
  onLongPress,
  onPressIn,
  onPressOut,
  minDuration = 500,
  maxDistance,
  enabled = true
}) => {
  const gesture = (0, import_react5.useMemo)(() => {
    let g = import_react_native_gesture_handler5.Gesture.LongPress().minDuration(minDuration);
    if (maxDistance !== void 0) g = g.maxDistance(maxDistance);
    if (onPressIn) {
      g = g.onStart((e) => {
        const event = {
          absoluteX: e.absoluteX,
          absoluteY: e.absoluteY,
          x: e.x,
          y: e.y,
          duration: e.duration
        };
        onPressIn(event);
      });
    }
    g = g.onEnd((e) => {
      const event = {
        absoluteX: e.absoluteX,
        absoluteY: e.absoluteY,
        x: e.x,
        y: e.y,
        duration: e.duration
      };
      onLongPress(event);
    });
    if (onPressOut) {
      g = g.onFinalize((e) => {
        const event = {
          absoluteX: e.absoluteX,
          absoluteY: e.absoluteY,
          x: e.x,
          y: e.y,
          duration: e.duration
        };
        onPressOut(event);
      });
    }
    return g.enabled(enabled);
  }, [onLongPress, onPressIn, onPressOut, minDuration, maxDistance, enabled]);
  return /* @__PURE__ */ import_react5.default.createElement(import_react_native_gesture_handler5.GestureDetector, { gesture }, children);
};
LongPressGesture.displayName = "LongPressGesture";

// src/gestures/basic-touch/VeryLongPressGesture.tsx
var import_react6 = __toESM(require("react"));
var import_react_native_gesture_handler6 = require("react-native-gesture-handler");
var VeryLongPressGesture = ({
  children,
  onVeryLongPress,
  onPressIn,
  onPressOut,
  minDuration = 1500,
  maxDistance,
  enabled = true
}) => {
  const gesture = (0, import_react6.useMemo)(() => {
    let g = import_react_native_gesture_handler6.Gesture.LongPress().minDuration(minDuration);
    if (maxDistance !== void 0) g = g.maxDistance(maxDistance);
    if (onPressIn) {
      g = g.onStart((e) => {
        const event = {
          absoluteX: e.absoluteX,
          absoluteY: e.absoluteY,
          x: e.x,
          y: e.y,
          duration: e.duration
        };
        onPressIn(event);
      });
    }
    g = g.onEnd((e) => {
      const event = {
        absoluteX: e.absoluteX,
        absoluteY: e.absoluteY,
        x: e.x,
        y: e.y,
        duration: e.duration
      };
      onVeryLongPress(event);
    });
    if (onPressOut) {
      g = g.onFinalize((e) => {
        const event = {
          absoluteX: e.absoluteX,
          absoluteY: e.absoluteY,
          x: e.x,
          y: e.y,
          duration: e.duration
        };
        onPressOut(event);
      });
    }
    return g.enabled(enabled);
  }, [onVeryLongPress, onPressIn, onPressOut, minDuration, maxDistance, enabled]);
  return /* @__PURE__ */ import_react6.default.createElement(import_react_native_gesture_handler6.GestureDetector, { gesture }, children);
};
VeryLongPressGesture.displayName = "VeryLongPressGesture";

// src/gestures/basic-touch/TapAndHoldGesture.tsx
var import_react7 = __toESM(require("react"));
var import_react_native_gesture_handler7 = require("react-native-gesture-handler");
var TapAndHoldGesture = ({
  children,
  onTapAndHold,
  onTap,
  holdDuration = 500,
  enabled = true
}) => {
  const gesture = (0, import_react7.useMemo)(() => {
    const holdGesture = import_react_native_gesture_handler7.Gesture.LongPress().minDuration(holdDuration).onEnd((e) => {
      const event = {
        absoluteX: e.absoluteX,
        absoluteY: e.absoluteY,
        x: e.x,
        y: e.y,
        duration: e.duration
      };
      onTapAndHold(event);
    }).enabled(enabled);
    if (onTap) {
      const tapGesture = import_react_native_gesture_handler7.Gesture.Tap().onEnd((e) => {
        const event = {
          absoluteX: e.absoluteX,
          absoluteY: e.absoluteY,
          x: e.x,
          y: e.y,
          numberOfTaps: 1
        };
        onTap(event);
      }).enabled(enabled);
      return import_react_native_gesture_handler7.Gesture.Exclusive(holdGesture, tapGesture);
    }
    return holdGesture;
  }, [onTapAndHold, onTap, holdDuration, enabled]);
  return /* @__PURE__ */ import_react7.default.createElement(import_react_native_gesture_handler7.GestureDetector, { gesture }, children);
};
TapAndHoldGesture.displayName = "TapAndHoldGesture";

// src/gestures/basic-touch/TapCancelGesture.tsx
var import_react8 = __toESM(require("react"));
var import_react_native_gesture_handler8 = require("react-native-gesture-handler");
var TapCancelGesture = ({
  children,
  onTapCancel,
  onTapStart,
  maxDuration,
  enabled = true
}) => {
  const gesture = (0, import_react8.useMemo)(() => {
    let g = import_react_native_gesture_handler8.Gesture.Tap();
    if (maxDuration !== void 0) g = g.maxDuration(maxDuration);
    if (onTapStart) {
      g = g.onBegin((e) => {
        const event = {
          absoluteX: e.absoluteX,
          absoluteY: e.absoluteY,
          x: e.x,
          y: e.y
        };
        onTapStart(event);
      });
    }
    g = g.onTouchesCancelled(() => {
      onTapCancel({ absoluteX: 0, absoluteY: 0, x: 0, y: 0 });
    });
    return g.enabled(enabled);
  }, [onTapCancel, onTapStart, maxDuration, enabled]);
  return /* @__PURE__ */ import_react8.default.createElement(import_react_native_gesture_handler8.GestureDetector, { gesture }, children);
};
TapCancelGesture.displayName = "TapCancelGesture";

// src/gestures/basic-touch/PressForceGesture.tsx
var import_react9 = __toESM(require("react"));
var import_react_native_gesture_handler9 = require("react-native-gesture-handler");
var PressForceGesture = ({
  children,
  onPressForce,
  forceThreshold = 0.5,
  enabled = true
}) => {
  const gesture = (0, import_react9.useMemo)(() => {
    const g = import_react_native_gesture_handler9.Gesture.ForceTouch().minForce(forceThreshold).onStart((e) => {
      const event = {
        absoluteX: e.absoluteX,
        absoluteY: e.absoluteY,
        x: e.x,
        y: e.y,
        force: e.force
      };
      onPressForce(event);
    }).enabled(enabled);
    return g;
  }, [onPressForce, forceThreshold, enabled]);
  return /* @__PURE__ */ import_react9.default.createElement(import_react_native_gesture_handler9.GestureDetector, { gesture }, children);
};
PressForceGesture.displayName = "PressForceGesture";

// src/gestures/basic-touch/hooks/useTap.ts
var import_react10 = require("react");
var import_react_native_gesture_handler10 = require("react-native-gesture-handler");
function useTap(options) {
  const { onTap, numberOfTaps = 1, maxDuration, maxDistance, enabled = true } = options;
  return (0, import_react10.useMemo)(() => {
    let g = import_react_native_gesture_handler10.Gesture.Tap().numberOfTaps(numberOfTaps);
    if (maxDuration !== void 0) g = g.maxDuration(maxDuration);
    if (maxDistance !== void 0) g = g.maxDistance(maxDistance);
    g = g.onEnd((e) => {
      const event = { absoluteX: e.absoluteX, absoluteY: e.absoluteY, x: e.x, y: e.y, numberOfTaps };
      onTap(event);
    });
    return g.enabled(enabled);
  }, [onTap, numberOfTaps, maxDuration, maxDistance, enabled]);
}

// src/gestures/basic-touch/hooks/useDoubleTap.ts
var import_react11 = require("react");
var import_react_native_gesture_handler11 = require("react-native-gesture-handler");
function useDoubleTap(options) {
  const { onDoubleTap, maxDelay, maxDistance, enabled = true } = options;
  return (0, import_react11.useMemo)(() => {
    let g = import_react_native_gesture_handler11.Gesture.Tap().numberOfTaps(2);
    if (maxDelay !== void 0) g = g.maxDuration(maxDelay);
    if (maxDistance !== void 0) g = g.maxDistance(maxDistance);
    g = g.onEnd((e) => {
      const event = { absoluteX: e.absoluteX, absoluteY: e.absoluteY, x: e.x, y: e.y, numberOfTaps: 2 };
      onDoubleTap(event);
    });
    return g.enabled(enabled);
  }, [onDoubleTap, maxDelay, maxDistance, enabled]);
}

// src/gestures/basic-touch/hooks/useTripleTap.ts
var import_react12 = require("react");
var import_react_native_gesture_handler12 = require("react-native-gesture-handler");
function useTripleTap(options) {
  const { onTripleTap, maxDelay, maxDistance, enabled = true } = options;
  return (0, import_react12.useMemo)(() => {
    let g = import_react_native_gesture_handler12.Gesture.Tap().numberOfTaps(3);
    if (maxDelay !== void 0) g = g.maxDuration(maxDelay);
    if (maxDistance !== void 0) g = g.maxDistance(maxDistance);
    g = g.onEnd((e) => {
      const event = { absoluteX: e.absoluteX, absoluteY: e.absoluteY, x: e.x, y: e.y, numberOfTaps: 3 };
      onTripleTap(event);
    });
    return g.enabled(enabled);
  }, [onTripleTap, maxDelay, maxDistance, enabled]);
}

// src/gestures/basic-touch/hooks/useQuadTap.ts
var import_react13 = require("react");
var import_react_native_gesture_handler13 = require("react-native-gesture-handler");
function useQuadTap(options) {
  const { onQuadTap, maxDelay, maxDistance, enabled = true } = options;
  return (0, import_react13.useMemo)(() => {
    let g = import_react_native_gesture_handler13.Gesture.Tap().numberOfTaps(4);
    if (maxDelay !== void 0) g = g.maxDuration(maxDelay);
    if (maxDistance !== void 0) g = g.maxDistance(maxDistance);
    g = g.onEnd((e) => {
      const event = { absoluteX: e.absoluteX, absoluteY: e.absoluteY, x: e.x, y: e.y, numberOfTaps: 4 };
      onQuadTap(event);
    });
    return g.enabled(enabled);
  }, [onQuadTap, maxDelay, maxDistance, enabled]);
}

// src/gestures/basic-touch/hooks/useLongPress.ts
var import_react14 = require("react");
var import_react_native_gesture_handler14 = require("react-native-gesture-handler");
function useLongPress(options) {
  const { onLongPress, onPressIn, onPressOut, minDuration = 500, maxDistance, enabled = true } = options;
  return (0, import_react14.useMemo)(() => {
    let g = import_react_native_gesture_handler14.Gesture.LongPress().minDuration(minDuration);
    if (maxDistance !== void 0) g = g.maxDistance(maxDistance);
    if (onPressIn) {
      g = g.onStart((e) => {
        const event = { absoluteX: e.absoluteX, absoluteY: e.absoluteY, x: e.x, y: e.y, duration: e.duration };
        onPressIn(event);
      });
    }
    g = g.onEnd((e) => {
      const event = { absoluteX: e.absoluteX, absoluteY: e.absoluteY, x: e.x, y: e.y, duration: e.duration };
      onLongPress(event);
    });
    if (onPressOut) {
      g = g.onFinalize((e) => {
        const event = { absoluteX: e.absoluteX, absoluteY: e.absoluteY, x: e.x, y: e.y, duration: e.duration };
        onPressOut(event);
      });
    }
    return g.enabled(enabled);
  }, [onLongPress, onPressIn, onPressOut, minDuration, maxDistance, enabled]);
}

// src/gestures/basic-touch/hooks/useVeryLongPress.ts
var import_react15 = require("react");
var import_react_native_gesture_handler15 = require("react-native-gesture-handler");
function useVeryLongPress(options) {
  const { onVeryLongPress, onPressIn, onPressOut, minDuration = 1500, maxDistance, enabled = true } = options;
  return (0, import_react15.useMemo)(() => {
    let g = import_react_native_gesture_handler15.Gesture.LongPress().minDuration(minDuration);
    if (maxDistance !== void 0) g = g.maxDistance(maxDistance);
    if (onPressIn) {
      g = g.onStart((e) => {
        const event = { absoluteX: e.absoluteX, absoluteY: e.absoluteY, x: e.x, y: e.y, duration: e.duration };
        onPressIn(event);
      });
    }
    g = g.onEnd((e) => {
      const event = { absoluteX: e.absoluteX, absoluteY: e.absoluteY, x: e.x, y: e.y, duration: e.duration };
      onVeryLongPress(event);
    });
    if (onPressOut) {
      g = g.onFinalize((e) => {
        const event = { absoluteX: e.absoluteX, absoluteY: e.absoluteY, x: e.x, y: e.y, duration: e.duration };
        onPressOut(event);
      });
    }
    return g.enabled(enabled);
  }, [onVeryLongPress, onPressIn, onPressOut, minDuration, maxDistance, enabled]);
}

// src/gestures/basic-touch/hooks/useTapAndHold.ts
var import_react16 = require("react");
var import_react_native_gesture_handler16 = require("react-native-gesture-handler");
function useTapAndHold(options) {
  const { onTapAndHold, onTap, holdDuration = 500, enabled = true } = options;
  return (0, import_react16.useMemo)(() => {
    const holdGesture = import_react_native_gesture_handler16.Gesture.LongPress().minDuration(holdDuration).onEnd((e) => {
      const event = { absoluteX: e.absoluteX, absoluteY: e.absoluteY, x: e.x, y: e.y, duration: e.duration };
      onTapAndHold(event);
    }).enabled(enabled);
    if (onTap) {
      const tapGesture = import_react_native_gesture_handler16.Gesture.Tap().onEnd((e) => {
        const event = { absoluteX: e.absoluteX, absoluteY: e.absoluteY, x: e.x, y: e.y, numberOfTaps: 1 };
        onTap(event);
      }).enabled(enabled);
      return import_react_native_gesture_handler16.Gesture.Exclusive(holdGesture, tapGesture);
    }
    return holdGesture;
  }, [onTapAndHold, onTap, holdDuration, enabled]);
}

// src/gestures/basic-touch/hooks/useTapCancel.ts
var import_react17 = require("react");
var import_react_native_gesture_handler17 = require("react-native-gesture-handler");
function useTapCancel(options) {
  const { onTapCancel, onTapStart, maxDuration, enabled = true } = options;
  return (0, import_react17.useMemo)(() => {
    let g = import_react_native_gesture_handler17.Gesture.Tap();
    if (maxDuration !== void 0) g = g.maxDuration(maxDuration);
    if (onTapStart) {
      g = g.onBegin((e) => {
        const event = { absoluteX: e.absoluteX, absoluteY: e.absoluteY, x: e.x, y: e.y };
        onTapStart(event);
      });
    }
    g = g.onTouchesCancelled(() => {
      onTapCancel({ absoluteX: 0, absoluteY: 0, x: 0, y: 0 });
    });
    return g.enabled(enabled);
  }, [onTapCancel, onTapStart, maxDuration, enabled]);
}

// src/gestures/basic-touch/hooks/usePressForce.ts
var import_react18 = require("react");
var import_react_native_gesture_handler18 = require("react-native-gesture-handler");
function usePressForce(options) {
  const { onPressForce, forceThreshold = 0.5, enabled = true } = options;
  return (0, import_react18.useMemo)(() => {
    const g = import_react_native_gesture_handler18.Gesture.ForceTouch().minForce(forceThreshold).onStart((e) => {
      const event = { absoluteX: e.absoluteX, absoluteY: e.absoluteY, x: e.x, y: e.y, force: e.force };
      onPressForce(event);
    }).enabled(enabled);
    return g;
  }, [onPressForce, forceThreshold, enabled]);
}

// src/gestures/drag-pan/PanGesture.tsx
var import_react19 = __toESM(require("react"));
var import_react_native = require("react-native");
var PanGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react19.default.createElement(import_react_native.View, { ...rest }, children);
};
PanGesture.displayName = "PanGesture";

// src/gestures/drag-pan/DragGesture.tsx
var import_react20 = __toESM(require("react"));
var import_react_native2 = require("react-native");
var DragGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react20.default.createElement(import_react_native2.View, { ...rest }, children);
};
DragGesture.displayName = "DragGesture";

// src/gestures/drag-pan/DragAndDropGesture.tsx
var import_react21 = __toESM(require("react"));
var import_react_native3 = require("react-native");
var DragAndDropGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react21.default.createElement(import_react_native3.View, { ...rest }, children);
};
DragAndDropGesture.displayName = "DragAndDropGesture";

// src/gestures/drag-pan/SwipeUpGesture.tsx
var import_react22 = __toESM(require("react"));
var import_react_native4 = require("react-native");
var SwipeUpGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react22.default.createElement(import_react_native4.View, { ...rest }, children);
};
SwipeUpGesture.displayName = "SwipeUpGesture";

// src/gestures/drag-pan/SwipeDownGesture.tsx
var import_react23 = __toESM(require("react"));
var import_react_native5 = require("react-native");
var SwipeDownGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react23.default.createElement(import_react_native5.View, { ...rest }, children);
};
SwipeDownGesture.displayName = "SwipeDownGesture";

// src/gestures/drag-pan/SwipeLeftGesture.tsx
var import_react24 = __toESM(require("react"));
var import_react_native6 = require("react-native");
var SwipeLeftGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react24.default.createElement(import_react_native6.View, { ...rest }, children);
};
SwipeLeftGesture.displayName = "SwipeLeftGesture";

// src/gestures/drag-pan/SwipeRightGesture.tsx
var import_react25 = __toESM(require("react"));
var import_react_native7 = require("react-native");
var SwipeRightGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react25.default.createElement(import_react_native7.View, { ...rest }, children);
};
SwipeRightGesture.displayName = "SwipeRightGesture";

// src/gestures/drag-pan/EdgeSwipeGesture.tsx
var import_react26 = __toESM(require("react"));
var import_react_native8 = require("react-native");
var EdgeSwipeGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react26.default.createElement(import_react_native8.View, { ...rest }, children);
};
EdgeSwipeGesture.displayName = "EdgeSwipeGesture";

// src/gestures/drag-pan/CornerSwipeGesture.tsx
var import_react27 = __toESM(require("react"));
var import_react_native9 = require("react-native");
var CornerSwipeGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react27.default.createElement(import_react_native9.View, { ...rest }, children);
};
CornerSwipeGesture.displayName = "CornerSwipeGesture";

// src/gestures/drag-pan/DiagonalSwipeGesture.tsx
var import_react28 = __toESM(require("react"));
var import_react_native10 = require("react-native");
var DiagonalSwipeGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react28.default.createElement(import_react_native10.View, { ...rest }, children);
};
DiagonalSwipeGesture.displayName = "DiagonalSwipeGesture";

// src/gestures/drag-pan/CurvedSwipeGesture.tsx
var import_react29 = __toESM(require("react"));
var import_react_native11 = require("react-native");
var CurvedSwipeGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react29.default.createElement(import_react_native11.View, { ...rest }, children);
};
CurvedSwipeGesture.displayName = "CurvedSwipeGesture";

// src/gestures/drag-pan/CircularSwipeGesture.tsx
var import_react30 = __toESM(require("react"));
var import_react_native12 = require("react-native");
var CircularSwipeGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react30.default.createElement(import_react_native12.View, { ...rest }, children);
};
CircularSwipeGesture.displayName = "CircularSwipeGesture";

// src/gestures/drag-pan/hooks/usePan.ts
var import_react31 = require("react");
function usePan(options = {}) {
  const { enabled = true } = options;
  return (0, import_react31.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gestures/drag-pan/hooks/useDrag.ts
var import_react32 = require("react");
function useDrag(options = {}) {
  const { enabled = true } = options;
  return (0, import_react32.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gestures/drag-pan/hooks/useDragAndDrop.ts
var import_react33 = require("react");
function useDragAndDrop(options = {}) {
  const { enabled = true } = options;
  return (0, import_react33.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gestures/drag-pan/hooks/useSwipeUp.ts
var import_react34 = require("react");
function useSwipeUp(options = {}) {
  const { enabled = true } = options;
  return (0, import_react34.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gestures/drag-pan/hooks/useSwipeDown.ts
var import_react35 = require("react");
function useSwipeDown(options = {}) {
  const { enabled = true } = options;
  return (0, import_react35.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gestures/drag-pan/hooks/useSwipeLeft.ts
var import_react36 = require("react");
function useSwipeLeft(options = {}) {
  const { enabled = true } = options;
  return (0, import_react36.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gestures/drag-pan/hooks/useSwipeRight.ts
var import_react37 = require("react");
function useSwipeRight(options = {}) {
  const { enabled = true } = options;
  return (0, import_react37.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gestures/drag-pan/hooks/useEdgeSwipe.ts
var import_react38 = require("react");
function useEdgeSwipe(options = {}) {
  const { enabled = true } = options;
  return (0, import_react38.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gestures/drag-pan/hooks/useCornerSwipe.ts
var import_react39 = require("react");
function useCornerSwipe(options = {}) {
  const { enabled = true } = options;
  return (0, import_react39.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gestures/drag-pan/hooks/useDiagonalSwipe.ts
var import_react40 = require("react");
function useDiagonalSwipe(options = {}) {
  const { enabled = true } = options;
  return (0, import_react40.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gestures/drag-pan/hooks/useCurvedSwipe.ts
var import_react41 = require("react");
function useCurvedSwipe(options = {}) {
  const { enabled = true } = options;
  return (0, import_react41.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gestures/drag-pan/hooks/useCircularSwipe.ts
var import_react42 = require("react");
function useCircularSwipe(options = {}) {
  const { enabled = true } = options;
  return (0, import_react42.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gestures/multi-finger/TwoFingerTapGesture.tsx
var import_react43 = __toESM(require("react"));
var import_react_native13 = require("react-native");
var TwoFingerTapGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react43.default.createElement(import_react_native13.View, { ...rest }, children);
};
TwoFingerTapGesture.displayName = "TwoFingerTapGesture";

// src/gestures/multi-finger/ThreeFingerTapGesture.tsx
var import_react44 = __toESM(require("react"));
var import_react_native14 = require("react-native");
var ThreeFingerTapGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react44.default.createElement(import_react_native14.View, { ...rest }, children);
};
ThreeFingerTapGesture.displayName = "ThreeFingerTapGesture";

// src/gestures/multi-finger/FourFingerTapGesture.tsx
var import_react45 = __toESM(require("react"));
var import_react_native15 = require("react-native");
var FourFingerTapGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react45.default.createElement(import_react_native15.View, { ...rest }, children);
};
FourFingerTapGesture.displayName = "FourFingerTapGesture";

// src/gestures/multi-finger/TwoFingerSwipeGesture.tsx
var import_react46 = __toESM(require("react"));
var import_react_native16 = require("react-native");
var TwoFingerSwipeGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react46.default.createElement(import_react_native16.View, { ...rest }, children);
};
TwoFingerSwipeGesture.displayName = "TwoFingerSwipeGesture";

// src/gestures/multi-finger/ThreeFingerSwipeGesture.tsx
var import_react47 = __toESM(require("react"));
var import_react_native17 = require("react-native");
var ThreeFingerSwipeGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react47.default.createElement(import_react_native17.View, { ...rest }, children);
};
ThreeFingerSwipeGesture.displayName = "ThreeFingerSwipeGesture";

// src/gestures/multi-finger/MultiFingerDragGesture.tsx
var import_react48 = __toESM(require("react"));
var import_react_native18 = require("react-native");
var MultiFingerDragGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react48.default.createElement(import_react_native18.View, { ...rest }, children);
};
MultiFingerDragGesture.displayName = "MultiFingerDragGesture";

// src/gestures/multi-finger/FingerSpreadGesture.tsx
var import_react49 = __toESM(require("react"));
var import_react_native19 = require("react-native");
var FingerSpreadGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react49.default.createElement(import_react_native19.View, { ...rest }, children);
};
FingerSpreadGesture.displayName = "FingerSpreadGesture";

// src/gestures/multi-finger/FingerGatherGesture.tsx
var import_react50 = __toESM(require("react"));
var import_react_native20 = require("react-native");
var FingerGatherGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react50.default.createElement(import_react_native20.View, { ...rest }, children);
};
FingerGatherGesture.displayName = "FingerGatherGesture";

// src/gestures/multi-finger/hooks/useTwoFingerTap.ts
var import_react51 = require("react");
function useTwoFingerTap(options = {}) {
  const { enabled = true } = options;
  return (0, import_react51.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gestures/multi-finger/hooks/useThreeFingerTap.ts
var import_react52 = require("react");
function useThreeFingerTap(options = {}) {
  const { enabled = true } = options;
  return (0, import_react52.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gestures/multi-finger/hooks/useFourFingerTap.ts
var import_react53 = require("react");
function useFourFingerTap(options = {}) {
  const { enabled = true } = options;
  return (0, import_react53.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gestures/multi-finger/hooks/useTwoFingerSwipe.ts
var import_react54 = require("react");
function useTwoFingerSwipe(options = {}) {
  const { enabled = true } = options;
  return (0, import_react54.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gestures/multi-finger/hooks/useThreeFingerSwipe.ts
var import_react55 = require("react");
function useThreeFingerSwipe(options = {}) {
  const { enabled = true } = options;
  return (0, import_react55.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gestures/multi-finger/hooks/useMultiFingerDrag.ts
var import_react56 = require("react");
function useMultiFingerDrag(options = {}) {
  const { enabled = true } = options;
  return (0, import_react56.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gestures/multi-finger/hooks/useFingerSpread.ts
var import_react57 = require("react");
function useFingerSpread(options = {}) {
  const { enabled = true } = options;
  return (0, import_react57.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gestures/multi-finger/hooks/useFingerGather.ts
var import_react58 = require("react");
function useFingerGather(options = {}) {
  const { enabled = true } = options;
  return (0, import_react58.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gestures/transform/PinchGesture.tsx
var import_react59 = __toESM(require("react"));
var import_react_native21 = require("react-native");
var PinchGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react59.default.createElement(import_react_native21.View, { ...rest }, children);
};
PinchGesture.displayName = "PinchGesture";

// src/gestures/transform/RotationGesture.tsx
var import_react60 = __toESM(require("react"));
var import_react_native22 = require("react-native");
var RotationGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react60.default.createElement(import_react_native22.View, { ...rest }, children);
};
RotationGesture.displayName = "RotationGesture";

// src/gestures/transform/PinchRotateGesture.tsx
var import_react61 = __toESM(require("react"));
var import_react_native23 = require("react-native");
var PinchRotateGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react61.default.createElement(import_react_native23.View, { ...rest }, children);
};
PinchRotateGesture.displayName = "PinchRotateGesture";

// src/gestures/transform/StretchGesture.tsx
var import_react62 = __toESM(require("react"));
var import_react_native24 = require("react-native");
var StretchGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react62.default.createElement(import_react_native24.View, { ...rest }, children);
};
StretchGesture.displayName = "StretchGesture";

// src/gestures/transform/CompressGesture.tsx
var import_react63 = __toESM(require("react"));
var import_react_native25 = require("react-native");
var CompressGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react63.default.createElement(import_react_native25.View, { ...rest }, children);
};
CompressGesture.displayName = "CompressGesture";

// src/gestures/transform/hooks/usePinch.ts
var import_react64 = require("react");
function usePinch(options = {}) {
  const { enabled = true } = options;
  return (0, import_react64.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gestures/transform/hooks/useRotation.ts
var import_react65 = require("react");
function useRotation(options = {}) {
  const { enabled = true } = options;
  return (0, import_react65.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gestures/transform/hooks/usePinchRotate.ts
var import_react66 = require("react");
function usePinchRotate(options = {}) {
  const { enabled = true } = options;
  return (0, import_react66.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gestures/transform/hooks/useStretch.ts
var import_react67 = require("react");
function useStretch(options = {}) {
  const { enabled = true } = options;
  return (0, import_react67.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gestures/transform/hooks/useCompress.ts
var import_react68 = require("react");
function useCompress(options = {}) {
  const { enabled = true } = options;
  return (0, import_react68.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gestures/drawing/DrawLineGesture.tsx
var import_react69 = __toESM(require("react"));
var import_react_native26 = require("react-native");
var DrawLineGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react69.default.createElement(import_react_native26.View, { ...rest }, children);
};
DrawLineGesture.displayName = "DrawLineGesture";

// src/gestures/drawing/DrawCircleGesture.tsx
var import_react70 = __toESM(require("react"));
var import_react_native27 = require("react-native");
var DrawCircleGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react70.default.createElement(import_react_native27.View, { ...rest }, children);
};
DrawCircleGesture.displayName = "DrawCircleGesture";

// src/gestures/drawing/DrawSquareGesture.tsx
var import_react71 = __toESM(require("react"));
var import_react_native28 = require("react-native");
var DrawSquareGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react71.default.createElement(import_react_native28.View, { ...rest }, children);
};
DrawSquareGesture.displayName = "DrawSquareGesture";

// src/gestures/drawing/DrawTriangleGesture.tsx
var import_react72 = __toESM(require("react"));
var import_react_native29 = require("react-native");
var DrawTriangleGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react72.default.createElement(import_react_native29.View, { ...rest }, children);
};
DrawTriangleGesture.displayName = "DrawTriangleGesture";

// src/gestures/drawing/DrawStarGesture.tsx
var import_react73 = __toESM(require("react"));
var import_react_native30 = require("react-native");
var DrawStarGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react73.default.createElement(import_react_native30.View, { ...rest }, children);
};
DrawStarGesture.displayName = "DrawStarGesture";

// src/gestures/drawing/DrawLetterGesture.tsx
var import_react74 = __toESM(require("react"));
var import_react_native31 = require("react-native");
var DrawLetterGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react74.default.createElement(import_react_native31.View, { ...rest }, children);
};
DrawLetterGesture.displayName = "DrawLetterGesture";

// src/gestures/drawing/CustomShapeGesture.tsx
var import_react75 = __toESM(require("react"));
var import_react_native32 = require("react-native");
var CustomShapeGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react75.default.createElement(import_react_native32.View, { ...rest }, children);
};
CustomShapeGesture.displayName = "CustomShapeGesture";

// src/gestures/drawing/hooks/useDrawLine.ts
var import_react76 = require("react");
function useDrawLine(options = {}) {
  const { enabled = true } = options;
  return (0, import_react76.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gestures/drawing/hooks/useDrawCircle.ts
var import_react77 = require("react");
function useDrawCircle(options = {}) {
  const { enabled = true } = options;
  return (0, import_react77.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gestures/drawing/hooks/useDrawSquare.ts
var import_react78 = require("react");
function useDrawSquare(options = {}) {
  const { enabled = true } = options;
  return (0, import_react78.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gestures/drawing/hooks/useDrawTriangle.ts
var import_react79 = require("react");
function useDrawTriangle(options = {}) {
  const { enabled = true } = options;
  return (0, import_react79.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gestures/drawing/hooks/useDrawStar.ts
var import_react80 = require("react");
function useDrawStar(options = {}) {
  const { enabled = true } = options;
  return (0, import_react80.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gestures/drawing/hooks/useDrawLetter.ts
var import_react81 = require("react");
function useDrawLetter(options = {}) {
  const { enabled = true } = options;
  return (0, import_react81.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gestures/drawing/hooks/useCustomShape.ts
var import_react82 = require("react");
function useCustomShape(options = {}) {
  const { enabled = true } = options;
  return (0, import_react82.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gestures/sequences/TapSwipeSequence.tsx
var import_react83 = __toESM(require("react"));
var import_react_native33 = require("react-native");
var TapSwipeSequence = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react83.default.createElement(import_react_native33.View, { ...rest }, children);
};
TapSwipeSequence.displayName = "TapSwipeSequence";

// src/gestures/sequences/SwipeTapSequence.tsx
var import_react84 = __toESM(require("react"));
var import_react_native34 = require("react-native");
var SwipeTapSequence = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react84.default.createElement(import_react_native34.View, { ...rest }, children);
};
SwipeTapSequence.displayName = "SwipeTapSequence";

// src/gestures/sequences/TapHoldSequence.tsx
var import_react85 = __toESM(require("react"));
var import_react_native35 = require("react-native");
var TapHoldSequence = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react85.default.createElement(import_react_native35.View, { ...rest }, children);
};
TapHoldSequence.displayName = "TapHoldSequence";

// src/gestures/sequences/SwipeRotateSequence.tsx
var import_react86 = __toESM(require("react"));
var import_react_native36 = require("react-native");
var SwipeRotateSequence = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react86.default.createElement(import_react_native36.View, { ...rest }, children);
};
SwipeRotateSequence.displayName = "SwipeRotateSequence";

// src/gestures/sequences/TapTapSwipeSequence.tsx
var import_react87 = __toESM(require("react"));
var import_react_native37 = require("react-native");
var TapTapSwipeSequence = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react87.default.createElement(import_react_native37.View, { ...rest }, children);
};
TapTapSwipeSequence.displayName = "TapTapSwipeSequence";

// src/gestures/sequences/MultiStepGesture.tsx
var import_react88 = __toESM(require("react"));
var import_react_native38 = require("react-native");
var MultiStepGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react88.default.createElement(import_react_native38.View, { ...rest }, children);
};
MultiStepGesture.displayName = "MultiStepGesture";

// src/gestures/sequences/hooks/useTapSwipe.ts
var import_react89 = require("react");
function useTapSwipe(options = {}) {
  const { enabled = true } = options;
  return (0, import_react89.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gestures/sequences/hooks/useSwipeTap.ts
var import_react90 = require("react");
function useSwipeTap(options = {}) {
  const { enabled = true } = options;
  return (0, import_react90.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gestures/sequences/hooks/useTapHold.ts
var import_react91 = require("react");
function useTapHold(options = {}) {
  const { enabled = true } = options;
  return (0, import_react91.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gestures/sequences/hooks/useSwipeRotate.ts
var import_react92 = require("react");
function useSwipeRotate(options = {}) {
  const { enabled = true } = options;
  return (0, import_react92.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gestures/sequences/hooks/useTapTapSwipe.ts
var import_react93 = require("react");
function useTapTapSwipe(options = {}) {
  const { enabled = true } = options;
  return (0, import_react93.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gestures/sequences/hooks/useMultiStep.ts
var import_react94 = require("react");
function useMultiStep(options = {}) {
  const { enabled = true } = options;
  return (0, import_react94.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gestures/sensor/ShakeGesture.tsx
var import_react95 = __toESM(require("react"));
var import_react_native39 = require("react-native");
var ShakeGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react95.default.createElement(import_react_native39.View, { ...rest }, children);
};
ShakeGesture.displayName = "ShakeGesture";

// src/gestures/sensor/TiltLeftGesture.tsx
var import_react96 = __toESM(require("react"));
var import_react_native40 = require("react-native");
var TiltLeftGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react96.default.createElement(import_react_native40.View, { ...rest }, children);
};
TiltLeftGesture.displayName = "TiltLeftGesture";

// src/gestures/sensor/TiltRightGesture.tsx
var import_react97 = __toESM(require("react"));
var import_react_native41 = require("react-native");
var TiltRightGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react97.default.createElement(import_react_native41.View, { ...rest }, children);
};
TiltRightGesture.displayName = "TiltRightGesture";

// src/gestures/sensor/TiltForwardGesture.tsx
var import_react98 = __toESM(require("react"));
var import_react_native42 = require("react-native");
var TiltForwardGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react98.default.createElement(import_react_native42.View, { ...rest }, children);
};
TiltForwardGesture.displayName = "TiltForwardGesture";

// src/gestures/sensor/TiltBackwardGesture.tsx
var import_react99 = __toESM(require("react"));
var import_react_native43 = require("react-native");
var TiltBackwardGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react99.default.createElement(import_react_native43.View, { ...rest }, children);
};
TiltBackwardGesture.displayName = "TiltBackwardGesture";

// src/gestures/sensor/FlipGesture.tsx
var import_react100 = __toESM(require("react"));
var import_react_native44 = require("react-native");
var FlipGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react100.default.createElement(import_react_native44.View, { ...rest }, children);
};
FlipGesture.displayName = "FlipGesture";

// src/gestures/sensor/FaceUpDownGesture.tsx
var import_react101 = __toESM(require("react"));
var import_react_native45 = require("react-native");
var FaceUpDownGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react101.default.createElement(import_react_native45.View, { ...rest }, children);
};
FaceUpDownGesture.displayName = "FaceUpDownGesture";

// src/gestures/sensor/FreeFallGesture.tsx
var import_react102 = __toESM(require("react"));
var import_react_native46 = require("react-native");
var FreeFallGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react102.default.createElement(import_react_native46.View, { ...rest }, children);
};
FreeFallGesture.displayName = "FreeFallGesture";

// src/gestures/sensor/SwingGesture.tsx
var import_react103 = __toESM(require("react"));
var import_react_native47 = require("react-native");
var SwingGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react103.default.createElement(import_react_native47.View, { ...rest }, children);
};
SwingGesture.displayName = "SwingGesture";

// src/gestures/sensor/CircularMotionGesture.tsx
var import_react104 = __toESM(require("react"));
var import_react_native48 = require("react-native");
var CircularMotionGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react104.default.createElement(import_react_native48.View, { ...rest }, children);
};
CircularMotionGesture.displayName = "CircularMotionGesture";

// src/gestures/sensor/MultiAxisTiltGesture.tsx
var import_react105 = __toESM(require("react"));
var import_react_native49 = require("react-native");
var MultiAxisTiltGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react105.default.createElement(import_react_native49.View, { ...rest }, children);
};
MultiAxisTiltGesture.displayName = "MultiAxisTiltGesture";

// src/gestures/sensor/hooks/useShake.ts
var import_react106 = require("react");
function useShake(options = {}) {
  const { enabled = true } = options;
  return (0, import_react106.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gestures/sensor/hooks/useTiltLeft.ts
var import_react107 = require("react");
function useTiltLeft(options = {}) {
  const { enabled = true } = options;
  return (0, import_react107.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gestures/sensor/hooks/useTiltRight.ts
var import_react108 = require("react");
function useTiltRight(options = {}) {
  const { enabled = true } = options;
  return (0, import_react108.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gestures/sensor/hooks/useTiltForward.ts
var import_react109 = require("react");
function useTiltForward(options = {}) {
  const { enabled = true } = options;
  return (0, import_react109.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gestures/sensor/hooks/useTiltBackward.ts
var import_react110 = require("react");
function useTiltBackward(options = {}) {
  const { enabled = true } = options;
  return (0, import_react110.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gestures/sensor/hooks/useFlip.ts
var import_react111 = require("react");
function useFlip(options = {}) {
  const { enabled = true } = options;
  return (0, import_react111.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gestures/sensor/hooks/useFaceUpDown.ts
var import_react112 = require("react");
function useFaceUpDown(options = {}) {
  const { enabled = true } = options;
  return (0, import_react112.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gestures/sensor/hooks/useFreeFall.ts
var import_react113 = require("react");
function useFreeFall(options = {}) {
  const { enabled = true } = options;
  return (0, import_react113.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gestures/sensor/hooks/useSwing.ts
var import_react114 = require("react");
function useSwing(options = {}) {
  const { enabled = true } = options;
  return (0, import_react114.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gestures/sensor/hooks/useCircularMotion.ts
var import_react115 = require("react");
function useCircularMotion(options = {}) {
  const { enabled = true } = options;
  return (0, import_react115.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gestures/sensor/hooks/useMultiAxisTilt.ts
var import_react116 = require("react");
function useMultiAxisTilt(options = {}) {
  const { enabled = true } = options;
  return (0, import_react116.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gestures/proximity/HandNearGesture.tsx
var import_react117 = __toESM(require("react"));
var import_react_native50 = require("react-native");
var HandNearGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react117.default.createElement(import_react_native50.View, { ...rest }, children);
};
HandNearGesture.displayName = "HandNearGesture";

// src/gestures/proximity/HandAwayGesture.tsx
var import_react118 = __toESM(require("react"));
var import_react_native51 = require("react-native");
var HandAwayGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react118.default.createElement(import_react_native51.View, { ...rest }, children);
};
HandAwayGesture.displayName = "HandAwayGesture";

// src/gestures/proximity/ProximityTapGesture.tsx
var import_react119 = __toESM(require("react"));
var import_react_native52 = require("react-native");
var ProximityTapGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react119.default.createElement(import_react_native52.View, { ...rest }, children);
};
ProximityTapGesture.displayName = "ProximityTapGesture";

// src/gestures/proximity/HoverGesture.tsx
var import_react120 = __toESM(require("react"));
var import_react_native53 = require("react-native");
var HoverGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react120.default.createElement(import_react_native53.View, { ...rest }, children);
};
HoverGesture.displayName = "HoverGesture";

// src/gestures/proximity/hooks/useHandNear.ts
var import_react121 = require("react");
function useHandNear(options = {}) {
  const { enabled = true } = options;
  return (0, import_react121.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gestures/proximity/hooks/useHandAway.ts
var import_react122 = require("react");
function useHandAway(options = {}) {
  const { enabled = true } = options;
  return (0, import_react122.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gestures/proximity/hooks/useProximityTap.ts
var import_react123 = require("react");
function useProximityTap(options = {}) {
  const { enabled = true } = options;
  return (0, import_react123.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gestures/proximity/hooks/useHover.ts
var import_react124 = require("react");
function useHover(options = {}) {
  const { enabled = true } = options;
  return (0, import_react124.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gestures/air/HandWaveGesture.tsx
var import_react125 = __toESM(require("react"));
var import_react_native54 = require("react-native");
var HandWaveGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react125.default.createElement(import_react_native54.View, { ...rest }, children);
};
HandWaveGesture.displayName = "HandWaveGesture";

// src/gestures/air/AirSwipeGesture.tsx
var import_react126 = __toESM(require("react"));
var import_react_native55 = require("react-native");
var AirSwipeGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react126.default.createElement(import_react_native55.View, { ...rest }, children);
};
AirSwipeGesture.displayName = "AirSwipeGesture";

// src/gestures/air/AirTapGesture.tsx
var import_react127 = __toESM(require("react"));
var import_react_native56 = require("react-native");
var AirTapGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react127.default.createElement(import_react_native56.View, { ...rest }, children);
};
AirTapGesture.displayName = "AirTapGesture";

// src/gestures/air/AirPinchGesture.tsx
var import_react128 = __toESM(require("react"));
var import_react_native57 = require("react-native");
var AirPinchGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react128.default.createElement(import_react_native57.View, { ...rest }, children);
};
AirPinchGesture.displayName = "AirPinchGesture";

// src/gestures/air/AirRotateGesture.tsx
var import_react129 = __toESM(require("react"));
var import_react_native58 = require("react-native");
var AirRotateGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react129.default.createElement(import_react_native58.View, { ...rest }, children);
};
AirRotateGesture.displayName = "AirRotateGesture";

// src/gestures/air/AirDrawGesture.tsx
var import_react130 = __toESM(require("react"));
var import_react_native59 = require("react-native");
var AirDrawGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react130.default.createElement(import_react_native59.View, { ...rest }, children);
};
AirDrawGesture.displayName = "AirDrawGesture";

// src/gestures/air/MultiHandGesture.tsx
var import_react131 = __toESM(require("react"));
var import_react_native60 = require("react-native");
var MultiHandGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react131.default.createElement(import_react_native60.View, { ...rest }, children);
};
MultiHandGesture.displayName = "MultiHandGesture";

// src/gestures/air/hooks/useHandWave.ts
var import_react132 = require("react");
function useHandWave(options = {}) {
  const { enabled = true } = options;
  return (0, import_react132.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gestures/air/hooks/useAirSwipe.ts
var import_react133 = require("react");
function useAirSwipe(options = {}) {
  const { enabled = true } = options;
  return (0, import_react133.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gestures/air/hooks/useAirTap.ts
var import_react134 = require("react");
function useAirTap(options = {}) {
  const { enabled = true } = options;
  return (0, import_react134.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gestures/air/hooks/useAirPinch.ts
var import_react135 = require("react");
function useAirPinch(options = {}) {
  const { enabled = true } = options;
  return (0, import_react135.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gestures/air/hooks/useAirRotate.ts
var import_react136 = require("react");
function useAirRotate(options = {}) {
  const { enabled = true } = options;
  return (0, import_react136.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gestures/air/hooks/useAirDraw.ts
var import_react137 = require("react");
function useAirDraw(options = {}) {
  const { enabled = true } = options;
  return (0, import_react137.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gestures/air/hooks/useMultiHand.ts
var import_react138 = require("react");
function useMultiHand(options = {}) {
  const { enabled = true } = options;
  return (0, import_react138.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gestures/body/HeadNodGesture.tsx
var import_react139 = __toESM(require("react"));
var import_react_native61 = require("react-native");
var HeadNodGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react139.default.createElement(import_react_native61.View, { ...rest }, children);
};
HeadNodGesture.displayName = "HeadNodGesture";

// src/gestures/body/HeadShakeGesture.tsx
var import_react140 = __toESM(require("react"));
var import_react_native62 = require("react-native");
var HeadShakeGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react140.default.createElement(import_react_native62.View, { ...rest }, children);
};
HeadShakeGesture.displayName = "HeadShakeGesture";

// src/gestures/body/RaiseHandGesture.tsx
var import_react141 = __toESM(require("react"));
var import_react_native63 = require("react-native");
var RaiseHandGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react141.default.createElement(import_react_native63.View, { ...rest }, children);
};
RaiseHandGesture.displayName = "RaiseHandGesture";

// src/gestures/body/ClapGesture.tsx
var import_react142 = __toESM(require("react"));
var import_react_native64 = require("react-native");
var ClapGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react142.default.createElement(import_react_native64.View, { ...rest }, children);
};
ClapGesture.displayName = "ClapGesture";

// src/gestures/body/StepGesture.tsx
var import_react143 = __toESM(require("react"));
var import_react_native65 = require("react-native");
var StepGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react143.default.createElement(import_react_native65.View, { ...rest }, children);
};
StepGesture.displayName = "StepGesture";

// src/gestures/body/BodyPoseGesture.tsx
var import_react144 = __toESM(require("react"));
var import_react_native66 = require("react-native");
var BodyPoseGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react144.default.createElement(import_react_native66.View, { ...rest }, children);
};
BodyPoseGesture.displayName = "BodyPoseGesture";

// src/gestures/body/hooks/useHeadNod.ts
var import_react145 = require("react");
function useHeadNod(options = {}) {
  const { enabled = true } = options;
  return (0, import_react145.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gestures/body/hooks/useHeadShake.ts
var import_react146 = require("react");
function useHeadShake(options = {}) {
  const { enabled = true } = options;
  return (0, import_react146.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gestures/body/hooks/useRaiseHand.ts
var import_react147 = require("react");
function useRaiseHand(options = {}) {
  const { enabled = true } = options;
  return (0, import_react147.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gestures/body/hooks/useClap.ts
var import_react148 = require("react");
function useClap(options = {}) {
  const { enabled = true } = options;
  return (0, import_react148.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gestures/body/hooks/useStep.ts
var import_react149 = require("react");
function useStep(options = {}) {
  const { enabled = true } = options;
  return (0, import_react149.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gestures/body/hooks/useBodyPose.ts
var import_react150 = require("react");
function useBodyPose(options = {}) {
  const { enabled = true } = options;
  return (0, import_react150.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gestures/stylus/StylusTapGesture.tsx
var import_react151 = __toESM(require("react"));
var import_react_native67 = require("react-native");
var StylusTapGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react151.default.createElement(import_react_native67.View, { ...rest }, children);
};
StylusTapGesture.displayName = "StylusTapGesture";

// src/gestures/stylus/StylusPressureGesture.tsx
var import_react152 = __toESM(require("react"));
var import_react_native68 = require("react-native");
var StylusPressureGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react152.default.createElement(import_react_native68.View, { ...rest }, children);
};
StylusPressureGesture.displayName = "StylusPressureGesture";

// src/gestures/stylus/StylusTiltGesture.tsx
var import_react153 = __toESM(require("react"));
var import_react_native69 = require("react-native");
var StylusTiltGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react153.default.createElement(import_react_native69.View, { ...rest }, children);
};
StylusTiltGesture.displayName = "StylusTiltGesture";

// src/gestures/stylus/StylusHoverGesture.tsx
var import_react154 = __toESM(require("react"));
var import_react_native70 = require("react-native");
var StylusHoverGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react154.default.createElement(import_react_native70.View, { ...rest }, children);
};
StylusHoverGesture.displayName = "StylusHoverGesture";

// src/gestures/stylus/StylusDrawGesture.tsx
var import_react155 = __toESM(require("react"));
var import_react_native71 = require("react-native");
var StylusDrawGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react155.default.createElement(import_react_native71.View, { ...rest }, children);
};
StylusDrawGesture.displayName = "StylusDrawGesture";

// src/gestures/stylus/hooks/useStylusTap.ts
var import_react156 = require("react");
function useStylusTap(options = {}) {
  const { enabled = true } = options;
  return (0, import_react156.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gestures/stylus/hooks/useStylusPressure.ts
var import_react157 = require("react");
function useStylusPressure(options = {}) {
  const { enabled = true } = options;
  return (0, import_react157.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gestures/stylus/hooks/useStylusTilt.ts
var import_react158 = require("react");
function useStylusTilt(options = {}) {
  const { enabled = true } = options;
  return (0, import_react158.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gestures/stylus/hooks/useStylusHover.ts
var import_react159 = require("react");
function useStylusHover(options = {}) {
  const { enabled = true } = options;
  return (0, import_react159.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gestures/stylus/hooks/useStylusDraw.ts
var import_react160 = require("react");
function useStylusDraw(options = {}) {
  const { enabled = true } = options;
  return (0, import_react160.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gestures/hybrid/TouchSensorGesture.tsx
var import_react161 = __toESM(require("react"));
var import_react_native72 = require("react-native");
var TouchSensorGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react161.default.createElement(import_react_native72.View, { ...rest }, children);
};
TouchSensorGesture.displayName = "TouchSensorGesture";

// src/gestures/hybrid/TouchCameraGesture.tsx
var import_react162 = __toESM(require("react"));
var import_react_native73 = require("react-native");
var TouchCameraGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react162.default.createElement(import_react_native73.View, { ...rest }, children);
};
TouchCameraGesture.displayName = "TouchCameraGesture";

// src/gestures/hybrid/SensorCameraGesture.tsx
var import_react163 = __toESM(require("react"));
var import_react_native74 = require("react-native");
var SensorCameraGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react163.default.createElement(import_react_native74.View, { ...rest }, children);
};
SensorCameraGesture.displayName = "SensorCameraGesture";

// src/gestures/hybrid/TouchVoiceGesture.tsx
var import_react164 = __toESM(require("react"));
var import_react_native75 = require("react-native");
var TouchVoiceGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react164.default.createElement(import_react_native75.View, { ...rest }, children);
};
TouchVoiceGesture.displayName = "TouchVoiceGesture";

// src/gestures/hybrid/MultiDeviceGesture.tsx
var import_react165 = __toESM(require("react"));
var import_react_native76 = require("react-native");
var MultiDeviceGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react165.default.createElement(import_react_native76.View, { ...rest }, children);
};
MultiDeviceGesture.displayName = "MultiDeviceGesture";

// src/gestures/hybrid/hooks/useTouchSensor.ts
var import_react166 = require("react");
function useTouchSensor(options = {}) {
  const { enabled = true } = options;
  return (0, import_react166.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gestures/hybrid/hooks/useTouchCamera.ts
var import_react167 = require("react");
function useTouchCamera(options = {}) {
  const { enabled = true } = options;
  return (0, import_react167.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gestures/hybrid/hooks/useSensorCamera.ts
var import_react168 = require("react");
function useSensorCamera(options = {}) {
  const { enabled = true } = options;
  return (0, import_react168.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gestures/hybrid/hooks/useTouchVoice.ts
var import_react169 = require("react");
function useTouchVoice(options = {}) {
  const { enabled = true } = options;
  return (0, import_react169.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gestures/hybrid/hooks/useMultiDevice.ts
var import_react170 = require("react");
function useMultiDevice(options = {}) {
  const { enabled = true } = options;
  return (0, import_react170.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gestures/ai/GesturePrediction.tsx
var import_react171 = __toESM(require("react"));
var import_react_native77 = require("react-native");
var GesturePrediction = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react171.default.createElement(import_react_native77.View, { ...rest }, children);
};
GesturePrediction.displayName = "GesturePrediction";

// src/gestures/ai/AdaptiveGesture.tsx
var import_react172 = __toESM(require("react"));
var import_react_native78 = require("react-native");
var AdaptiveGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react172.default.createElement(import_react_native78.View, { ...rest }, children);
};
AdaptiveGesture.displayName = "AdaptiveGesture";

// src/gestures/ai/ContextAwareGesture.tsx
var import_react173 = __toESM(require("react"));
var import_react_native79 = require("react-native");
var ContextAwareGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react173.default.createElement(import_react_native79.View, { ...rest }, children);
};
ContextAwareGesture.displayName = "ContextAwareGesture";

// src/gestures/ai/EmotionBasedGesture.tsx
var import_react174 = __toESM(require("react"));
var import_react_native80 = require("react-native");
var EmotionBasedGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react174.default.createElement(import_react_native80.View, { ...rest }, children);
};
EmotionBasedGesture.displayName = "EmotionBasedGesture";

// src/gestures/ai/IntentBasedGesture.tsx
var import_react175 = __toESM(require("react"));
var import_react_native81 = require("react-native");
var IntentBasedGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react175.default.createElement(import_react_native81.View, { ...rest }, children);
};
IntentBasedGesture.displayName = "IntentBasedGesture";

// src/gestures/ai/hooks/useGesturePrediction.ts
var import_react176 = require("react");
function useGesturePrediction(options = {}) {
  const { enabled = true } = options;
  return (0, import_react176.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gestures/ai/hooks/useAdaptiveGesture.ts
var import_react177 = require("react");
function useAdaptiveGesture(options = {}) {
  const { enabled = true } = options;
  return (0, import_react177.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gestures/ai/hooks/useContextAware.ts
var import_react178 = require("react");
function useContextAware(options = {}) {
  const { enabled = true } = options;
  return (0, import_react178.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gestures/ai/hooks/useEmotionBased.ts
var import_react179 = require("react");
function useEmotionBased(options = {}) {
  const { enabled = true } = options;
  return (0, import_react179.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gestures/ai/hooks/useIntentBased.ts
var import_react180 = require("react");
function useIntentBased(options = {}) {
  const { enabled = true } = options;
  return (0, import_react180.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/core/GestureComposer.tsx
var import_react181 = __toESM(require("react"));
var import_react_native_gesture_handler20 = require("react-native-gesture-handler");

// src/utils/direction.ts
function detectSwipeDirection(translationX, translationY, velocityX, velocityY) {
  const absVX = Math.abs(velocityX);
  const absVY = Math.abs(velocityY);
  const absTX = Math.abs(translationX);
  const absTY = Math.abs(translationY);
  const isHorizontal = absVX + absVY > 0 ? absVX > absVY : absTX > absTY;
  if (isHorizontal) {
    const primary = absVX > 0 ? velocityX : translationX;
    return primary < 0 ? "left" : "right";
  } else {
    const primary = absVY > 0 ? velocityY : translationY;
    return primary < 0 ? "up" : "down";
  }
}
function matchesDirection(detected, desired) {
  if (!desired) return true;
  return detected === desired;
}
function magnitude(x, y) {
  return Math.sqrt(x * x + y * y);
}

// src/utils/compose.ts
var import_react_native_gesture_handler19 = require("react-native-gesture-handler");
function composeGestures(gestures, priority = "simultaneous") {
  if (gestures.length === 0) {
    throw new Error("[react-native-gesture-kit] composeGestures requires at least one gesture.");
  }
  if (gestures.length === 1) {
    return gestures[0];
  }
  switch (priority) {
    case "simultaneous":
      return import_react_native_gesture_handler19.Gesture.Simultaneous(...gestures);
    case "exclusive":
      return import_react_native_gesture_handler19.Gesture.Exclusive(...gestures);
    case "race":
      return import_react_native_gesture_handler19.Gesture.Race(...gestures);
    default:
      return import_react_native_gesture_handler19.Gesture.Simultaneous(...gestures);
  }
}

// src/core/GestureComposer.tsx
function toFlingDirectionFlag(dir) {
  const Directions = {
    RIGHT: 1,
    LEFT: 2,
    UP: 4,
    DOWN: 8
  };
  switch (dir) {
    case "right":
      return Directions.RIGHT;
    case "left":
      return Directions.LEFT;
    case "up":
      return Directions.UP;
    case "down":
      return Directions.DOWN;
    default:
      return Directions.RIGHT | Directions.LEFT | Directions.UP | Directions.DOWN;
  }
}
var GestureComposer = ({
  children,
  enabled = true,
  priority = "simultaneous",
  // Gesture flags
  tap,
  doubleTap,
  longPress,
  swipe,
  pan,
  pinch,
  rotate,
  fling,
  // Callbacks
  onTap,
  onDoubleTap,
  onLongPress,
  onSwipe,
  onPanStart,
  onPanMove,
  onPanEnd,
  onPinchStart,
  onPinch,
  onPinchEnd,
  onRotationStart,
  onRotation,
  onRotationEnd,
  onFling
}) => {
  const composedGesture = (0, import_react181.useMemo)(() => {
    const gestures = [];
    if (tap && onTap) {
      const g = import_react_native_gesture_handler20.Gesture.Tap().onEnd((e) => {
        const event = {
          absoluteX: e.absoluteX,
          absoluteY: e.absoluteY,
          x: e.x,
          y: e.y,
          numberOfTaps: 1
        };
        onTap(event);
      });
      gestures.push(g);
    }
    if (doubleTap && onDoubleTap) {
      const g = import_react_native_gesture_handler20.Gesture.Tap().numberOfTaps(2).onEnd((e) => {
        const event = {
          absoluteX: e.absoluteX,
          absoluteY: e.absoluteY,
          x: e.x,
          y: e.y,
          numberOfTaps: 2
        };
        onDoubleTap(event);
      });
      gestures.push(g);
    }
    if (longPress && onLongPress) {
      const g = import_react_native_gesture_handler20.Gesture.LongPress().onEnd((e) => {
        const event = {
          absoluteX: e.absoluteX,
          absoluteY: e.absoluteY,
          x: e.x,
          y: e.y,
          duration: e.duration
        };
        onLongPress(event);
      });
      gestures.push(g);
    }
    if (swipe && onSwipe) {
      const desiredDirection = typeof swipe === "string" ? swipe : void 0;
      const SWIPE_THRESHOLD = 50;
      const VELOCITY_THRESHOLD = 300;
      const g = import_react_native_gesture_handler20.Gesture.Pan().onEnd((e) => {
        const vel = magnitude(e.velocityX, e.velocityY);
        const dist = magnitude(e.translationX, e.translationY);
        if (dist >= SWIPE_THRESHOLD && vel >= VELOCITY_THRESHOLD) {
          const direction = detectSwipeDirection(
            e.translationX,
            e.translationY,
            e.velocityX,
            e.velocityY
          );
          if (matchesDirection(direction, desiredDirection)) {
            const event = {
              absoluteX: e.absoluteX,
              absoluteY: e.absoluteY,
              x: e.x,
              y: e.y,
              direction,
              velocity: vel,
              distance: dist
            };
            onSwipe(event);
          }
        }
      });
      gestures.push(g);
    }
    if (pan && (onPanStart || onPanMove || onPanEnd)) {
      let g = import_react_native_gesture_handler20.Gesture.Pan();
      if (onPanStart) {
        g = g.onStart((e) => {
          const event = {
            absoluteX: e.absoluteX,
            absoluteY: e.absoluteY,
            x: e.x,
            y: e.y,
            translationX: e.translationX,
            translationY: e.translationY,
            velocityX: e.velocityX,
            velocityY: e.velocityY
          };
          onPanStart(event);
        });
      }
      if (onPanMove) {
        g = g.onUpdate((e) => {
          const event = {
            absoluteX: e.absoluteX,
            absoluteY: e.absoluteY,
            x: e.x,
            y: e.y,
            translationX: e.translationX,
            translationY: e.translationY,
            velocityX: e.velocityX,
            velocityY: e.velocityY
          };
          onPanMove(event);
        });
      }
      if (onPanEnd) {
        g = g.onEnd((e) => {
          const event = {
            absoluteX: e.absoluteX,
            absoluteY: e.absoluteY,
            x: e.x,
            y: e.y,
            translationX: e.translationX,
            translationY: e.translationY,
            velocityX: e.velocityX,
            velocityY: e.velocityY
          };
          onPanEnd(event);
        });
      }
      gestures.push(g);
    }
    if (pinch && (onPinchStart || onPinch || onPinchEnd)) {
      let g = import_react_native_gesture_handler20.Gesture.Pinch();
      if (onPinchStart) {
        g = g.onStart((e) => {
          const event = {
            absoluteX: e.focalX,
            absoluteY: e.focalY,
            x: e.focalX,
            y: e.focalY,
            scale: e.scale,
            velocity: e.velocity,
            focalX: e.focalX,
            focalY: e.focalY
          };
          onPinchStart(event);
        });
      }
      if (onPinch) {
        g = g.onUpdate((e) => {
          const event = {
            absoluteX: e.focalX,
            absoluteY: e.focalY,
            x: e.focalX,
            y: e.focalY,
            scale: e.scale,
            velocity: e.velocity,
            focalX: e.focalX,
            focalY: e.focalY
          };
          onPinch(event);
        });
      }
      if (onPinchEnd) {
        g = g.onEnd((e) => {
          const event = {
            absoluteX: e.focalX,
            absoluteY: e.focalY,
            x: e.focalX,
            y: e.focalY,
            scale: e.scale,
            velocity: e.velocity,
            focalX: e.focalX,
            focalY: e.focalY
          };
          onPinchEnd(event);
        });
      }
      gestures.push(g);
    }
    if (rotate && (onRotationStart || onRotation || onRotationEnd)) {
      let g = import_react_native_gesture_handler20.Gesture.Rotation();
      if (onRotationStart) {
        g = g.onStart((e) => {
          const event = {
            absoluteX: e.anchorX,
            absoluteY: e.anchorY,
            x: e.anchorX,
            y: e.anchorY,
            rotation: e.rotation,
            velocity: e.velocity,
            anchorX: e.anchorX,
            anchorY: e.anchorY
          };
          onRotationStart(event);
        });
      }
      if (onRotation) {
        g = g.onUpdate((e) => {
          const event = {
            absoluteX: e.anchorX,
            absoluteY: e.anchorY,
            x: e.anchorX,
            y: e.anchorY,
            rotation: e.rotation,
            velocity: e.velocity,
            anchorX: e.anchorX,
            anchorY: e.anchorY
          };
          onRotation(event);
        });
      }
      if (onRotationEnd) {
        g = g.onEnd((e) => {
          const event = {
            absoluteX: e.anchorX,
            absoluteY: e.anchorY,
            x: e.anchorX,
            y: e.anchorY,
            rotation: e.rotation,
            velocity: e.velocity,
            anchorX: e.anchorX,
            anchorY: e.anchorY
          };
          onRotationEnd(event);
        });
      }
      gestures.push(g);
    }
    if (fling && onFling) {
      const flingDir = typeof fling === "string" ? fling : void 0;
      const dirFlag = toFlingDirectionFlag(flingDir);
      const g = import_react_native_gesture_handler20.Gesture.Fling().direction(dirFlag).onEnd((e) => {
        const event = {
          absoluteX: e.absoluteX,
          absoluteY: e.absoluteY,
          x: e.x,
          y: e.y,
          direction: flingDir || "right"
        };
        onFling(event);
      });
      gestures.push(g);
    }
    if (gestures.length === 0) {
      return import_react_native_gesture_handler20.Gesture.Tap().enabled(false);
    }
    const composed = composeGestures(gestures, priority);
    if (!enabled) {
      return composed.enabled(false);
    }
    return composed;
  }, [
    enabled,
    priority,
    tap,
    doubleTap,
    longPress,
    swipe,
    pan,
    pinch,
    rotate,
    fling,
    onTap,
    onDoubleTap,
    onLongPress,
    onSwipe,
    onPanStart,
    onPanMove,
    onPanEnd,
    onPinchStart,
    onPinch,
    onPinchEnd,
    onRotationStart,
    onRotation,
    onRotationEnd,
    onFling
  ]);
  return /* @__PURE__ */ import_react181.default.createElement(import_react_native_gesture_handler20.GestureDetector, { gesture: composedGesture }, children);
};
GestureComposer.displayName = "Gesture";

// src/core/createGestureComponent.tsx
var import_react182 = __toESM(require("react"));
var import_react_native_gesture_handler21 = require("react-native-gesture-handler");
function createGestureComponent(config) {
  const GestureComponent = (props) => {
    const { children, enabled = true, ...gestureProps } = props;
    const gesture = (0, import_react182.useMemo)(() => {
      const g = config.createGesture(props);
      if (!enabled) {
        return g.enabled(false);
      }
      return g;
    }, [enabled, ...Object.values(gestureProps)]);
    return /* @__PURE__ */ import_react182.default.createElement(import_react_native_gesture_handler21.GestureDetector, { gesture }, children);
  };
  GestureComponent.displayName = config.name;
  return GestureComponent;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AdaptiveGesture,
  AirDrawGesture,
  AirPinchGesture,
  AirRotateGesture,
  AirSwipeGesture,
  AirTapGesture,
  BodyPoseGesture,
  CircularMotionGesture,
  CircularSwipeGesture,
  ClapGesture,
  CompressGesture,
  ContextAwareGesture,
  CornerSwipeGesture,
  CurvedSwipeGesture,
  CustomShapeGesture,
  DiagonalSwipeGesture,
  DoubleTapGesture,
  DragAndDropGesture,
  DragGesture,
  DrawCircleGesture,
  DrawLetterGesture,
  DrawLineGesture,
  DrawSquareGesture,
  DrawStarGesture,
  DrawTriangleGesture,
  EdgeSwipeGesture,
  EmotionBasedGesture,
  FaceUpDownGesture,
  FingerGatherGesture,
  FingerSpreadGesture,
  FlipGesture,
  FourFingerTapGesture,
  FreeFallGesture,
  Gesture,
  GestureComposer,
  GesturePrediction,
  GestureState,
  HandAwayGesture,
  HandNearGesture,
  HandWaveGesture,
  HeadNodGesture,
  HeadShakeGesture,
  HoverGesture,
  IntentBasedGesture,
  LongPressGesture,
  MultiAxisTiltGesture,
  MultiDeviceGesture,
  MultiFingerDragGesture,
  MultiHandGesture,
  MultiStepGesture,
  PanGesture,
  PinchGesture,
  PinchRotateGesture,
  PressForceGesture,
  ProximityTapGesture,
  QuadTapGesture,
  RaiseHandGesture,
  RotationGesture,
  SensorCameraGesture,
  ShakeGesture,
  StepGesture,
  StretchGesture,
  StylusDrawGesture,
  StylusHoverGesture,
  StylusPressureGesture,
  StylusTapGesture,
  StylusTiltGesture,
  SwingGesture,
  SwipeDownGesture,
  SwipeLeftGesture,
  SwipeRightGesture,
  SwipeRotateSequence,
  SwipeTapSequence,
  SwipeUpGesture,
  TapAndHoldGesture,
  TapCancelGesture,
  TapGesture,
  TapHoldSequence,
  TapSwipeSequence,
  TapTapSwipeSequence,
  ThreeFingerSwipeGesture,
  ThreeFingerTapGesture,
  TiltBackwardGesture,
  TiltForwardGesture,
  TiltLeftGesture,
  TiltRightGesture,
  TouchCameraGesture,
  TouchSensorGesture,
  TouchVoiceGesture,
  TripleTapGesture,
  TwoFingerSwipeGesture,
  TwoFingerTapGesture,
  VeryLongPressGesture,
  composeGestures,
  createGestureComponent,
  detectSwipeDirection,
  magnitude,
  matchesDirection,
  useAdaptiveGesture,
  useAirDraw,
  useAirPinch,
  useAirRotate,
  useAirSwipe,
  useAirTap,
  useBodyPose,
  useCircularMotion,
  useCircularSwipe,
  useClap,
  useCompress,
  useContextAware,
  useCornerSwipe,
  useCurvedSwipe,
  useCustomShape,
  useDiagonalSwipe,
  useDoubleTap,
  useDrag,
  useDragAndDrop,
  useDrawCircle,
  useDrawLetter,
  useDrawLine,
  useDrawSquare,
  useDrawStar,
  useDrawTriangle,
  useEdgeSwipe,
  useEmotionBased,
  useFaceUpDown,
  useFingerGather,
  useFingerSpread,
  useFlip,
  useFourFingerTap,
  useFreeFall,
  useGesturePrediction,
  useHandAway,
  useHandNear,
  useHandWave,
  useHeadNod,
  useHeadShake,
  useHover,
  useIntentBased,
  useLongPress,
  useMultiAxisTilt,
  useMultiDevice,
  useMultiFingerDrag,
  useMultiHand,
  useMultiStep,
  usePan,
  usePinch,
  usePinchRotate,
  usePressForce,
  useProximityTap,
  useQuadTap,
  useRaiseHand,
  useRotation,
  useSensorCamera,
  useShake,
  useStep,
  useStretch,
  useStylusDraw,
  useStylusHover,
  useStylusPressure,
  useStylusTap,
  useStylusTilt,
  useSwing,
  useSwipeDown,
  useSwipeLeft,
  useSwipeRight,
  useSwipeRotate,
  useSwipeTap,
  useSwipeUp,
  useTap,
  useTapAndHold,
  useTapCancel,
  useTapHold,
  useTapSwipe,
  useTapTapSwipe,
  useThreeFingerSwipe,
  useThreeFingerTap,
  useTiltBackward,
  useTiltForward,
  useTiltLeft,
  useTiltRight,
  useTouchCamera,
  useTouchSensor,
  useTouchVoice,
  useTripleTap,
  useTwoFingerSwipe,
  useTwoFingerTap,
  useVeryLongPress
});
