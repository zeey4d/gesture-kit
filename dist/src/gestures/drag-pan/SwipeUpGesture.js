"use strict";
/**
 * Swipe Up Gesture - Detects upward swipes
 * @module gestures
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwipeUpGesture = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const SwipeUpGesture = ({ children, enabled = true, ...rest }) => {
    // TODO: Implement Swipe Up Gesture logic
    return <react_native_1.View {...rest}>{children}</react_native_1.View>;
};
exports.SwipeUpGesture = SwipeUpGesture;
exports.SwipeUpGesture.displayName = 'SwipeUpGesture';
//# sourceMappingURL=SwipeUpGesture.js.map