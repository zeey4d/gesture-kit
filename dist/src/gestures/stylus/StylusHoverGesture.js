"use strict";
/**
 * Stylus Hover Gesture - Detects stylus hovering
 * @module gestures
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StylusHoverGesture = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const StylusHoverGesture = ({ children, enabled = true, ...rest }) => {
    // TODO: Implement Stylus Hover Gesture logic
    return <react_native_1.View {...rest}>{children}</react_native_1.View>;
};
exports.StylusHoverGesture = StylusHoverGesture;
exports.StylusHoverGesture.displayName = 'StylusHoverGesture';
//# sourceMappingURL=StylusHoverGesture.js.map