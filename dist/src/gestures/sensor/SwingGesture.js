"use strict";
/**
 * Swing Gesture - Detects swing/twirl motion
 * @module gestures
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwingGesture = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const SwingGesture = ({ children, enabled = true, ...rest }) => {
    // TODO: Implement Swing Gesture logic
    return <react_native_1.View {...rest}>{children}</react_native_1.View>;
};
exports.SwingGesture = SwingGesture;
exports.SwingGesture.displayName = 'SwingGesture';
//# sourceMappingURL=SwingGesture.js.map