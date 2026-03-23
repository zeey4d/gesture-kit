"use strict";
/**
 * react-native-gesture-kit
 *
 * A modern, declarative gesture component library for React Native.
 *
 * @packageDocumentation
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.composeGestures = exports.magnitude = exports.matchesDirection = exports.detectSwipeDirection = exports.createGestureComponent = exports.Gesture = exports.GestureComposer = void 0;
// ─── Types ────────────────────────────────────────────────────────────────────
__exportStar(require("./types"), exports);
__exportStar(require("./gestures/basic-touch/types"), exports);
__exportStar(require("./gestures/drag-pan/types"), exports);
__exportStar(require("./gestures/multi-finger/types"), exports);
__exportStar(require("./gestures/transform/types"), exports);
__exportStar(require("./gestures/drawing/types"), exports);
__exportStar(require("./gestures/sequences/types"), exports);
__exportStar(require("./gestures/sensor/types"), exports);
__exportStar(require("./gestures/proximity/types"), exports);
__exportStar(require("./gestures/air/types"), exports);
__exportStar(require("./gestures/body/types"), exports);
__exportStar(require("./gestures/stylus/types"), exports);
__exportStar(require("./gestures/hybrid/types"), exports);
__exportStar(require("./gestures/ai/types"), exports);
// ─── All Gestures & Hooks ─────────────────────────────────────────────────────
__exportStar(require("./gestures"), exports);
// ─── Core ─────────────────────────────────────────────────────────────────────
var GestureComposer_1 = require("./core/GestureComposer");
Object.defineProperty(exports, "GestureComposer", { enumerable: true, get: function () { return GestureComposer_1.GestureComposer; } });
Object.defineProperty(exports, "Gesture", { enumerable: true, get: function () { return GestureComposer_1.GestureComposer; } });
var createGestureComponent_1 = require("./core/createGestureComponent");
Object.defineProperty(exports, "createGestureComponent", { enumerable: true, get: function () { return createGestureComponent_1.createGestureComponent; } });
// ─── Utilities ────────────────────────────────────────────────────────────────
var direction_1 = require("./utils/direction");
Object.defineProperty(exports, "detectSwipeDirection", { enumerable: true, get: function () { return direction_1.detectSwipeDirection; } });
Object.defineProperty(exports, "matchesDirection", { enumerable: true, get: function () { return direction_1.matchesDirection; } });
Object.defineProperty(exports, "magnitude", { enumerable: true, get: function () { return direction_1.magnitude; } });
var compose_1 = require("./utils/compose");
Object.defineProperty(exports, "composeGestures", { enumerable: true, get: function () { return compose_1.composeGestures; } });
//# sourceMappingURL=index.js.map