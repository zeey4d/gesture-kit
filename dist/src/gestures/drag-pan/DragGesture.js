"use strict";
/**
 * Drag Gesture - Detects drag gestures
 * @module gestures
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DragGesture = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const DragGesture = ({ children, enabled = true, ...rest }) => {
    // TODO: Implement Drag Gesture logic
    return <react_native_1.View {...rest}>{children}</react_native_1.View>;
};
exports.DragGesture = DragGesture;
exports.DragGesture.displayName = 'DragGesture';
//# sourceMappingURL=DragGesture.js.map