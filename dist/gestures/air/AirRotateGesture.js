"use strict";
/**
 * Air Rotate Gesture - Detects air rotation
 * @module gestures
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AirRotateGesture = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const AirRotateGesture = ({ children, enabled = true, ...rest }) => {
    // TODO: Implement Air Rotate Gesture logic
    return <react_native_1.View {...rest}>{children}</react_native_1.View>;
};
exports.AirRotateGesture = AirRotateGesture;
exports.AirRotateGesture.displayName = 'AirRotateGesture';
//# sourceMappingURL=AirRotateGesture.js.map