"use strict";
/**
 * Hand Near Gesture - Detects hand approaching
 * @module gestures
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HandNearGesture = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const HandNearGesture = ({ children, enabled = true, ...rest }) => {
    // TODO: Implement Hand Near Gesture logic
    return <react_native_1.View {...rest}>{children}</react_native_1.View>;
};
exports.HandNearGesture = HandNearGesture;
exports.HandNearGesture.displayName = 'HandNearGesture';
//# sourceMappingURL=HandNearGesture.js.map