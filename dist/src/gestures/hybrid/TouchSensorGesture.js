"use strict";
/**
 * Touch Sensor Gesture - Combines touch with sensor data
 * @module gestures
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TouchSensorGesture = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const TouchSensorGesture = ({ children, enabled = true, ...rest }) => {
    // TODO: Implement Touch Sensor Gesture logic
    return <react_native_1.View {...rest}>{children}</react_native_1.View>;
};
exports.TouchSensorGesture = TouchSensorGesture;
exports.TouchSensorGesture.displayName = 'TouchSensorGesture';
//# sourceMappingURL=TouchSensorGesture.js.map