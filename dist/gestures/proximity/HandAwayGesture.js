"use strict";
/**
 * Hand Away Gesture - Detects hand moving away
 * @module gestures
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HandAwayGesture = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const HandAwayGesture = ({ children, enabled = true, ...rest }) => {
    // TODO: Implement Hand Away Gesture logic
    return <react_native_1.View {...rest}>{children}</react_native_1.View>;
};
exports.HandAwayGesture = HandAwayGesture;
exports.HandAwayGesture.displayName = 'HandAwayGesture';
//# sourceMappingURL=HandAwayGesture.js.map