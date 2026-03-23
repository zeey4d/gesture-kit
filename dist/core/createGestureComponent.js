"use strict";
/**
 * Factory function to create gesture components.
 *
 * This is the foundation of the library's extensibility — any gesture
 * recognizer can be wrapped into a declarative React component.
 *
 * @module core/createGestureComponent
 *
 * @example
 * ```tsx
 * const TripleTapGesture = createGestureComponent({
 *   name: 'TripleTapGesture',
 *   createGesture: (props) =>
 *     Gesture.Tap()
 *       .numberOfTaps(3)
 *       .onEnd(() => props.onTripleTap()),
 * });
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
exports.createGestureComponent = createGestureComponent;
const react_1 = __importStar(require("react"));
const react_native_gesture_handler_1 = require("react-native-gesture-handler");
/**
 * Create a gesture component from a configuration object.
 *
 * @param config - The component name and gesture factory function.
 * @returns A React component that wraps its children in a GestureDetector.
 */
function createGestureComponent(config) {
    const GestureComponent = (props) => {
        const { children, enabled = true, ...gestureProps } = props;
        const gesture = (0, react_1.useMemo)(() => {
            const g = config.createGesture(props);
            if (!enabled) {
                return g.enabled(false);
            }
            return g;
            // We spread all gestureProps into the dependency array
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [enabled, ...Object.values(gestureProps)]);
        return (<react_native_gesture_handler_1.GestureDetector gesture={gesture}>
        {children}
      </react_native_gesture_handler_1.GestureDetector>);
    };
    GestureComponent.displayName = config.name;
    return GestureComponent;
}
//# sourceMappingURL=createGestureComponent.js.map