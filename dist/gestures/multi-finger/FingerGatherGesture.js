"use strict";
/**
 * Finger Gather - Detects finger gather (pinch in)
 * @module gestures
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FingerGatherGesture = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const FingerGatherGesture = ({ children, enabled = true, ...rest }) => {
    // TODO: Implement Finger Gather logic
    return <react_native_1.View {...rest}>{children}</react_native_1.View>;
};
exports.FingerGatherGesture = FingerGatherGesture;
exports.FingerGatherGesture.displayName = 'FingerGatherGesture';
//# sourceMappingURL=FingerGatherGesture.js.map