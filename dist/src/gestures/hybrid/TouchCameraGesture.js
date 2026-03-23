"use strict";
/**
 * Touch Camera Gesture - Combines touch with camera input
 * @module gestures
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TouchCameraGesture = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const TouchCameraGesture = ({ children, enabled = true, ...rest }) => {
    // TODO: Implement Touch Camera Gesture logic
    return <react_native_1.View {...rest}>{children}</react_native_1.View>;
};
exports.TouchCameraGesture = TouchCameraGesture;
exports.TouchCameraGesture.displayName = 'TouchCameraGesture';
//# sourceMappingURL=TouchCameraGesture.js.map