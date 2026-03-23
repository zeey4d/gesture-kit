"use strict";
/**
 * Intent Based Gesture - Intent-based gesture recognition
 * @module gestures
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntentBasedGesture = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const IntentBasedGesture = ({ children, enabled = true, ...rest }) => {
    // TODO: Implement Intent Based Gesture logic
    return <react_native_1.View {...rest}>{children}</react_native_1.View>;
};
exports.IntentBasedGesture = IntentBasedGesture;
exports.IntentBasedGesture.displayName = 'IntentBasedGesture';
//# sourceMappingURL=IntentBasedGesture.js.map