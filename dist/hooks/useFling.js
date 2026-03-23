"use strict";
/**
 * useFling — Hook that returns a configured Fling gesture.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFling = useFling;
const react_1 = require("react");
const react_native_gesture_handler_1 = require("react-native-gesture-handler");
function toDirectionFlag(dir) {
    const Directions = { RIGHT: 1, LEFT: 2, UP: 4, DOWN: 8 };
    switch (dir) {
        case 'right': return Directions.RIGHT;
        case 'left': return Directions.LEFT;
        case 'up': return Directions.UP;
        case 'down': return Directions.DOWN;
        default: return Directions.RIGHT | Directions.LEFT | Directions.UP | Directions.DOWN;
    }
}
function useFling(options) {
    const { onFling, direction, numberOfPointers = 1, enabled = true } = options;
    return (0, react_1.useMemo)(() => {
        const dirFlag = toDirectionFlag(direction);
        const g = react_native_gesture_handler_1.Gesture.Fling()
            .direction(dirFlag)
            .numberOfPointers(numberOfPointers)
            .onEnd((e) => {
            const event = {
                absoluteX: e.absoluteX, absoluteY: e.absoluteY,
                x: e.x, y: e.y,
                direction: direction || 'right',
            };
            onFling(event);
        });
        return g.enabled(enabled);
    }, [onFling, direction, numberOfPointers, enabled]);
}
//# sourceMappingURL=useFling.js.map