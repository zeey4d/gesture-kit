"use strict";
/**
 * Pinch Rotate Gesture - Detects simultaneous pinch and rotate
 * @module gestures
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PinchRotateGesture = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const PinchRotateGesture = ({ children, enabled = true, ...rest }) => {
    // TODO: Implement Pinch Rotate Gesture logic
    return <react_native_1.View {...rest}>{children}</react_native_1.View>;
};
exports.PinchRotateGesture = PinchRotateGesture;
exports.PinchRotateGesture.displayName = 'PinchRotateGesture';
//# sourceMappingURL=PinchRotateGesture.js.map