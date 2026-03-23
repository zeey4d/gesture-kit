"use strict";
/**
 * useSwipe — Hook that returns a configured Swipe gesture (via Pan).
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSwipe = useSwipe;
const react_1 = require("react");
const react_native_gesture_handler_1 = require("react-native-gesture-handler");
const direction_1 = require("../utils/direction");
function useSwipe(options) {
    const { onSwipe, direction, threshold = 50, velocityThreshold = 300, enabled = true, } = options;
    return (0, react_1.useMemo)(() => {
        const g = react_native_gesture_handler_1.Gesture.Pan()
            .onEnd((e) => {
            const vel = (0, direction_1.magnitude)(e.velocityX, e.velocityY);
            const dist = (0, direction_1.magnitude)(e.translationX, e.translationY);
            if (dist >= threshold && vel >= velocityThreshold) {
                const detected = (0, direction_1.detectSwipeDirection)(e.translationX, e.translationY, e.velocityX, e.velocityY);
                if ((0, direction_1.matchesDirection)(detected, direction)) {
                    const event = {
                        absoluteX: e.absoluteX, absoluteY: e.absoluteY,
                        x: e.x, y: e.y,
                        direction: detected,
                        velocity: vel,
                        distance: dist,
                    };
                    onSwipe(event);
                }
            }
        });
        return g.enabled(enabled);
    }, [onSwipe, direction, threshold, velocityThreshold, enabled]);
}
//# sourceMappingURL=useSwipe.js.map