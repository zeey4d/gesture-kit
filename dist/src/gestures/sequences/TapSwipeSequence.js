"use strict";
/**
 * Tap Swipe Sequence - Detects tap then swipe
 * @module gestures
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TapSwipeSequence = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const TapSwipeSequence = ({ children, enabled = true, ...rest }) => {
    // TODO: Implement Tap Swipe Sequence logic
    return <react_native_1.View {...rest}>{children}</react_native_1.View>;
};
exports.TapSwipeSequence = TapSwipeSequence;
exports.TapSwipeSequence.displayName = 'TapSwipeSequence';
//# sourceMappingURL=TapSwipeSequence.js.map