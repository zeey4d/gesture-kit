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
exports.MultiHandGesture = exports.AirDrawGesture = exports.AirRotateGesture = exports.AirPinchGesture = exports.AirTapGesture = exports.AirSwipeGesture = exports.HandWaveGesture = void 0;
// Types
__exportStar(require("./types"), exports);
// Components
var HandWaveGesture_1 = require("./HandWaveGesture");
Object.defineProperty(exports, "HandWaveGesture", { enumerable: true, get: function () { return HandWaveGesture_1.HandWaveGesture; } });
var AirSwipeGesture_1 = require("./AirSwipeGesture");
Object.defineProperty(exports, "AirSwipeGesture", { enumerable: true, get: function () { return AirSwipeGesture_1.AirSwipeGesture; } });
var AirTapGesture_1 = require("./AirTapGesture");
Object.defineProperty(exports, "AirTapGesture", { enumerable: true, get: function () { return AirTapGesture_1.AirTapGesture; } });
var AirPinchGesture_1 = require("./AirPinchGesture");
Object.defineProperty(exports, "AirPinchGesture", { enumerable: true, get: function () { return AirPinchGesture_1.AirPinchGesture; } });
var AirRotateGesture_1 = require("./AirRotateGesture");
Object.defineProperty(exports, "AirRotateGesture", { enumerable: true, get: function () { return AirRotateGesture_1.AirRotateGesture; } });
var AirDrawGesture_1 = require("./AirDrawGesture");
Object.defineProperty(exports, "AirDrawGesture", { enumerable: true, get: function () { return AirDrawGesture_1.AirDrawGesture; } });
var MultiHandGesture_1 = require("./MultiHandGesture");
Object.defineProperty(exports, "MultiHandGesture", { enumerable: true, get: function () { return MultiHandGesture_1.MultiHandGesture; } });
// Hooks
__exportStar(require("./hooks"), exports);
//# sourceMappingURL=index.js.map