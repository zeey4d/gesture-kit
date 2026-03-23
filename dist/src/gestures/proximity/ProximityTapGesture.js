"use strict";
/**
 * Proximity Tap Gesture - Detects proximity-based tap
 * @module gestures
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProximityTapGesture = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const ProximityTapGesture = ({ children, enabled = true, ...rest }) => {
    // TODO: Implement Proximity Tap Gesture logic
    return <react_native_1.View {...rest}>{children}</react_native_1.View>;
};
exports.ProximityTapGesture = ProximityTapGesture;
exports.ProximityTapGesture.displayName = 'ProximityTapGesture';
//# sourceMappingURL=ProximityTapGesture.js.map