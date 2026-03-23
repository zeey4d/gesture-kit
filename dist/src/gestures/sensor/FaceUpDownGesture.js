"use strict";
/**
 * Face Up/Down Gesture - Detects face up/down orientation
 * @module gestures
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FaceUpDownGesture = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const FaceUpDownGesture = ({ children, enabled = true, ...rest }) => {
    // TODO: Implement Face Up/Down Gesture logic
    return <react_native_1.View {...rest}>{children}</react_native_1.View>;
};
exports.FaceUpDownGesture = FaceUpDownGesture;
exports.FaceUpDownGesture.displayName = 'FaceUpDownGesture';
//# sourceMappingURL=FaceUpDownGesture.js.map