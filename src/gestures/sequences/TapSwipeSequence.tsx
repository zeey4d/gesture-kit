/**
 * Tap Swipe Sequence - Detects tap then swipe
 * @module gestures
 */

import React from 'react';
import { View } from 'react-native';

export interface TapSwipeSequenceProps {
  children: React.ReactNode;
  enabled?: boolean;
  [key: string]: any;
}

export const TapSwipeSequence: React.FC<TapSwipeSequenceProps> = ({ children, enabled = true, ...rest }) => {
  // TODO: Implement Tap Swipe Sequence logic
  return <View {...rest}>{children}</View>;
};

TapSwipeSequence.displayName = 'TapSwipeSequence';
