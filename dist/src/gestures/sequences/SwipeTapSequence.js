"use strict";
/**
 * Swipe Tap Sequence - Detects swipe then tap
 * @module gestures
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwipeTapSequence = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const SwipeTapSequence = ({ children, enabled = true, ...rest }) => {
    // TODO: Implement Swipe Tap Sequence logic
    return <react_native_1.View {...rest}>{children}</react_native_1.View>;
};
exports.SwipeTapSequence = SwipeTapSequence;
exports.SwipeTapSequence.displayName = 'SwipeTapSequence';
//# sourceMappingURL=SwipeTapSequence.js.map