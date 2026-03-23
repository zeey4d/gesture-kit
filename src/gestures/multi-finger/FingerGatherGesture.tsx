/**
 * Finger Gather - Detects finger gather (pinch in)
 * @module gestures
 */

import React from 'react';
import { View } from 'react-native';

export interface FingerGatherGestureProps {
  children: React.ReactNode;
  enabled?: boolean;
  [key: string]: any;
}

export const FingerGatherGesture: React.FC<FingerGatherGestureProps> = ({ children, enabled = true, ...rest }) => {
  // TODO: Implement Finger Gather logic
  return <View {...rest}>{children}</View>;
};

FingerGatherGesture.displayName = 'FingerGatherGesture';
