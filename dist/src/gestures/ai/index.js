"use strict";
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
exports.IntentBasedGesture = exports.EmotionBasedGesture = exports.ContextAwareGesture = exports.AdaptiveGesture = exports.GesturePrediction = void 0;
// Types
__exportStar(require("./types"), exports);
// Components
var GesturePrediction_1 = require("./GesturePrediction");
Object.defineProperty(exports, "GesturePrediction", { enumerable: true, get: function () { return GesturePrediction_1.GesturePrediction; } });
var AdaptiveGesture_1 = require("./AdaptiveGesture");
Object.defineProperty(exports, "AdaptiveGesture", { enumerable: true, get: function () { return AdaptiveGesture_1.AdaptiveGesture; } });
var ContextAwareGesture_1 = require("./ContextAwareGesture");
Object.defineProperty(exports, "ContextAwareGesture", { enumerable: true, get: function () { return ContextAwareGesture_1.ContextAwareGesture; } });
var EmotionBasedGesture_1 = require("./EmotionBasedGesture");
Object.defineProperty(exports, "EmotionBasedGesture", { enumerable: true, get: function () { return EmotionBasedGesture_1.EmotionBasedGesture; } });
var IntentBasedGesture_1 = require("./IntentBasedGesture");
Object.defineProperty(exports, "IntentBasedGesture", { enumerable: true, get: function () { return IntentBasedGesture_1.IntentBasedGesture; } });
// Hooks
__exportStar(require("./hooks"), exports);
//# sourceMappingURL=index.js.map