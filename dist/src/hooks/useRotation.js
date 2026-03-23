"use strict";
/**
 * useRotation — Hook that returns a configured Rotation gesture.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.useRotation = useRotation;
const react_1 = require("react");
const react_native_gesture_handler_1 = require("react-native-gesture-handler");
function toRotationEvent(e) {
    return {
        absoluteX: e.anchorX, absoluteY: e.anchorY,
        x: e.anchorX, y: e.anchorY,
        rotation: e.rotation, velocity: e.velocity,
        anchorX: e.anchorX, anchorY: e.anchorY,
    };
}
function useRotation(options) {
    const { onRotationStart, onRotation, onRotationEnd, enabled = true } = options;
    return (0, react_1.useMemo)(() => {
        let g = react_native_gesture_handler_1.Gesture.Rotation();
        if (onRotationStart)
            g = g.onStart((e) => onRotationStart(toRotationEvent(e)));
        if (onRotation)
            g = g.onUpdate((e) => onRotation(toRotationEvent(e)));
        if (onRotationEnd)
            g = g.onEnd((e) => onRotationEnd(toRotationEvent(e)));
        return g.enabled(enabled);
    }, [onRotationStart, onRotation, onRotationEnd, enabled]);
}
//# sourceMappingURL=useRotation.js.map