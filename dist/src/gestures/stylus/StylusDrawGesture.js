"use strict";
/**
 * Stylus Draw Gesture - Detects stylus drawing
 * @module gestures
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StylusDrawGesture = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const StylusDrawGesture = ({ children, enabled = true, ...rest }) => {
    // TODO: Implement Stylus Draw Gesture logic
    return <react_native_1.View {...rest}>{children}</react_native_1.View>;
};
exports.StylusDrawGesture = StylusDrawGesture;
exports.StylusDrawGesture.displayName = 'StylusDrawGesture';
//# sourceMappingURL=StylusDrawGesture.js.map