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
import type { GestureType } from 'react-native-gesture-handler';
import type { UseGestureOptions } from '../types';
export declare function useGesture(options: UseGestureOptions): GestureType;
//# sourceMappingURL=useGesture.d.ts.map