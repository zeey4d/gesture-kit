"use strict";
/**
 * Tilt Left Gesture - Detects left tilt
 * @module gestures
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TiltLeftGesture = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const TiltLeftGesture = ({ children, enabled = true, ...rest }) => {
    // TODO: Implement Tilt Left Gesture logic
    return <react_native_1.View {...rest}>{children}</react_native_1.View>;
};
exports.TiltLeftGesture = TiltLeftGesture;
exports.TiltLeftGesture.displayName = 'TiltLeftGesture';
//# sourceMappingURL=TiltLeftGesture.js.map