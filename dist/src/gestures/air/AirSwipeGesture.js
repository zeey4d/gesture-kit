"use strict";
/**
 * Air Swipe Gesture - Detects air swipe
 * @module gestures
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AirSwipeGesture = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const AirSwipeGesture = ({ children, enabled = true, ...rest }) => {
    // TODO: Implement Air Swipe Gesture logic
    return <react_native_1.View {...rest}>{children}</react_native_1.View>;
};
exports.AirSwipeGesture = AirSwipeGesture;
exports.AirSwipeGesture.displayName = 'AirSwipeGesture';
//# sourceMappingURL=AirSwipeGesture.js.map