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
exports.PressForceGesture = exports.TapCancelGesture = exports.TapAndHoldGesture = exports.VeryLongPressGesture = exports.LongPressGesture = exports.QuadTapGesture = exports.TripleTapGesture = exports.DoubleTapGesture = exports.TapGesture = void 0;
// Basic Touch Gestures
__exportStar(require("./types"), exports);
// Components
var TapGesture_1 = require("./TapGesture");
Object.defineProperty(exports, "TapGesture", { enumerable: true, get: function () { return TapGesture_1.TapGesture; } });
var DoubleTapGesture_1 = require("./DoubleTapGesture");
Object.defineProperty(exports, "DoubleTapGesture", { enumerable: true, get: function () { return DoubleTapGesture_1.DoubleTapGesture; } });
var TripleTapGesture_1 = require("./TripleTapGesture");
Object.defineProperty(exports, "TripleTapGesture", { enumerable: true, get: function () { return TripleTapGesture_1.TripleTapGesture; } });
var QuadTapGesture_1 = require("./QuadTapGesture");
Object.defineProperty(exports, "QuadTapGesture", { enumerable: true, get: function () { return QuadTapGesture_1.QuadTapGesture; } });
var LongPressGesture_1 = require("./LongPressGesture");
Object.defineProperty(exports, "LongPressGesture", { enumerable: true, get: function () { return LongPressGesture_1.LongPressGesture; } });
var VeryLongPressGesture_1 = require("./VeryLongPressGesture");
Object.defineProperty(exports, "VeryLongPressGesture", { enumerable: true, get: function () { return VeryLongPressGesture_1.VeryLongPressGesture; } });
var TapAndHoldGesture_1 = require("./TapAndHoldGesture");
Object.defineProperty(exports, "TapAndHoldGesture", { enumerable: true, get: function () { return TapAndHoldGesture_1.TapAndHoldGesture; } });
var TapCancelGesture_1 = require("./TapCancelGesture");
Object.defineProperty(exports, "TapCancelGesture", { enumerable: true, get: function () { return TapCancelGesture_1.TapCancelGesture; } });
var PressForceGesture_1 = require("./PressForceGesture");
Object.defineProperty(exports, "PressForceGesture", { enumerable: true, get: function () { return PressForceGesture_1.PressForceGesture; } });
// Hooks
__exportStar(require("./hooks"), exports);
//# sourceMappingURL=index.js.map