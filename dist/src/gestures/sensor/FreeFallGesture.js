"use strict";
/**
 * Free Fall Gesture - Detects free fall
 * @module gestures
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FreeFallGesture = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const FreeFallGesture = ({ children, enabled = true, ...rest }) => {
    // TODO: Implement Free Fall Gesture logic
    return <react_native_1.View {...rest}>{children}</react_native_1.View>;
};
exports.FreeFallGesture = FreeFallGesture;
exports.FreeFallGesture.displayName = 'FreeFallGesture';
//# sourceMappingURL=FreeFallGesture.js.map