"use strict";
/**
 * Tap Hold Sequence - Detects tap then hold
 * @module gestures
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TapHoldSequence = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const TapHoldSequence = ({ children, enabled = true, ...rest }) => {
    // TODO: Implement Tap Hold Sequence logic
    return <react_native_1.View {...rest}>{children}</react_native_1.View>;
};
exports.TapHoldSequence = TapHoldSequence;
exports.TapHoldSequence.displayName = 'TapHoldSequence';
//# sourceMappingURL=TapHoldSequence.js.map