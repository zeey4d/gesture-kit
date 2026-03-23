"use strict";
/**
 * Stylus Tap Gesture - Detects stylus tap
 * @module gestures
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StylusTapGesture = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const StylusTapGesture = ({ children, enabled = true, ...rest }) => {
    // TODO: Implement Stylus Tap Gesture logic
    return <react_native_1.View {...rest}>{children}</react_native_1.View>;
};
exports.StylusTapGesture = StylusTapGesture;
exports.StylusTapGesture.displayName = 'StylusTapGesture';
//# sourceMappingURL=StylusTapGesture.js.map