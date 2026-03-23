"use strict";
/**
 * Drag and Drop Gesture - Detects drag and drop
 * @module gestures
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DragAndDropGesture = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const DragAndDropGesture = ({ children, enabled = true, ...rest }) => {
    // TODO: Implement Drag and Drop Gesture logic
    return <react_native_1.View {...rest}>{children}</react_native_1.View>;
};
exports.DragAndDropGesture = DragAndDropGesture;
exports.DragAndDropGesture.displayName = 'DragAndDropGesture';
//# sourceMappingURL=DragAndDropGesture.js.map