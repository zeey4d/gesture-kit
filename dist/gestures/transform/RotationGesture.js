"use strict";
/**
 * Rotation Gesture - Detects rotation
 * @module gestures
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RotationGesture = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const RotationGesture = ({ children, enabled = true, ...rest }) => {
    // TODO: Implement Rotation Gesture logic
    return <react_native_1.View {...rest}>{children}</react_native_1.View>;
};
exports.RotationGesture = RotationGesture;
exports.RotationGesture.displayName = 'RotationGesture';
//# sourceMappingURL=RotationGesture.js.map