"use strict";
/**
 * Circular Swipe Gesture - Detects circular swipe gestures
 * @module gestures
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CircularSwipeGesture = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const CircularSwipeGesture = ({ children, enabled = true, ...rest }) => {
    // TODO: Implement Circular Swipe Gesture logic
    return <react_native_1.View {...rest}>{children}</react_native_1.View>;
};
exports.CircularSwipeGesture = CircularSwipeGesture;
exports.CircularSwipeGesture.displayName = 'CircularSwipeGesture';
//# sourceMappingURL=CircularSwipeGesture.js.map