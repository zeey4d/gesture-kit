"use strict";
/**
 * Air Draw Gesture - Detects air drawing
 * @module gestures
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AirDrawGesture = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const AirDrawGesture = ({ children, enabled = true, ...rest }) => {
    // TODO: Implement Air Draw Gesture logic
    return <react_native_1.View {...rest}>{children}</react_native_1.View>;
};
exports.AirDrawGesture = AirDrawGesture;
exports.AirDrawGesture.displayName = 'AirDrawGesture';
//# sourceMappingURL=AirDrawGesture.js.map