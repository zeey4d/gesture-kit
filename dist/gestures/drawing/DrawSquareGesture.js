"use strict";
/**
 * Draw Square - Detects square drawing
 * @module gestures
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DrawSquareGesture = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const DrawSquareGesture = ({ children, enabled = true, ...rest }) => {
    // TODO: Implement Draw Square logic
    return <react_native_1.View {...rest}>{children}</react_native_1.View>;
};
exports.DrawSquareGesture = DrawSquareGesture;
exports.DrawSquareGesture.displayName = 'DrawSquareGesture';
//# sourceMappingURL=DrawSquareGesture.js.map