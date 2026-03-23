"use strict";
/**
 * Hover Gesture - Detects hovering
 * @module gestures
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HoverGesture = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const HoverGesture = ({ children, enabled = true, ...rest }) => {
    // TODO: Implement Hover Gesture logic
    return <react_native_1.View {...rest}>{children}</react_native_1.View>;
};
exports.HoverGesture = HoverGesture;
exports.HoverGesture.displayName = 'HoverGesture';
//# sourceMappingURL=HoverGesture.js.map