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
import type { UseGestureOptions } from '../types';
import { type AnyGesture } from '../utils/compose';
export declare function useGesture(options: UseGestureOptions): AnyGesture;
//# sourceMappingURL=useGesture.d.ts.map