"use strict";
/**
 * Adaptive Gesture - Gestures that adapt to user behavior
 * @module gestures
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdaptiveGesture = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const AdaptiveGesture = ({ children, enabled = true, ...rest }) => {
    // TODO: Implement Adaptive Gesture logic
    return <react_native_1.View {...rest}>{children}</react_native_1.View>;
};
exports.AdaptiveGesture = AdaptiveGesture;
exports.AdaptiveGesture.displayName = 'AdaptiveGesture';
//# sourceMappingURL=AdaptiveGesture.js.map