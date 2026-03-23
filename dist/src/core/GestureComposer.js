"use strict";
/**
 * Gesture Composer component.
 *
 * Allows combining multiple gestures on a single view using a
 * declarative props-driven API.
 *
 * @module core/GestureComposer
 *
 * @example
 * ```tsx
 * <Gesture
 *   tap
 *   swipe="left"
 *   pinch
 *   onTap={handleTap}
 *   onSwipe={handleSwipe}
 *   onPinch={handlePinch}
 *   priority="simultaneous"
 * >
 *   <View />
 * </Gesture>
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
exports.GestureComposer = void 0;
const react_1 = __importStar(require("react"));
const react_native_gesture_handler_1 = require("react-native-gesture-handler");
const direction_1 = require("../utils/direction");
const compose_1 = require("../utils/compose");
/**
 * Map a fling direction string to RNGH direction constant.
 */
function toFlingDirectionFlag(dir) {
    // RNGH Directions constants
    const Directions = {
        RIGHT: 1,
        LEFT: 2,
        UP: 4,
        DOWN: 8,
    };
    switch (dir) {
        case 'right': return Directions.RIGHT;
        case 'left': return Directions.LEFT;
        case 'up': return Directions.UP;
        case 'down': return Directions.DOWN;
        default: return Directions.RIGHT | Directions.LEFT | Directions.UP | Directions.DOWN;
    }
}
/**
 * `<Gesture>` — A declarative gesture composer component.
 *
 * Enable gestures via boolean or value props, attach callbacks,
 * and control conflict resolution with `priority`.
 */
