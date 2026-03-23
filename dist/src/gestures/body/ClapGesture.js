"use strict";
/**
 * Clap Gesture - Detects clapping
 * @module gestures
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClapGesture = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const ClapGesture = ({ children, enabled = true, ...rest }) => {
    // TODO: Implement Clap Gesture logic
    return <react_native_1.View {...rest}>{children}</react_native_1.View>;
};
exports.ClapGesture = ClapGesture;
exports.ClapGesture.displayName = 'ClapGesture';
//# sourceMappingURL=ClapGesture.js.map