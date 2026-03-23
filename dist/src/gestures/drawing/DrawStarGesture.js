"use strict";
/**
 * Draw Star - Detects star drawing
 * @module gestures
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DrawStarGesture = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const DrawStarGesture = ({ children, enabled = true, ...rest }) => {
    // TODO: Implement Draw Star logic
    return <react_native_1.View {...rest}>{children}</react_native_1.View>;
};
exports.DrawStarGesture = DrawStarGesture;
exports.DrawStarGesture.displayName = 'DrawStarGesture';
//# sourceMappingURL=DrawStarGesture.js.map