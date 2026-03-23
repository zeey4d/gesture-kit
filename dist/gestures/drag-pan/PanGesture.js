"use strict";
/**
 * Pan Gesture - Detects pan/drag movement
 * @module gestures
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PanGesture = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const PanGesture = ({ children, enabled = true, ...rest }) => {
    // TODO: Implement Pan Gesture logic
    return <react_native_1.View {...rest}>{children}</react_native_1.View>;
};
exports.PanGesture = PanGesture;
exports.PanGesture.displayName = 'PanGesture';
//# sourceMappingURL=PanGesture.js.map