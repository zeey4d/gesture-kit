"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTapCancel = useTapCancel;
/** useTapCancel — Hook for detecting cancelled taps. */
const react_1 = require("react");
const react_native_gesture_handler_1 = require("react-native-gesture-handler");
function useTapCancel(options) {
    const { onTapCancel, onTapStart, maxDuration, enabled = true } = options;
    return (0, react_1.useMemo)(() => {
        let g = react_native_gesture_handler_1.Gesture.Tap();
        if (maxDuration !== undefined)
            g = g.maxDuration(maxDuration);
        if (onTapStart) {
            g = g.onBegin((e) => {
                const event = { absoluteX: e.absoluteX, absoluteY: e.absoluteY, x: e.x, y: e.y };
                onTapStart(event);
            });
        }
        g = g.onTouchesCancelled(() => {
            onTapCancel({ absoluteX: 0, absoluteY: 0, x: 0, y: 0 });
        });
        return g.enabled(enabled);
    }, [onTapCancel, onTapStart, maxDuration, enabled]);
}
//# sourceMappingURL=useTapCancel.js.map