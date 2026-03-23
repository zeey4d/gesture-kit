/**
 * Pan Gesture - Detects pan/drag movement
 * @module gestures
 */

import React from 'react';
import { View } from 'react-native';

export interface PanGestureProps {
  children: React.ReactNode;
  enabled?: boolean;
  [key: string]: any;
}

export const PanGesture: React.FC<PanGestureProps> = ({ children, enabled = true, ...rest }) => {
  // TODO: Implement Pan Gesture logic
  return <View {...rest}>{children}</View>;
};

PanGesture.displayName = 'PanGesture';
