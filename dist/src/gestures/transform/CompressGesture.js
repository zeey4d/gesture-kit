"use strict";
/**
 * Compress Gesture - Detects compress transforms
 * @module gestures
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompressGesture = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const CompressGesture = ({ children, enabled = true, ...rest }) => {
    // TODO: Implement Compress Gesture logic
    return <react_native_1.View {...rest}>{children}</react_native_1.View>;
};
exports.CompressGesture = CompressGesture;
exports.CompressGesture.displayName = 'CompressGesture';
//# sourceMappingURL=CompressGesture.js.map