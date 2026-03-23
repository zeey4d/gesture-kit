"use strict";
/**
 * Stretch Gesture - Detects stretch transforms
 * @module gestures
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StretchGesture = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const StretchGesture = ({ children, enabled = true, ...rest }) => {
    // TODO: Implement Stretch Gesture logic
    return <react_native_1.View {...rest}>{children}</react_native_1.View>;
};
exports.StretchGesture = StretchGesture;
exports.StretchGesture.displayName = 'StretchGesture';
//# sourceMappingURL=StretchGesture.js.map