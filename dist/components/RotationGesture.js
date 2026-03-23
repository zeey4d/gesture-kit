"use strict";
/**
 * RotationGesture — A component that detects two-finger rotation gestures.
 *
 * @example
 * ```tsx
 * <RotationGesture onRotation={(e) => console.log('Rotation:', e.rotation)}>
 *   <View style={styles.rotatable} />
 * </RotationGesture>
 * ```
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.RotationGesture = void 0;
const react_1 = __importStar(require("react"));
const react_native_gesture_handler_1 = require("react-native-gesture-handler");
/** Map RNGH Rotation event to our RotationEvent */
function toRotationEvent(e) {
    return {
        absoluteX: e.anchorX,
        absoluteY: e.anchorY,
        x: e.anchorX,
        y: e.anchorY,
        rotation: e.rotation,
        velocity: e.velocity,
        anchorX: e.anchorX,
        anchorY: e.anchorY,
    };
}
const RotationGesture = ({ children, onRotationStart, onRotation, onRotationEnd, enabled = true, }) => {
    const gesture = (0, react_1.useMemo)(() => {
        let g = react_native_gesture_handler_1.Gesture.Rotation();
        if (onRotationStart) {
            g = g.onStart((e) => onRotationStart(toRotationEvent(e)));
        }
        if (onRotation) {
            g = g.onUpdate((e) => onRotation(toRotationEvent(e)));
        }
        if (onRotationEnd) {
            g = g.onEnd((e) => onRotationEnd(toRotationEvent(e)));
        }
        return g.enabled(enabled);
    }, [onRotationStart, onRotation, onRotationEnd, enabled]);
    return (<react_native_gesture_handler_1.GestureDetector gesture={gesture}>
      {children}
    </react_native_gesture_handler_1.GestureDetector>);
};
exports.RotationGesture = RotationGesture;
exports.RotationGesture.displayName = 'RotationGesture';
//# sourceMappingURL=RotationGesture.js.map