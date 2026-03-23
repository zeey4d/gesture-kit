"use strict";
/**
 * Gesture composition utilities.
 *
 * @module utils/compose
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.composeGestures = composeGestures;
const react_native_gesture_handler_1 = require("react-native-gesture-handler");
/**
 * Compose an array of gestures using the specified priority strategy.
 *
 * - `simultaneous` — All gestures can activate at the same time.
 * - `exclusive`    — Only one gesture in the group can activate (first wins).
 * - `race`         — Gestures compete; the first to activate cancels the rest.
 *
 * If only one gesture is provided it is returned as-is.
 */
function composeGestures(gestures, priority = 'simultaneous') {
    if (gestures.length === 0) {
        throw new Error('[react-native-gesture-kit] composeGestures requires at least one gesture.');
    }
    if (gestures.length === 1) {
        return gestures[0];
    }
    switch (priority) {
        case 'simultaneous':
            return react_native_gesture_handler_1.Gesture.Simultaneous(...gestures);
        case 'exclusive':
            return react_native_gesture_handler_1.Gesture.Exclusive(...gestures);
        case 'race':
            return react_native_gesture_handler_1.Gesture.Race(...gestures);
        default:
            return react_native_gesture_handler_1.Gesture.Simultaneous(...gestures);
    }
}
//# sourceMappingURL=compose.js.map