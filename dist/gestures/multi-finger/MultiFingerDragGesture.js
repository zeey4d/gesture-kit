"use strict";
/**
 * Multi Finger Drag - Detects multi finger drag
 * @module gestures
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiFingerDragGesture = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const MultiFingerDragGesture = ({ children, enabled = true, ...rest }) => {
    // TODO: Implement Multi Finger Drag logic
    return <react_native_1.View {...rest}>{children}</react_native_1.View>;
};
exports.MultiFingerDragGesture = MultiFingerDragGesture;
exports.MultiFingerDragGesture.displayName = 'MultiFingerDragGesture';
//# sourceMappingURL=MultiFingerDragGesture.js.map