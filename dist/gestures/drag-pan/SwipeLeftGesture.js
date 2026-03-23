"use strict";
/**
 * Swipe Left Gesture - Detects leftward swipes
 * @module gestures
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwipeLeftGesture = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const SwipeLeftGesture = ({ children, enabled = true, ...rest }) => {
    // TODO: Implement Swipe Left Gesture logic
    return <react_native_1.View {...rest}>{children}</react_native_1.View>;
};
exports.SwipeLeftGesture = SwipeLeftGesture;
exports.SwipeLeftGesture.displayName = 'SwipeLeftGesture';
//# sourceMappingURL=SwipeLeftGesture.js.map