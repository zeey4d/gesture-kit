"use strict";
/**
 * Multi Hand Gesture - Detects multi-hand gestures
 * @module gestures
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiHandGesture = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const MultiHandGesture = ({ children, enabled = true, ...rest }) => {
    // TODO: Implement Multi Hand Gesture logic
    return <react_native_1.View {...rest}>{children}</react_native_1.View>;
};
exports.MultiHandGesture = MultiHandGesture;
exports.MultiHandGesture.displayName = 'MultiHandGesture';
//# sourceMappingURL=MultiHandGesture.js.map