"use strict";
/**
 * Multi Device Gesture - Cross-device gesture coordination
 * @module gestures
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiDeviceGesture = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const MultiDeviceGesture = ({ children, enabled = true, ...rest }) => {
    // TODO: Implement Multi Device Gesture logic
    return <react_native_1.View {...rest}>{children}</react_native_1.View>;
};
exports.MultiDeviceGesture = MultiDeviceGesture;
exports.MultiDeviceGesture.displayName = 'MultiDeviceGesture';
//# sourceMappingURL=MultiDeviceGesture.js.map