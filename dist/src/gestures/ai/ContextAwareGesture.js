"use strict";
/**
 * Context Aware Gesture - Context-aware gesture recognition
 * @module gestures
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContextAwareGesture = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const ContextAwareGesture = ({ children, enabled = true, ...rest }) => {
    // TODO: Implement Context Aware Gesture logic
    return <react_native_1.View {...rest}>{children}</react_native_1.View>;
};
exports.ContextAwareGesture = ContextAwareGesture;
exports.ContextAwareGesture.displayName = 'ContextAwareGesture';
//# sourceMappingURL=ContextAwareGesture.js.map