"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTap = useTap;
/** useTap — Hook that returns a configured Tap gesture. */
const react_1 = require("react");
const react_native_gesture_handler_1 = require("react-native-gesture-handler");
function useTap(options) {
    const { onTap, numberOfTaps = 1, maxDuration, maxDistance, enabled = true } = options;
    return (0, react_1.useMemo)(() => {
        let g = react_native_gesture_handler_1.Gesture.Tap().numberOfTaps(numberOfTaps);
        if (maxDuration !== undefined)
            g = g.maxDuration(maxDuration);
        if (maxDistance !== undefined)
            g = g.maxDistance(maxDistance);
        g = g.onEnd((e) => {
            const event = { absoluteX: e.absoluteX, absoluteY: e.absoluteY, x: e.x, y: e.y, numberOfTaps };
            onTap(event);
        });
        return g.enabled(enabled);
    }, [onTap, numberOfTaps, maxDuration, maxDistance, enabled]);
}
//# sourceMappingURL=useTap.js.map