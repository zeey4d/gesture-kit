"use strict";
/**
 * useLongPress — Hook that returns a configured LongPress gesture.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.useLongPress = useLongPress;
const react_1 = require("react");
const react_native_gesture_handler_1 = require("react-native-gesture-handler");
function useLongPress(options) {
    const { onLongPress, onPressIn, onPressOut, minDuration = 500, maxDistance, enabled = true, } = options;
    return (0, react_1.useMemo)(() => {
        let g = react_native_gesture_handler_1.Gesture.LongPress().minDuration(minDuration);
        if (maxDistance !== undefined)
            g = g.maxDistance(maxDistance);
        if (onPressIn) {
            g = g.onStart((e) => {
                const event = {
                    absoluteX: e.absoluteX, absoluteY: e.absoluteY,
                    x: e.x, y: e.y, duration: e.duration,
                };
                onPressIn(event);
            });
        }
        g = g.onEnd((e) => {
            const event = {
                absoluteX: e.absoluteX, absoluteY: e.absoluteY,
                x: e.x, y: e.y, duration: e.duration,
            };
            onLongPress(event);
        });
        if (onPressOut) {
            g = g.onFinalize((e) => {
                const event = {
                    absoluteX: e.absoluteX, absoluteY: e.absoluteY,
                    x: e.x, y: e.y, duration: e.duration,
                };
                onPressOut(event);
            });
        }
        return g.enabled(enabled);
    }, [onLongPress, onPressIn, onPressOut, minDuration, maxDistance, enabled]);
}
//# sourceMappingURL=useLongPress.js.map