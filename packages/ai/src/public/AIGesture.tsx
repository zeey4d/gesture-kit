/**
 * AIGesture — optional wrapper component.
 * Uses GestureDetector from RNGH to attach the gesture to a View.
 *
 * @example
 * ```tsx
 * const gesture = useAIGesture({ onGesture: (r) => console.log(r) });
 * return (
 *   <AIGesture gesture={gesture}>
 *     <View><Text>Interact with me!</Text></View>
 *   </AIGesture>
 * );
 * ```
 */

import React from 'react';
import { View } from 'react-native';
import type { ViewStyle } from 'react-native';
import { GestureDetector } from 'react-native-gesture-handler';
import type { AIGestureHandle, AIGestureConfig } from './types';
import { useAIGesture } from './useAIGesture';

// ── Props ─────────────────────────────────────────────────────────

export interface AIGestureProps extends AIGestureConfig {
  /** Children that will receive the gesture */
  children: React.ReactNode;
  /** Style for the wrapping View */
  style?: ViewStyle;
  /**
   * Pre-created gesture handle from useAIGesture.
   * If provided, the component uses this instead of creating its own.
   */
  gesture?: AIGestureHandle;
}

// ── Component ─────────────────────────────────────────────────────

export const AIGesture: React.FC<AIGestureProps> = ({
  children,
  style,
  gesture: externalGesture,
  ...config
}) => {
  // Use external gesture if provided, otherwise create one internally
  const internalGesture = useAIGesture(externalGesture ? {} : config);
  const handle = externalGesture ?? internalGesture;

  return (
    <GestureDetector gesture={handle.gesture}>
      <View style={style}>{children}</View>
    </GestureDetector>
  );
};

AIGesture.displayName = 'AIGesture';
