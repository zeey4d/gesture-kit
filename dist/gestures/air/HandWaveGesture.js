"use strict";
/**
 * Hand Wave Gesture - Detects hand wave
 * @module gestures
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HandWaveGesture = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const HandWaveGesture = ({ children, enabled = true, ...rest }) => {
    // TODO: Implement Hand Wave Gesture logic
    return <react_native_1.View {...rest}>{children}</react_native_1.View>;
};
exports.HandWaveGesture = HandWaveGesture;
exports.HandWaveGesture.displayName = 'HandWaveGesture';
//# sourceMappingURL=HandWaveGesture.js.map