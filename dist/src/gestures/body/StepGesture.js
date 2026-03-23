"use strict";
/**
 * Step Gesture - Detects step gestures
 * @module gestures
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StepGesture = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const StepGesture = ({ children, enabled = true, ...rest }) => {
    // TODO: Implement Step Gesture logic
    return <react_native_1.View {...rest}>{children}</react_native_1.View>;
};
exports.StepGesture = StepGesture;
exports.StepGesture.displayName = 'StepGesture';
//# sourceMappingURL=StepGesture.js.map