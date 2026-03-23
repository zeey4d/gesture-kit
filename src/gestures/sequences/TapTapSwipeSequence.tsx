/**
 * Tap Tap Swipe Sequence - Detects tap tap then swipe
 * @module gestures
 */

import React from 'react';
import { View } from 'react-native';

export interface TapTapSwipeSequenceProps {
  children: React.ReactNode;
  enabled?: boolean;
  [key: string]: any;
}

export const TapTapSwipeSequence: React.FC<TapTapSwipeSequenceProps> = ({ children, enabled = true, ...rest }) => {
  // TODO: Implement Tap Tap Swipe Sequence logic
  return <View {...rest}>{children}</View>;
};

TapTapSwipeSequence.displayName = 'TapTapSwipeSequence';
