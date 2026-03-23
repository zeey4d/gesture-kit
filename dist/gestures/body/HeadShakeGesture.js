"use strict";
/**
 * Head Shake Gesture - Detects head shake
 * @module gestures
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeadShakeGesture = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const HeadShakeGesture = ({ children, enabled = true, ...rest }) => {
    // TODO: Implement Head Shake Gesture logic
    return <react_native_1.View {...rest}>{children}</react_native_1.View>;
};
exports.HeadShakeGesture = HeadShakeGesture;
exports.HeadShakeGesture.displayName = 'HeadShakeGesture';
//# sourceMappingURL=HeadShakeGesture.js.map