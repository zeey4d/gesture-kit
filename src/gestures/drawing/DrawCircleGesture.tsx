/**
 * Draw Circle - Detects circle drawing
 * @module gestures
 */

import React from 'react';
import { View } from 'react-native';

export interface DrawCircleGestureProps {
  children: React.ReactNode;
  enabled?: boolean;
  [key: string]: any;
}

export const DrawCircleGesture: React.FC<DrawCircleGestureProps> = ({ children, enabled = true, ...rest }) => {
  // TODO: Implement Draw Circle logic
  return <View {...rest}>{children}</View>;
};

DrawCircleGesture.displayName = 'DrawCircleGesture';
