"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useQuadTap = useQuadTap;
/** useQuadTap — Hook that returns a configured QuadTap gesture. */
const react_1 = require("react");
const react_native_gesture_handler_1 = require("react-native-gesture-handler");
function useQuadTap(options) {
    const { onQuadTap, maxDelay, maxDistance, enabled = true } = options;
    return (0, react_1.useMemo)(() => {
        let g = react_native_gesture_handler_1.Gesture.Tap().numberOfTaps(4);
        if (maxDelay !== undefined)
            g = g.maxDuration(maxDelay);
        if (maxDistance !== undefined)
            g = g.maxDistance(maxDistance);
        g = g.onEnd((e) => {
            const event = { absoluteX: e.absoluteX, absoluteY: e.absoluteY, x: e.x, y: e.y, numberOfTaps: 4 };
            onQuadTap(event);
        });
        return g.enabled(enabled);
    }, [onQuadTap, maxDelay, maxDistance, enabled]);
}
//# sourceMappingURL=useQuadTap.js.map