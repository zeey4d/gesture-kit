"use strict";
/**
 * PanGesture — A component that detects continuous drag/pan gestures.
 *
 * @example
 * ```tsx
 * <PanGesture
 *   onPanMove={(e) => console.log('Panning', e.translationX, e.translationY)}
 *   onPanEnd={(e) => console.log('Pan ended')}
 * >
 *   <View style={styles.draggable} />
 * </PanGesture>
 * ```
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
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.PanGesture = void 0;
const react_1 = __importStar(require("react"));
const react_native_gesture_handler_1 = require("react-native-gesture-handler");
/** Map RNGH Pan event to our PanEvent */
function toPanEvent(e) {
    return {
        absoluteX: e.absoluteX,
        absoluteY: e.absoluteY,
        x: e.x,
        y: e.y,
        translationX: e.translationX,
        translationY: e.translationY,
        velocityX: e.velocityX,
        velocityY: e.velocityY,
    };
}
const PanGesture = ({ children, onPanStart, onPanMove, onPanEnd, minDistance = 10, minPointers, maxPointers, enabled = true, }) => {
    const gesture = (0, react_1.useMemo)(() => {
        let g = react_native_gesture_handler_1.Gesture.Pan().minDistance(minDistance);
        if (minPointers !== undefined) {
            g = g.minPointers(minPointers);
        }
        if (maxPointers !== undefined) {
            g = g.maxPointers(maxPointers);
        }
        if (onPanStart) {
            g = g.onStart((e) => onPanStart(toPanEvent(e)));
        }
        if (onPanMove) {
            g = g.onUpdate((e) => onPanMove(toPanEvent(e)));
        }
        if (onPanEnd) {
            g = g.onEnd((e) => onPanEnd(toPanEvent(e)));
        }
        return g.enabled(enabled);
    }, [onPanStart, onPanMove, onPanEnd, minDistance, minPointers, maxPointers, enabled]);
    return (<react_native_gesture_handler_1.GestureDetector gesture={gesture}>
      {children}
    </react_native_gesture_handler_1.GestureDetector>);
};
exports.PanGesture = PanGesture;
exports.PanGesture.displayName = 'PanGesture';
//# sourceMappingURL=PanGesture.js.map