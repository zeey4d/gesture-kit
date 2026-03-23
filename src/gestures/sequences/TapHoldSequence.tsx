/**
 * Tap Hold Sequence - Detects tap then hold
 * @module gestures
 */

import React from 'react';
import { View } from 'react-native';

export interface TapHoldSequenceProps {
  children: React.ReactNode;
  enabled?: boolean;
  [key: string]: any;
}

export const TapHoldSequence: React.FC<TapHoldSequenceProps> = ({ children, enabled = true, ...rest }) => {
  // TODO: Implement Tap Hold Sequence logic
  return <View {...rest}>{children}</View>;
};

TapHoldSequence.displayName = 'TapHoldSequence';
