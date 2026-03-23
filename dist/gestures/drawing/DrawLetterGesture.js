"use strict";
/**
 * Draw Letter - Detects letter/symbol drawing
 * @module gestures
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DrawLetterGesture = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const DrawLetterGesture = ({ children, enabled = true, ...rest }) => {
    // TODO: Implement Draw Letter logic
    return <react_native_1.View {...rest}>{children}</react_native_1.View>;
};
exports.DrawLetterGesture = DrawLetterGesture;
exports.DrawLetterGesture.displayName = 'DrawLetterGesture';
//# sourceMappingURL=DrawLetterGesture.js.map