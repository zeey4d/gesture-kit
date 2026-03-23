"use strict";
/**
 * Stylus Pressure Gesture - Detects stylus pressure
 * @module gestures
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StylusPressureGesture = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const StylusPressureGesture = ({ children, enabled = true, ...rest }) => {
    // TODO: Implement Stylus Pressure Gesture logic
    return <react_native_1.View {...rest}>{children}</react_native_1.View>;
};
exports.StylusPressureGesture = StylusPressureGesture;
exports.StylusPressureGesture.displayName = 'StylusPressureGesture';
//# sourceMappingURL=StylusPressureGesture.js.map