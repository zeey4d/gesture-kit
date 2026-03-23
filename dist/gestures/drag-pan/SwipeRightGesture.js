"use strict";
/**
 * Swipe Right Gesture - Detects rightward swipes
 * @module gestures
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwipeRightGesture = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const SwipeRightGesture = ({ children, enabled = true, ...rest }) => {
    // TODO: Implement Swipe Right Gesture logic
    return <react_native_1.View {...rest}>{children}</react_native_1.View>;
};
exports.SwipeRightGesture = SwipeRightGesture;
exports.SwipeRightGesture.displayName = 'SwipeRightGesture';
//# sourceMappingURL=SwipeRightGesture.js.map