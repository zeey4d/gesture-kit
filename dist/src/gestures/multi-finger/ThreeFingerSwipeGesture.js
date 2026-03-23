"use strict";
/**
 * Three Finger Swipe - Detects three finger swipe
 * @module gestures
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreeFingerSwipeGesture = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const ThreeFingerSwipeGesture = ({ children, enabled = true, ...rest }) => {
    // TODO: Implement Three Finger Swipe logic
    return <react_native_1.View {...rest}>{children}</react_native_1.View>;
};
exports.ThreeFingerSwipeGesture = ThreeFingerSwipeGesture;
exports.ThreeFingerSwipeGesture.displayName = 'ThreeFingerSwipeGesture';
//# sourceMappingURL=ThreeFingerSwipeGesture.js.map