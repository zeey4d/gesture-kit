"use strict";
/**
 * Curved Swipe Gesture - Detects curved swipe paths
 * @module gestures
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurvedSwipeGesture = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const CurvedSwipeGesture = ({ children, enabled = true, ...rest }) => {
    // TODO: Implement Curved Swipe Gesture logic
    return <react_native_1.View {...rest}>{children}</react_native_1.View>;
};
exports.CurvedSwipeGesture = CurvedSwipeGesture;
exports.CurvedSwipeGesture.displayName = 'CurvedSwipeGesture';
//# sourceMappingURL=CurvedSwipeGesture.js.map