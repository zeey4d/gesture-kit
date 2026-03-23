"use strict";
/**
 * Example: Basic Usage of react-native-gesture-kit
 *
 * Demonstrates all core gesture components and the Gesture composer.
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
exports.default = BasicUsage;
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const react_native_gesture_handler_1 = require("react-native-gesture-handler");
const react_native_gesture_kit_1 = require("react-native-gesture-kit");
function BasicUsage() {
    const [tapCount, setTapCount] = (0, react_1.useState)(0);
    const [lastSwipe, setLastSwipe] = (0, react_1.useState)('None');
    const [panPosition, setPanPosition] = (0, react_1.useState)({ x: 0, y: 0 });
    const [scale, setScale] = (0, react_1.useState)(1);
    const [rotation, setRotation] = (0, react_1.useState)(0);
    // ─── Individual Gesture Components ──────────────────────────────────
    const handleTap = (0, react_1.useCallback)(() => {
        setTapCount((c) => c + 1);
    }, []);
    const handleDoubleTap = (0, react_1.useCallback)((e) => {
        react_native_1.Alert.alert('Double Tap!', `At (${Math.round(e.x)}, ${Math.round(e.y)})`);
    }, []);
    const handleLongPress = (0, react_1.useCallback)((e) => {
        react_native_1.Alert.alert('Long Press!', `Duration: ${Math.round(e.duration)}ms`);
    }, []);
    const handleSwipe = (0, react_1.useCallback)((e) => {
        setLastSwipe(`${e.direction} (${Math.round(e.velocity)}px/s)`);
    }, []);
    const handlePanMove = (0, react_1.useCallback)((e) => {
        setPanPosition({ x: e.translationX, y: e.translationY });
    }, []);
    const handlePinch = (0, react_1.useCallback)((e) => {
        setScale(e.scale);
    }, []);
    const handleRotation = (0, react_1.useCallback)((e) => {
        setRotation(e.rotation);
    }, []);
    return (<react_native_gesture_handler_1.GestureHandlerRootView style={styles.container}>
      <react_native_1.Text style={styles.title}>react-native-gesture-kit Demo</react_native_1.Text>

      {/* ── Tap ── */}
      <react_native_gesture_kit_1.TapGesture onTap={handleTap}>
        <react_native_1.View style={styles.box}>
          <react_native_1.Text style={styles.boxText}>Tap Me</react_native_1.Text>
          <react_native_1.Text style={styles.boxSubtext}>Count: {tapCount}</react_native_1.Text>
        </react_native_1.View>
      </react_native_gesture_kit_1.TapGesture>

      {/* ── Double Tap ── */}
      <react_native_gesture_kit_1.DoubleTapGesture onDoubleTap={handleDoubleTap}>
        <react_native_1.View style={[styles.box, styles.boxBlue]}>
          <react_native_1.Text style={styles.boxText}>Double Tap</react_native_1.Text>
        </react_native_1.View>
      </react_native_gesture_kit_1.DoubleTapGesture>

      {/* ── Long Press ── */}
      <react_native_gesture_kit_1.LongPressGesture onLongPress={handleLongPress} minDuration={800}>
        <react_native_1.View style={[styles.box, styles.boxGreen]}>
          <react_native_1.Text style={styles.boxText}>Long Press (800ms)</react_native_1.Text>
        </react_native_1.View>
      </react_native_gesture_kit_1.LongPressGesture>

      {/* ── Swipe ── */}
      <react_native_gesture_kit_1.SwipeRightGesture onSwipeRight={handleSwipe}>
        <react_native_1.View style={[styles.box, styles.boxOrange]}>
          <react_native_1.Text style={styles.boxText}>Swipe Right</react_native_1.Text>
          <react_native_1.Text style={styles.boxSubtext}>Last: {lastSwipe}</react_native_1.Text>
        </react_native_1.View>
      </react_native_gesture_kit_1.SwipeRightGesture>

      {/* ── Pan ── */}
      <react_native_gesture_kit_1.PanGesture onPanMove={handlePanMove}>
        <react_native_1.View style={[
            styles.box,
            styles.boxPurple,
            { transform: [{ translateX: panPosition.x }, { translateY: panPosition.y }] },
        ]}>
          <react_native_1.Text style={styles.boxText}>Drag Me</react_native_1.Text>
        </react_native_1.View>
      </react_native_gesture_kit_1.PanGesture>

      {/* ── Pinch ── */}
      <react_native_gesture_kit_1.PinchGesture onPinch={handlePinch}>
        <react_native_1.View style={[styles.box, styles.boxPink, { transform: [{ scale }] }]}>
          <react_native_1.Text style={styles.boxText}>Pinch Zoom</react_native_1.Text>
        </react_native_1.View>
      </react_native_gesture_kit_1.PinchGesture>

      {/* ── Rotation ── */}
      <react_native_gesture_kit_1.RotationGesture onRotation={handleRotation}>
        <react_native_1.View style={[
            styles.box,
            styles.boxTeal,
            { transform: [{ rotate: `${rotation}rad` }] },
        ]}>
          <react_native_1.Text style={styles.boxText}>Rotate</react_native_1.Text>
        </react_native_1.View>
      </react_native_gesture_kit_1.RotationGesture>

      {/* ── Gesture Composer ── */}
      <react_native_gesture_kit_1.Gesture tap swipe="left" pinch onTap={() => console.log('Composed: Tap')} onSwipe={(e) => console.log('Composed: Swipe', e.direction)} onPinch={(e) => console.log('Composed: Pinch', e.scale)} priority="simultaneous">
        <react_native_1.View style={[styles.box, styles.boxComposer]}>
          <react_native_1.Text style={styles.boxText}>Gesture Composer</react_native_1.Text>
          <react_native_1.Text style={styles.boxSubtext}>Tap + Swipe + Pinch</react_native_1.Text>
        </react_native_1.View>
      </react_native_gesture_kit_1.Gesture>
    </react_native_gesture_handler_1.GestureHandlerRootView>);
}
const styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#0a0a0a',
        alignItems: 'center',
        gap: 12,
    },
    title: {
        fontSize: 22,
        fontWeight: '700',
        color: '#fff',
        marginBottom: 8,
    },
    box: {
        width: 280,
        height: 72,
        borderRadius: 16,
        backgroundColor: '#1a1a2e',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#333',
    },
    boxBlue: { backgroundColor: '#16213e' },
    boxGreen: { backgroundColor: '#0f3d0f' },
    boxOrange: { backgroundColor: '#3d2a0f' },
    boxPurple: { backgroundColor: '#2d1a4e' },
    boxPink: { backgroundColor: '#3d0f2a' },
    boxTeal: { backgroundColor: '#0f3d3d' },
    boxComposer: { backgroundColor: '#1a3d1a', borderColor: '#4ade80' },
    boxText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#e0e0e0',
    },
    boxSubtext: {
        fontSize: 12,
        color: '#888',
        marginTop: 2,
    },
});
//# sourceMappingURL=BasicUsage.js.map