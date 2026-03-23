"use strict";
/**
 * Two Finger Tap - Detects two finger tap
 * @module gestures
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwoFingerTapGesture = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const TwoFingerTapGesture = ({ children, enabled = true, ...rest }) => {
    // TODO: Implement Two Finger Tap logic
    return <react_native_1.View {...rest}>{children}</react_native_1.View>;
};
exports.TwoFingerTapGesture = TwoFingerTapGesture;
exports.TwoFingerTapGesture.displayName = 'TwoFingerTapGesture';
//# sourceMappingURL=TwoFingerTapGesture.js.map