/**
 * Two Finger Swipe - Detects two finger swipe
 * @module gestures
 */

import React from 'react';
import { View } from 'react-native';

export interface TwoFingerSwipeGestureProps {
  children: React.ReactNode;
  enabled?: boolean;
  [key: string]: any;
}

export const TwoFingerSwipeGesture: React.FC<TwoFingerSwipeGestureProps> = ({ children, enabled = true, ...rest }) => {
  // TODO: Implement Two Finger Swipe logic
  return <View {...rest}>{children}</View>;
};

TwoFingerSwipeGesture.displayName = 'TwoFingerSwipeGesture';
