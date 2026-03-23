"use strict";
/**
 * Tap Tap Swipe Sequence - Detects tap tap then swipe
 * @module gestures
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TapTapSwipeSequence = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const TapTapSwipeSequence = ({ children, enabled = true, ...rest }) => {
    // TODO: Implement Tap Tap Swipe Sequence logic
    return <react_native_1.View {...rest}>{children}</react_native_1.View>;
};
exports.TapTapSwipeSequence = TapTapSwipeSequence;
exports.TapTapSwipeSequence.displayName = 'TapTapSwipeSequence';
//# sourceMappingURL=TapTapSwipeSequence.js.map