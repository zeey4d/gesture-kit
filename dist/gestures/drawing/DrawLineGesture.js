"use strict";
/**
 * Draw Line - Detects line drawing
 * @module gestures
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DrawLineGesture = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const DrawLineGesture = ({ children, enabled = true, ...rest }) => {
    // TODO: Implement Draw Line logic
    return <react_native_1.View {...rest}>{children}</react_native_1.View>;
};
exports.DrawLineGesture = DrawLineGesture;
exports.DrawLineGesture.displayName = 'DrawLineGesture';
//# sourceMappingURL=DrawLineGesture.js.map