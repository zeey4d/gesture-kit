"use strict";
/**
 * Tilt Right Gesture - Detects right tilt
 * @module gestures
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TiltRightGesture = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const TiltRightGesture = ({ children, enabled = true, ...rest }) => {
    // TODO: Implement Tilt Right Gesture logic
    return <react_native_1.View {...rest}>{children}</react_native_1.View>;
};
exports.TiltRightGesture = TiltRightGesture;
exports.TiltRightGesture.displayName = 'TiltRightGesture';
//# sourceMappingURL=TiltRightGesture.js.map