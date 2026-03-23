"use strict";
/**
 * Circular Motion Gesture - Detects circular motion
 * @module gestures
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CircularMotionGesture = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const CircularMotionGesture = ({ children, enabled = true, ...rest }) => {
    // TODO: Implement Circular Motion Gesture logic
    return <react_native_1.View {...rest}>{children}</react_native_1.View>;
};
exports.CircularMotionGesture = CircularMotionGesture;
exports.CircularMotionGesture.displayName = 'CircularMotionGesture';
//# sourceMappingURL=CircularMotionGesture.js.map