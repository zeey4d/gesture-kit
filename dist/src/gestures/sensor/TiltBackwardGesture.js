"use strict";
/**
 * Tilt Backward Gesture - Detects backward tilt
 * @module gestures
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TiltBackwardGesture = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const TiltBackwardGesture = ({ children, enabled = true, ...rest }) => {
    // TODO: Implement Tilt Backward Gesture logic
    return <react_native_1.View {...rest}>{children}</react_native_1.View>;
};
exports.TiltBackwardGesture = TiltBackwardGesture;
exports.TiltBackwardGesture.displayName = 'TiltBackwardGesture';
//# sourceMappingURL=TiltBackwardGesture.js.map