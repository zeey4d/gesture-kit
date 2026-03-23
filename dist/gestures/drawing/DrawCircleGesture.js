"use strict";
/**
 * Draw Circle - Detects circle drawing
 * @module gestures
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DrawCircleGesture = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const DrawCircleGesture = ({ children, enabled = true, ...rest }) => {
    // TODO: Implement Draw Circle logic
    return <react_native_1.View {...rest}>{children}</react_native_1.View>;
};
exports.DrawCircleGesture = DrawCircleGesture;
exports.DrawCircleGesture.displayName = 'DrawCircleGesture';
//# sourceMappingURL=DrawCircleGesture.js.map