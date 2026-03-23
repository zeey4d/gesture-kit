"use strict";
/**
 * usePan — Hook that returns a configured Pan gesture.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePan = usePan;
const react_1 = require("react");
const react_native_gesture_handler_1 = require("react-native-gesture-handler");
function toPanEvent(e) {
    return {
        absoluteX: e.absoluteX, absoluteY: e.absoluteY,
        x: e.x, y: e.y,
        translationX: e.translationX, translationY: e.translationY,
        velocityX: e.velocityX, velocityY: e.velocityY,
    };
}
function usePan(options) {
    const { onPanStart, onPanMove, onPanEnd, minDistance = 10, minPointers, maxPointers, enabled = true, } = options;
    return (0, react_1.useMemo)(() => {
        let g = react_native_gesture_handler_1.Gesture.Pan().minDistance(minDistance);
        if (minPointers !== undefined)
            g = g.minPointers(minPointers);
        if (maxPointers !== undefined)
            g = g.maxPointers(maxPointers);
        if (onPanStart)
            g = g.onStart((e) => onPanStart(toPanEvent(e)));
        if (onPanMove)
            g = g.onUpdate((e) => onPanMove(toPanEvent(e)));
        if (onPanEnd)
            g = g.onEnd((e) => onPanEnd(toPanEvent(e)));
        return g.enabled(enabled);
    }, [onPanStart, onPanMove, onPanEnd, minDistance, minPointers, maxPointers, enabled]);
}
//# sourceMappingURL=usePan.js.map