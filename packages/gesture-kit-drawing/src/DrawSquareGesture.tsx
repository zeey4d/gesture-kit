/**
 * Draw Square - Detects square drawing
 * @module gestures
 */

import React from 'react';
import { View } from 'react-native';

export interface DrawSquareGestureProps {
  children: React.ReactNode;
  enabled?: boolean;
  [key: string]: any;
}

export const DrawSquareGesture: React.FC<DrawSquareGestureProps> = ({ children, enabled = true, ...rest }) => {
  // TODO: Implement Draw Square logic
  return <View {...rest}>{children}</View>;
};

DrawSquareGesture.displayName = 'DrawSquareGesture';
