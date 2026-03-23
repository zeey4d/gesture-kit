"use strict";
/**
 * Raise Hand Gesture - Detects raised hand
 * @module gestures
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RaiseHandGesture = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const RaiseHandGesture = ({ children, enabled = true, ...rest }) => {
    // TODO: Implement Raise Hand Gesture logic
    return <react_native_1.View {...rest}>{children}</react_native_1.View>;
};
exports.RaiseHandGesture = RaiseHandGesture;
exports.RaiseHandGesture.displayName = 'RaiseHandGesture';
//# sourceMappingURL=RaiseHandGesture.js.map