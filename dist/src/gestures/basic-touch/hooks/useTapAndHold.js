"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTapAndHold = useTapAndHold;
/** useTapAndHold — Hook for tap then hold gesture. */
const react_1 = require("react");
const react_native_gesture_handler_1 = require("react-native-gesture-handler");
function useTapAndHold(options) {
    const { onTapAndHold, onTap, holdDuration = 500, enabled = true } = options;
    return (0, react_1.useMemo)(() => {
        const holdGesture = react_native_gesture_handler_1.Gesture.LongPress()
            .minDuration(holdDuration)
            .onEnd((e) => {
            const event = { absoluteX: e.absoluteX, absoluteY: e.absoluteY, x: e.x, y: e.y, duration: e.duration };
            onTapAndHold(event);
        })
            .enabled(enabled);
        if (onTap) {
            const tapGesture = react_native_gesture_handler_1.Gesture.Tap()
                .onEnd((e) => {
                const event = { absoluteX: e.absoluteX, absoluteY: e.absoluteY, x: e.x, y: e.y, numberOfTaps: 1 };
                onTap(event);
            })
                .enabled(enabled);
            return react_native_gesture_handler_1.Gesture.Exclusive(holdGesture, tapGesture);
        }
        return holdGesture;
    }, [onTapAndHold, onTap, holdDuration, enabled]);
}
//# sourceMappingURL=useTapAndHold.js.map