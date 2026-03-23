"use strict";
/**
 * Swipe Rotate Sequence - Detects swipe then rotate
 * @module gestures
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwipeRotateSequence = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const SwipeRotateSequence = ({ children, enabled = true, ...rest }) => {
    // TODO: Implement Swipe Rotate Sequence logic
    return <react_native_1.View {...rest}>{children}</react_native_1.View>;
};
exports.SwipeRotateSequence = SwipeRotateSequence;
exports.SwipeRotateSequence.displayName = 'SwipeRotateSequence';
//# sourceMappingURL=SwipeRotateSequence.js.map