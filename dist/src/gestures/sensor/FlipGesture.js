"use strict";
/**
 * Flip Gesture - Detects device flip
 * @module gestures
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlipGesture = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const FlipGesture = ({ children, enabled = true, ...rest }) => {
    // TODO: Implement Flip Gesture logic
    return <react_native_1.View {...rest}>{children}</react_native_1.View>;
};
exports.FlipGesture = FlipGesture;
exports.FlipGesture.displayName = 'FlipGesture';
//# sourceMappingURL=FlipGesture.js.map