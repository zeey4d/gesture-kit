"use strict";
/**
 * Three Finger Tap - Detects three finger tap
 * @module gestures
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreeFingerTapGesture = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const ThreeFingerTapGesture = ({ children, enabled = true, ...rest }) => {
    // TODO: Implement Three Finger Tap logic
    return <react_native_1.View {...rest}>{children}</react_native_1.View>;
};
exports.ThreeFingerTapGesture = ThreeFingerTapGesture;
exports.ThreeFingerTapGesture.displayName = 'ThreeFingerTapGesture';
//# sourceMappingURL=ThreeFingerTapGesture.js.map