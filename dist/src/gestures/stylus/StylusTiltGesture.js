"use strict";
/**
 * Stylus Tilt Gesture - Detects stylus tilt angle
 * @module gestures
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StylusTiltGesture = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const StylusTiltGesture = ({ children, enabled = true, ...rest }) => {
    // TODO: Implement Stylus Tilt Gesture logic
    return <react_native_1.View {...rest}>{children}</react_native_1.View>;
};
exports.StylusTiltGesture = StylusTiltGesture;
exports.StylusTiltGesture.displayName = 'StylusTiltGesture';
//# sourceMappingURL=StylusTiltGesture.js.map