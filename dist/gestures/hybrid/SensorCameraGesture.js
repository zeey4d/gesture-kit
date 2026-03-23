"use strict";
/**
 * Sensor Camera Gesture - Combines sensor with camera
 * @module gestures
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SensorCameraGesture = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const SensorCameraGesture = ({ children, enabled = true, ...rest }) => {
    // TODO: Implement Sensor Camera Gesture logic
    return <react_native_1.View {...rest}>{children}</react_native_1.View>;
};
exports.SensorCameraGesture = SensorCameraGesture;
exports.SensorCameraGesture.displayName = 'SensorCameraGesture';
//# sourceMappingURL=SensorCameraGesture.js.map