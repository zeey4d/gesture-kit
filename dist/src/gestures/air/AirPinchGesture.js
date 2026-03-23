"use strict";
/**
 * Air Pinch Gesture - Detects air pinch
 * @module gestures
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AirPinchGesture = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const AirPinchGesture = ({ children, enabled = true, ...rest }) => {
    // TODO: Implement Air Pinch Gesture logic
    return <react_native_1.View {...rest}>{children}</react_native_1.View>;
};
exports.AirPinchGesture = AirPinchGesture;
exports.AirPinchGesture.displayName = 'AirPinchGesture';
//# sourceMappingURL=AirPinchGesture.js.map