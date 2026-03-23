/**
 * Draw Line - Detects line drawing
 * @module gestures
 */

import React from 'react';
import { View } from 'react-native';

export interface DrawLineGestureProps {
  children: React.ReactNode;
  enabled?: boolean;
  [key: string]: any;
}

export const DrawLineGesture: React.FC<DrawLineGestureProps> = ({ children, enabled = true, ...rest }) => {
  // TODO: Implement Draw Line logic
  return <View {...rest}>{children}</View>;
};

DrawLineGesture.displayName = 'DrawLineGesture';
