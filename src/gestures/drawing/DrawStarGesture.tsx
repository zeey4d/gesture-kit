/**
 * Draw Star - Detects star drawing
 * @module gestures
 */

import React from 'react';
import { View } from 'react-native';

export interface DrawStarGestureProps {
  children: React.ReactNode;
  enabled?: boolean;
  [key: string]: any;
}

export const DrawStarGesture: React.FC<DrawStarGestureProps> = ({ children, enabled = true, ...rest }) => {
  // TODO: Implement Draw Star logic
  return <View {...rest}>{children}</View>;
};

DrawStarGesture.displayName = 'DrawStarGesture';
