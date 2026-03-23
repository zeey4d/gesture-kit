"use strict";
/**
 * Two Finger Swipe - Detects two finger swipe
 * @module gestures
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwoFingerSwipeGesture = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const TwoFingerSwipeGesture = ({ children, enabled = true, ...rest }) => {
    // TODO: Implement Two Finger Swipe logic
    return <react_native_1.View {...rest}>{children}</react_native_1.View>;
};
exports.TwoFingerSwipeGesture = TwoFingerSwipeGesture;
exports.TwoFingerSwipeGesture.displayName = 'TwoFingerSwipeGesture';
//# sourceMappingURL=TwoFingerSwipeGesture.js.map