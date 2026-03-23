/**
 * useTap — Hook that returns a configured Tap gesture.
 *
 * @example
 * ```tsx
 * const tapGesture = useTap({ onTap: (e) => console.log('Tapped!') });
 * return <GestureDetector gesture={tapGesture}><View /></GestureDetector>;
 * ```
 */
import type { UseTapOptions } from '../types';
export declare function useTap(options: UseTapOptions): import("react-native-gesture-handler/lib/typescript/handlers/gestures/tapGesture").TapGesture;
//# sourceMappingURL=useTap.d.ts.map