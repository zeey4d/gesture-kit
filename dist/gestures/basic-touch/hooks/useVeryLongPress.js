"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useVeryLongPress = useVeryLongPress;
/** useVeryLongPress — Hook for very long press (default 1500ms). */
const react_1 = require("react");
const react_native_gesture_handler_1 = require("react-native-gesture-handler");
function useVeryLongPress(options) {
    const { onVeryLongPress, onPressIn, onPressOut, minDuration = 1500, maxDistance, enabled = true } = options;
    return (0, react_1.useMemo)(() => {
        let g = react_native_gesture_handler_1.Gesture.LongPress().minDuration(minDuration);
        if (maxDistance !== undefined)
            g = g.maxDistance(maxDistance);
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
//# sourceMappingURL=useVeryLongPress.js.map