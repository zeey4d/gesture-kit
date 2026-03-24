/**
 * Two Finger Tap - Detects two finger tap
 * @module gestures
 */

import React from 'react';
import { View } from 'react-native';

export interface TwoFingerTapGestureProps {
  children: React.ReactNode;
  enabled?: boolean;
  [key: string]: any;
}

export const TwoFingerTapGesture: React.FC<TwoFingerTapGestureProps> = ({ children, enabled = true, ...rest }) => {
  // TODO: Implement Two Finger Tap logic
  return <View {...rest}>{children}</View>;
};

TwoFingerTapGesture.displayName = 'TwoFingerTapGesture';
