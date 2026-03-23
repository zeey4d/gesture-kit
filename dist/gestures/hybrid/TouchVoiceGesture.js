"use strict";
/**
 * Touch Voice Gesture - Combines touch with voice input
 * @module gestures
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TouchVoiceGesture = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const TouchVoiceGesture = ({ children, enabled = true, ...rest }) => {
    // TODO: Implement Touch Voice Gesture logic
    return <react_native_1.View {...rest}>{children}</react_native_1.View>;
};
exports.TouchVoiceGesture = TouchVoiceGesture;
exports.TouchVoiceGesture.displayName = 'TouchVoiceGesture';
//# sourceMappingURL=TouchVoiceGesture.js.map