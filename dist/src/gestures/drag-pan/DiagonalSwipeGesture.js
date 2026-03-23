"use strict";
/**
 * Diagonal Swipe Gesture - Detects diagonal swipes
 * @module gestures
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiagonalSwipeGesture = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const DiagonalSwipeGesture = ({ children, enabled = true, ...rest }) => {
    // TODO: Implement Diagonal Swipe Gesture logic
    return <react_native_1.View {...rest}>{children}</react_native_1.View>;
};
exports.DiagonalSwipeGesture = DiagonalSwipeGesture;
exports.DiagonalSwipeGesture.displayName = 'DiagonalSwipeGesture';
//# sourceMappingURL=DiagonalSwipeGesture.js.map