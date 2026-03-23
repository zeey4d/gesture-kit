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
exports.FingerGatherGesture = exports.FingerSpreadGesture = exports.MultiFingerDragGesture = exports.ThreeFingerSwipeGesture = exports.TwoFingerSwipeGesture = exports.FourFingerTapGesture = exports.ThreeFingerTapGesture = exports.TwoFingerTapGesture = void 0;
// Types
__exportStar(require("./types"), exports);
// Components
var TwoFingerTapGesture_1 = require("./TwoFingerTapGesture");
Object.defineProperty(exports, "TwoFingerTapGesture", { enumerable: true, get: function () { return TwoFingerTapGesture_1.TwoFingerTapGesture; } });
var ThreeFingerTapGesture_1 = require("./ThreeFingerTapGesture");
Object.defineProperty(exports, "ThreeFingerTapGesture", { enumerable: true, get: function () { return ThreeFingerTapGesture_1.ThreeFingerTapGesture; } });
var FourFingerTapGesture_1 = require("./FourFingerTapGesture");
Object.defineProperty(exports, "FourFingerTapGesture", { enumerable: true, get: function () { return FourFingerTapGesture_1.FourFingerTapGesture; } });
var TwoFingerSwipeGesture_1 = require("./TwoFingerSwipeGesture");
Object.defineProperty(exports, "TwoFingerSwipeGesture", { enumerable: true, get: function () { return TwoFingerSwipeGesture_1.TwoFingerSwipeGesture; } });
var ThreeFingerSwipeGesture_1 = require("./ThreeFingerSwipeGesture");
Object.defineProperty(exports, "ThreeFingerSwipeGesture", { enumerable: true, get: function () { return ThreeFingerSwipeGesture_1.ThreeFingerSwipeGesture; } });
var MultiFingerDragGesture_1 = require("./MultiFingerDragGesture");
Object.defineProperty(exports, "MultiFingerDragGesture", { enumerable: true, get: function () { return MultiFingerDragGesture_1.MultiFingerDragGesture; } });
var FingerSpreadGesture_1 = require("./FingerSpreadGesture");
Object.defineProperty(exports, "FingerSpreadGesture", { enumerable: true, get: function () { return FingerSpreadGesture_1.FingerSpreadGesture; } });
var FingerGatherGesture_1 = require("./FingerGatherGesture");
Object.defineProperty(exports, "FingerGatherGesture", { enumerable: true, get: function () { return FingerGatherGesture_1.FingerGatherGesture; } });
// Hooks
__exportStar(require("./hooks"), exports);
//# sourceMappingURL=index.js.map