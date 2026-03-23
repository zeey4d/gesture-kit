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
import React from 'react';
import { type GestureType } from 'react-native-gesture-handler';
interface CreateGestureComponentConfig<P> {
    /** Display name for React DevTools */
    name: string;
    /** Create the RNGH gesture from the provided props */
    createGesture: (props: P) => GestureType;
}
/**
 * Create a gesture component from a configuration object.
 *
 * @param config - The component name and gesture factory function.
 * @returns A React component that wraps its children in a GestureDetector.
 */
export declare function createGestureComponent<P extends {
    enabled?: boolean;
    children: React.ReactNode;
}>(config: CreateGestureComponentConfig<P>): React.FC<P>;
export {};
//# sourceMappingURL=createGestureComponent.d.ts.map