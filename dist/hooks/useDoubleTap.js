"use strict";
/**
 * useDoubleTap — Hook that returns a configured DoubleTap gesture.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDoubleTap = useDoubleTap;
const react_1 = require("react");
const react_native_gesture_handler_1 = require("react-native-gesture-handler");
function useDoubleTap(options) {
    const { onDoubleTap, maxDelay, maxDistance, enabled = true } = options;
    return (0, react_1.useMemo)(() => {
        let g = react_native_gesture_handler_1.Gesture.Tap().numberOfTaps(2);
        if (maxDelay !== undefined)
            g = g.maxDelay(maxDelay);
        if (maxDistance !== undefined)
            g = g.maxDistance(maxDistance);
        g = g.onEnd((e) => {
            const event = {
                absoluteX: e.absoluteX,
                absoluteY: e.absoluteY,
                x: e.x,
                y: e.y,
                numberOfTaps: 2,
            };
            onDoubleTap(event);
        });
        return g.enabled(enabled);
    }, [onDoubleTap, maxDelay, maxDistance, enabled]);
}
//# sourceMappingURL=useDoubleTap.js.map