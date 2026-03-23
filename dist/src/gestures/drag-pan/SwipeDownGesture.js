"use strict";
/**
 * Swipe Down Gesture - Detects downward swipes
 * @module gestures
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwipeDownGesture = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const SwipeDownGesture = ({ children, enabled = true, ...rest }) => {
    // TODO: Implement Swipe Down Gesture logic
    return <react_native_1.View {...rest}>{children}</react_native_1.View>;
};
exports.SwipeDownGesture = SwipeDownGesture;
exports.SwipeDownGesture.displayName = 'SwipeDownGesture';
//# sourceMappingURL=SwipeDownGesture.js.map