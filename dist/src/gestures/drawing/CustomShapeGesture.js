"use strict";
/**
 * Custom Shape - Detects custom shape recognition
 * @module gestures
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomShapeGesture = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const CustomShapeGesture = ({ children, enabled = true, ...rest }) => {
    // TODO: Implement Custom Shape logic
    return <react_native_1.View {...rest}>{children}</react_native_1.View>;
};
exports.CustomShapeGesture = CustomShapeGesture;
exports.CustomShapeGesture.displayName = 'CustomShapeGesture';
//# sourceMappingURL=CustomShapeGesture.js.map