const GestureComposer = ({ children, enabled = true, priority = 'simultaneous', 
// Gesture flags
tap, doubleTap, longPress, swipe, pan, pinch, rotate, fling, 
// Callbacks
onTap, onDoubleTap, onLongPress, onSwipe, onPanStart, onPanMove, onPanEnd, onPinchStart, onPinch, onPinchEnd, onRotationStart, onRotation, onRotationEnd, onFling, }) => {
    const composedGesture = (0, react_1.useMemo)(() => {
        const gestures = [];
        // ── Tap ──
        if (tap && onTap) {
            const g = react_native_gesture_handler_1.Gesture.Tap()
                .onEnd((e) => {
                const event = {
                    absoluteX: e.absoluteX,
                    absoluteY: e.absoluteY,
                    x: e.x,
                    y: e.y,
                    numberOfTaps: 1,
                };
                onTap(event);
            });
            gestures.push(g);
        }
        // ── Double Tap ──
        if (doubleTap && onDoubleTap) {
            const g = react_native_gesture_handler_1.Gesture.Tap()
                .numberOfTaps(2)
                .onEnd((e) => {
                const event = {
                    absoluteX: e.absoluteX,
                    absoluteY: e.absoluteY,
                    x: e.x,
                    y: e.y,
                    numberOfTaps: 2,
                };
                onDoubleTap(event);
            });
            gestures.push(g);
        }
        // ── Long Press ──
        if (longPress && onLongPress) {
            const g = react_native_gesture_handler_1.Gesture.LongPress()
                .onEnd((e) => {
                const event = {
                    absoluteX: e.absoluteX,
                    absoluteY: e.absoluteY,
                    x: e.x,
                    y: e.y,
                    duration: e.duration,
                };
                onLongPress(event);
            });
            gestures.push(g);
        }
        // ── Swipe (via Pan) ──
        if (swipe && onSwipe) {
            const desiredDirection = typeof swipe === 'string' ? swipe : undefined;
            const SWIPE_THRESHOLD = 50;
            const VELOCITY_THRESHOLD = 300;
            const g = react_native_gesture_handler_1.Gesture.Pan()
                .onEnd((e) => {
                const vel = (0, direction_1.magnitude)(e.velocityX, e.velocityY);
                const dist = (0, direction_1.magnitude)(e.translationX, e.translationY);
                if (dist >= SWIPE_THRESHOLD && vel >= VELOCITY_THRESHOLD) {
                    const direction = (0, direction_1.detectSwipeDirection)(e.translationX, e.translationY, e.velocityX, e.velocityY);
                    if ((0, direction_1.matchesDirection)(direction, desiredDirection)) {
                        const event = {
                            absoluteX: e.absoluteX,
                            absoluteY: e.absoluteY,
                            x: e.x,
                            y: e.y,
                            direction,
                            velocity: vel,
                            distance: dist,
                        };
                        onSwipe(event);
                    }
                }
            });
            gestures.push(g);
        }
        // ── Pan ──
        if (pan && (onPanStart || onPanMove || onPanEnd)) {
            let g = react_native_gesture_handler_1.Gesture.Pan();
            if (onPanStart) {
                g = g.onStart((e) => {
                    const event = {
                        absoluteX: e.absoluteX,
                        absoluteY: e.absoluteY,
                        x: e.x,
                        y: e.y,
                        translationX: e.translationX,
                        translationY: e.translationY,
                        velocityX: e.velocityX,
                        velocityY: e.velocityY,
                    };
                    onPanStart(event);
                });
            }
            if (onPanMove) {
                g = g.onUpdate((e) => {
                    const event = {
                        absoluteX: e.absoluteX,
                        absoluteY: e.absoluteY,
                        x: e.x,
                        y: e.y,
                        translationX: e.translationX,
                        translationY: e.translationY,
                        velocityX: e.velocityX,
                        velocityY: e.velocityY,
                    };
                    onPanMove(event);
                });
            }
            if (onPanEnd) {
                g = g.onEnd((e) => {
                    const event = {
                        absoluteX: e.absoluteX,
                        absoluteY: e.absoluteY,
                        x: e.x,
                        y: e.y,
                        translationX: e.translationX,
                        translationY: e.translationY,
                        velocityX: e.velocityX,
                        velocityY: e.velocityY,
                    };
                    onPanEnd(event);
                });
            }
            gestures.push(g);
        }
        // ── Pinch ──
        if (pinch && (onPinchStart || onPinch || onPinchEnd)) {
            let g = react_native_gesture_handler_1.Gesture.Pinch();
            if (onPinchStart) {
                g = g.onStart((e) => {
                    const event = {
                        absoluteX: e.focalX,
                        absoluteY: e.focalY,
                        x: e.focalX,
                        y: e.focalY,
                        scale: e.scale,
                        velocity: e.velocity,
                        focalX: e.focalX,
                        focalY: e.focalY,
                    };
                    onPinchStart(event);
                });
            }
            if (onPinch) {
                g = g.onUpdate((e) => {
                    const event = {
                        absoluteX: e.focalX,
                        absoluteY: e.focalY,
                        x: e.focalX,
                        y: e.focalY,
                        scale: e.scale,
                        velocity: e.velocity,
                        focalX: e.focalX,
                        focalY: e.focalY,
                    };
                    onPinch(event);
                });
            }
            if (onPinchEnd) {
                g = g.onEnd((e) => {
                    const event = {
                        absoluteX: e.focalX,
                        absoluteY: e.focalY,
                        x: e.focalX,
                        y: e.focalY,
                        scale: e.scale,
                        velocity: e.velocity,
                        focalX: e.focalX,
                        focalY: e.focalY,
                    };
                    onPinchEnd(event);
                });
            }
            gestures.push(g);
        }
        // ── Rotation ──
        if (rotate && (onRotationStart || onRotation || onRotationEnd)) {
            let g = react_native_gesture_handler_1.Gesture.Rotation();
            if (onRotationStart) {
                g = g.onStart((e) => {
                    const event = {
                        absoluteX: e.anchorX,
                        absoluteY: e.anchorY,
                        x: e.anchorX,
                        y: e.anchorY,
                        rotation: e.rotation,
                        velocity: e.velocity,
                        anchorX: e.anchorX,
                        anchorY: e.anchorY,
                    };
                    onRotationStart(event);
                });
            }
            if (onRotation) {
                g = g.onUpdate((e) => {
                    const event = {
                        absoluteX: e.anchorX,
                        absoluteY: e.anchorY,
                        x: e.anchorX,
                        y: e.anchorY,
                        rotation: e.rotation,
                        velocity: e.velocity,
                        anchorX: e.anchorX,
                        anchorY: e.anchorY,
                    };
                    onRotation(event);
                });
            }
            if (onRotationEnd) {
                g = g.onEnd((e) => {
                    const event = {
                        absoluteX: e.anchorX,
                        absoluteY: e.anchorY,
                        x: e.anchorX,
                        y: e.anchorY,
                        rotation: e.rotation,
                        velocity: e.velocity,
                        anchorX: e.anchorX,
                        anchorY: e.anchorY,
                    };
                    onRotationEnd(event);
                });
            }
            gestures.push(g);
        }
        // ── Fling ──
        if (fling && onFling) {
            const flingDir = typeof fling === 'string' ? fling : undefined;
            const dirFlag = toFlingDirectionFlag(flingDir);
            const g = react_native_gesture_handler_1.Gesture.Fling()
                .direction(dirFlag)
                .onEnd((e) => {
                const event = {
                    absoluteX: e.absoluteX,
                    absoluteY: e.absoluteY,
                    x: e.x,
                    y: e.y,
                    direction: flingDir || 'right',
                };
                onFling(event);
            });
            gestures.push(g);
        }
        // ── Compose ──
        if (gestures.length === 0) {
            // Return a no-op tap gesture when nothing is enabled
            return react_native_gesture_handler_1.Gesture.Tap().enabled(false);
        }
        const composed = (0, compose_1.composeGestures)(gestures, priority);
        if (!enabled) {
            return composed.enabled(false);
        }
        return composed;
    }, [
        enabled, priority,
        tap, doubleTap, longPress, swipe, pan, pinch, rotate, fling,
        onTap, onDoubleTap, onLongPress, onSwipe,
        onPanStart, onPanMove, onPanEnd,
        onPinchStart, onPinch, onPinchEnd,
        onRotationStart, onRotation, onRotationEnd,
        onFling,
    ]);
    return (<react_native_gesture_handler_1.GestureDetector gesture={composedGesture}>
      {children}
    </react_native_gesture_handler_1.GestureDetector>);
};
exports.GestureComposer = GestureComposer;
exports.GestureComposer.displayName = 'Gesture';
//# sourceMappingURL=GestureComposer.js.map