"use strict";
/**
 * Core gesture types and interfaces for react-native-gesture-kit.
 *
 * @module types/gestures
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.GestureState = void 0;
// ─── Enums ────────────────────────────────────────────────────────────────────
/** All possible states of a gesture recognizer */
var GestureState;
(function (GestureState) {
    GestureState[GestureState["UNDETERMINED"] = 0] = "UNDETERMINED";
    GestureState[GestureState["BEGAN"] = 1] = "BEGAN";
    GestureState[GestureState["ACTIVE"] = 2] = "ACTIVE";
    GestureState[GestureState["END"] = 3] = "END";
    GestureState[GestureState["CANCELLED"] = 4] = "CANCELLED";
    GestureState[GestureState["FAILED"] = 5] = "FAILED";
})(GestureState || (exports.GestureState = GestureState = {}));
//# sourceMappingURL=gestures.js.map