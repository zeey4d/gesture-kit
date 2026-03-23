"use strict";
/**
 * Draw Triangle - Detects triangle drawing
 * @module gestures
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DrawTriangleGesture = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const DrawTriangleGesture = ({ children, enabled = true, ...rest }) => {
    // TODO: Implement Draw Triangle logic
    return <react_native_1.View {...rest}>{children}</react_native_1.View>;
};
exports.DrawTriangleGesture = DrawTriangleGesture;
exports.DrawTriangleGesture.displayName = 'DrawTriangleGesture';
//# sourceMappingURL=DrawTriangleGesture.js.map