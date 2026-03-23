"use strict";
/**
 * Tilt Forward Gesture - Detects forward tilt
 * @module gestures
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TiltForwardGesture = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const TiltForwardGesture = ({ children, enabled = true, ...rest }) => {
    // TODO: Implement Tilt Forward Gesture logic
    return <react_native_1.View {...rest}>{children}</react_native_1.View>;
};
exports.TiltForwardGesture = TiltForwardGesture;
exports.TiltForwardGesture.displayName = 'TiltForwardGesture';
//# sourceMappingURL=TiltForwardGesture.js.map