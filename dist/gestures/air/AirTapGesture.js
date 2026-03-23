"use strict";
/**
 * Air Tap Gesture - Detects air tap
 * @module gestures
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AirTapGesture = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const AirTapGesture = ({ children, enabled = true, ...rest }) => {
    // TODO: Implement Air Tap Gesture logic
    return <react_native_1.View {...rest}>{children}</react_native_1.View>;
};
exports.AirTapGesture = AirTapGesture;
exports.AirTapGesture.displayName = 'AirTapGesture';
//# sourceMappingURL=AirTapGesture.js.map