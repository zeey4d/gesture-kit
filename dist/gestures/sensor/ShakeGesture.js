"use strict";
/**
 * Shake Gesture - Detects shake motion
 * @module gestures
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShakeGesture = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const ShakeGesture = ({ children, enabled = true, ...rest }) => {
    // TODO: Implement Shake Gesture logic
    return <react_native_1.View {...rest}>{children}</react_native_1.View>;
};
exports.ShakeGesture = ShakeGesture;
exports.ShakeGesture.displayName = 'ShakeGesture';
//# sourceMappingURL=ShakeGesture.js.map