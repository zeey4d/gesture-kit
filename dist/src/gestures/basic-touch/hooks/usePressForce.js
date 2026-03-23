"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePressForce = usePressForce;
/** usePressForce — Hook for force/pressure touch. */
const react_1 = require("react");
const react_native_gesture_handler_1 = require("react-native-gesture-handler");
function usePressForce(options) {
    const { onPressForce, forceThreshold = 0.5, enabled = true } = options;
    return (0, react_1.useMemo)(() => {
        const g = react_native_gesture_handler_1.Gesture.ForceTouch()
            .minForce(forceThreshold)
            .onStart((e) => {
            const event = { absoluteX: e.absoluteX, absoluteY: e.absoluteY, x: e.x, y: e.y, force: e.force };
            onPressForce(event);
        })
            .enabled(enabled);
        return g;
    }, [onPressForce, forceThreshold, enabled]);
}
//# sourceMappingURL=usePressForce.js.map