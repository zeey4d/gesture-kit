"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTripleTap = useTripleTap;
/** useTripleTap — Hook that returns a configured TripleTap gesture. */
const react_1 = require("react");
const react_native_gesture_handler_1 = require("react-native-gesture-handler");
function useTripleTap(options) {
    const { onTripleTap, maxDelay, maxDistance, enabled = true } = options;
    return (0, react_1.useMemo)(() => {
        let g = react_native_gesture_handler_1.Gesture.Tap().numberOfTaps(3);
        if (maxDelay !== undefined)
            g = g.maxDuration(maxDelay);
        if (maxDistance !== undefined)
            g = g.maxDistance(maxDistance);
        g = g.onEnd((e) => {
            const event = { absoluteX: e.absoluteX, absoluteY: e.absoluteY, x: e.x, y: e.y, numberOfTaps: 3 };
            onTripleTap(event);
        });
        return g.enabled(enabled);
    }, [onTripleTap, maxDelay, maxDistance, enabled]);
}
//# sourceMappingURL=useTripleTap.js.map