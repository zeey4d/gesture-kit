"use strict";
/**
 * Finger Spread - Detects finger spread (pinch out)
 * @module gestures
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FingerSpreadGesture = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const FingerSpreadGesture = ({ children, enabled = true, ...rest }) => {
    // TODO: Implement Finger Spread logic
    return <react_native_1.View {...rest}>{children}</react_native_1.View>;
};
exports.FingerSpreadGesture = FingerSpreadGesture;
exports.FingerSpreadGesture.displayName = 'FingerSpreadGesture';
//# sourceMappingURL=FingerSpreadGesture.js.map