"use strict";
/**
 * usePinch — Hook that returns a configured Pinch gesture.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePinch = usePinch;
const react_1 = require("react");
const react_native_gesture_handler_1 = require("react-native-gesture-handler");
function toPinchEvent(e) {
    return {
        absoluteX: e.focalX, absoluteY: e.focalY,
        x: e.focalX, y: e.focalY,
        scale: e.scale, velocity: e.velocity,
        focalX: e.focalX, focalY: e.focalY,
    };
}
function usePinch(options) {
    const { onPinchStart, onPinch, onPinchEnd, enabled = true } = options;
    return (0, react_1.useMemo)(() => {
        let g = react_native_gesture_handler_1.Gesture.Pinch();
        if (onPinchStart)
            g = g.onStart((e) => onPinchStart(toPinchEvent(e)));
        if (onPinch)
            g = g.onUpdate((e) => onPinch(toPinchEvent(e)));
        if (onPinchEnd)
            g = g.onEnd((e) => onPinchEnd(toPinchEvent(e)));
        return g.enabled(enabled);
    }, [onPinchStart, onPinch, onPinchEnd, enabled]);
}
//# sourceMappingURL=usePinch.js.map