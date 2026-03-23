"use strict";
/**
 * Edge Swipe Gesture - Detects swipes from screen edges
 * @module gestures
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EdgeSwipeGesture = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const EdgeSwipeGesture = ({ children, enabled = true, ...rest }) => {
    // TODO: Implement Edge Swipe Gesture logic
    return <react_native_1.View {...rest}>{children}</react_native_1.View>;
};
exports.EdgeSwipeGesture = EdgeSwipeGesture;
exports.EdgeSwipeGesture.displayName = 'EdgeSwipeGesture';
//# sourceMappingURL=EdgeSwipeGesture.js.map