"use strict";
/**
 * Pinch Gesture - Detects pinch in/out
 * @module gestures
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PinchGesture = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const PinchGesture = ({ children, enabled = true, ...rest }) => {
    // TODO: Implement Pinch Gesture logic
    return <react_native_1.View {...rest}>{children}</react_native_1.View>;
};
exports.PinchGesture = PinchGesture;
exports.PinchGesture.displayName = 'PinchGesture';
//# sourceMappingURL=PinchGesture.js.map