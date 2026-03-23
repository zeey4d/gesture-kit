/**
 * Draw Triangle - Detects triangle drawing
 * @module gestures
 */

import React from 'react';
import { View } from 'react-native';

export interface DrawTriangleGestureProps {
  children: React.ReactNode;
  enabled?: boolean;
  [key: string]: any;
}

export const DrawTriangleGesture: React.FC<DrawTriangleGestureProps> = ({ children, enabled = true, ...rest }) => {
  // TODO: Implement Draw Triangle logic
  return <View {...rest}>{children}</View>;
};

DrawTriangleGesture.displayName = 'DrawTriangleGesture';
