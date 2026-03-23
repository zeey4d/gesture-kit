"use strict";
/**
 * Body Pose Gesture - Detects full body poses
 * @module gestures
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BodyPoseGesture = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const BodyPoseGesture = ({ children, enabled = true, ...rest }) => {
    // TODO: Implement Body Pose Gesture logic
    return <react_native_1.View {...rest}>{children}</react_native_1.View>;
};
exports.BodyPoseGesture = BodyPoseGesture;
exports.BodyPoseGesture.displayName = 'BodyPoseGesture';
//# sourceMappingURL=BodyPoseGesture.js.map