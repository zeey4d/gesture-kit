"use strict";
/**
 * TapGesture — A component that detects single or multi-tap gestures.
 *
 * @example
 * ```tsx
 * <TapGesture onTap={(e) => console.log('Tapped!', e)}>
 *   <View style={styles.box} />
 * </TapGesture>
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
exports.TapGesture = void 0;
const react_1 = __importStar(require("react"));
const react_native_gesture_handler_1 = require("react-native-gesture-handler");
const TapGesture = ({ children, onTap, numberOfTaps = 1, maxDuration, maxDistance, enabled = true, }) => {
    const gesture = (0, react_1.useMemo)(() => {
        let g = react_native_gesture_handler_1.Gesture.Tap().numberOfTaps(numberOfTaps);
        if (maxDuration !== undefined) {
            g = g.maxDuration(maxDuration);
        }
        if (maxDistance !== undefined) {
            g = g.maxDistance(maxDistance);
        }
        g = g.onEnd((e) => {
            const event = {
                absoluteX: e.absoluteX,
                absoluteY: e.absoluteY,
                x: e.x,
                y: e.y,
                numberOfTaps,
            };
            onTap(event);
        });
        return g.enabled(enabled);
    }, [onTap, numberOfTaps, maxDuration, maxDistance, enabled]);
    return (<react_native_gesture_handler_1.GestureDetector gesture={gesture}>
      {children}
    </react_native_gesture_handler_1.GestureDetector>);
};
exports.TapGesture = TapGesture;
exports.TapGesture.displayName = 'TapGesture';
//# sourceMappingURL=TapGesture.js.map