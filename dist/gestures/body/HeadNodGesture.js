"use strict";
/**
 * Head Nod Gesture - Detects head nod
 * @module gestures
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeadNodGesture = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const HeadNodGesture = ({ children, enabled = true, ...rest }) => {
    // TODO: Implement Head Nod Gesture logic
    return <react_native_1.View {...rest}>{children}</react_native_1.View>;
};
exports.HeadNodGesture = HeadNodGesture;
exports.HeadNodGesture.displayName = 'HeadNodGesture';
//# sourceMappingURL=HeadNodGesture.js.map