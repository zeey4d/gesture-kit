"use strict";
/**
 * Corner Swipe Gesture - Detects swipes from screen corners
 * @module gestures
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CornerSwipeGesture = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const CornerSwipeGesture = ({ children, enabled = true, ...rest }) => {
    // TODO: Implement Corner Swipe Gesture logic
    return <react_native_1.View {...rest}>{children}</react_native_1.View>;
};
exports.CornerSwipeGesture = CornerSwipeGesture;
exports.CornerSwipeGesture.displayName = 'CornerSwipeGesture';
//# sourceMappingURL=CornerSwipeGesture.js.map