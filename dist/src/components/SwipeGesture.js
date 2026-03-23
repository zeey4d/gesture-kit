"use strict";
/**
 * SwipeGesture — A component that detects swipe gestures in any or a specific direction.
 *
 * Internally uses a Pan gesture with threshold/velocity analysis to
 * determine when a pan constitutes a swipe.
 *
 * @example
 * ```tsx
 * <SwipeGesture direction="left" onSwipe={(e) => console.log('Swiped left!', e)}>
 *   <Card />
 * </SwipeGesture>
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
exports.SwipeGesture = void 0;
const react_1 = __importStar(require("react"));
const react_native_gesture_handler_1 = require("react-native-gesture-handler");
const direction_1 = require("../utils/direction");
const SwipeGesture = ({ children, onSwipe, direction, threshold = 50, velocityThreshold = 300, enabled = true, }) => {
    const gesture = (0, react_1.useMemo)(() => {
        const g = react_native_gesture_handler_1.Gesture.Pan()
            .onEnd((e) => {
            const vel = (0, direction_1.magnitude)(e.velocityX, e.velocityY);
            const dist = (0, direction_1.magnitude)(e.translationX, e.translationY);
            if (dist >= threshold && vel >= velocityThreshold) {
                const detected = (0, direction_1.detectSwipeDirection)(e.translationX, e.translationY, e.velocityX, e.velocityY);
                if ((0, direction_1.matchesDirection)(detected, direction)) {
                    const event = {
                        absoluteX: e.absoluteX,
                        absoluteY: e.absoluteY,
                        x: e.x,
                        y: e.y,
                        direction: detected,
                        velocity: vel,
                        distance: dist,
                    };
                    onSwipe(event);
                }
            }
        });
        return g.enabled(enabled);
    }, [onSwipe, direction, threshold, velocityThreshold, enabled]);
    return (<react_native_gesture_handler_1.GestureDetector gesture={gesture}>
      {children}
    </react_native_gesture_handler_1.GestureDetector>);
};
exports.SwipeGesture = SwipeGesture;
exports.SwipeGesture.displayName = 'SwipeGesture';
//# sourceMappingURL=SwipeGesture.js.map