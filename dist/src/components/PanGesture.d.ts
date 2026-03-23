/**
 * PanGesture — A component that detects continuous drag/pan gestures.
 *
 * @example
 * ```tsx
 * <PanGesture
 *   onPanMove={(e) => console.log('Panning', e.translationX, e.translationY)}
 *   onPanEnd={(e) => console.log('Pan ended')}
 * >
 *   <View style={styles.draggable} />
 * </PanGesture>
 * ```
 */
import React from 'react';
import type { PanGestureProps } from '../types';
export declare const PanGesture: React.FC<PanGestureProps>;
//# sourceMappingURL=PanGesture.d.ts.map