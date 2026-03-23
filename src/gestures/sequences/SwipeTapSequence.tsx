/**
 * Swipe Tap Sequence - Detects swipe then tap
 * @module gestures
 */

import React from 'react';
import { View } from 'react-native';

export interface SwipeTapSequenceProps {
  children: React.ReactNode;
  enabled?: boolean;
  [key: string]: any;
}

export const SwipeTapSequence: React.FC<SwipeTapSequenceProps> = ({ children, enabled = true, ...rest }) => {
  // TODO: Implement Swipe Tap Sequence logic
  return <View {...rest}>{children}</View>;
};

SwipeTapSequence.displayName = 'SwipeTapSequence';
