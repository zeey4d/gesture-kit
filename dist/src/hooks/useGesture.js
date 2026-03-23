"use strict";
/**
 * useGesture — Compose multiple gestures together programmatically.
 *
 * This is the hook equivalent of the `<Gesture>` component.
 *
 * @example
 * ```tsx
 * const gesture = useGesture({
 *   tap:   { onTap: handleTap },
 *   swipe: { onSwipe: handleSwipe, direction: 'left' },
 *   pinch: { onPinch: handlePinch },
 *   priority: 'simultaneous',
 * });
 *
 * return <GestureDetector gesture={gesture}><View /></GestureDetector>;
 * ```
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGesture = useGesture;
const react_1 = require("react");
const compose_1 = require("../utils/compose");
const useTap_1 = require("./useTap");
const useDoubleTap_1 = require("./useDoubleTap");
const useLongPress_1 = require("./useLongPress");
const useSwipe_1 = require("./useSwipe");
const usePan_1 = require("./usePan");
const usePinch_1 = require("./usePinch");
const useRotation_1 = require("./useRotation");
const useFling_1 = require("./useFling");
function useGesture(options) {
    const { priority = 'simultaneous' } = options;
    // Create individual gestures conditionally
    const tapGesture = options.tap
        ? (0, useTap_1.useTap)(options.tap)
        : null;
    const doubleTapGesture = options.doubleTap
        ? (0, useDoubleTap_1.useDoubleTap)(options.doubleTap)
        : null;
    const longPressGesture = options.longPress
        ? (0, useLongPress_1.useLongPress)(options.longPress)
        : null;
    const swipeGesture = options.swipe
        ? (0, useSwipe_1.useSwipe)(options.swipe)
        : null;
    const panGesture = options.pan
        ? (0, usePan_1.usePan)(options.pan)
        : null;
    const pinchGesture = options.pinch
        ? (0, usePinch_1.usePinch)(options.pinch)
        : null;
    const rotationGesture = options.rotation
        ? (0, useRotation_1.useRotation)(options.rotation)
        : null;
    const flingGesture = options.fling
        ? (0, useFling_1.useFling)(options.fling)
        : null;
    return (0, react_1.useMemo)(() => {
        const gestures = [];
        if (tapGesture)
            gestures.push(tapGesture);
        if (doubleTapGesture)
            gestures.push(doubleTapGesture);
        if (longPressGesture)
            gestures.push(longPressGesture);
        if (swipeGesture)
            gestures.push(swipeGesture);
        if (panGesture)
            gestures.push(panGesture);
        if (pinchGesture)
            gestures.push(pinchGesture);
        if (rotationGesture)
            gestures.push(rotationGesture);
        if (flingGesture)
            gestures.push(flingGesture);
        if (gestures.length === 0) {
            throw new Error('[react-native-gesture-kit] useGesture requires at least one gesture config.');
        }
        return (0, compose_1.composeGestures)(gestures, priority);
    }, [
        tapGesture, doubleTapGesture, longPressGesture, swipeGesture,
        panGesture, pinchGesture, rotationGesture, flingGesture, priority,
    ]);
}
//# sourceMappingURL=useGesture.js.map