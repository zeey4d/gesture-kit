/**
 * Drag Gesture - Detects drag gestures
 * @module gestures
 */

import React from 'react';
import { View } from 'react-native';

export interface DragGestureProps {
  children: React.ReactNode;
  enabled?: boolean;
  [key: string]: any;
}

export const DragGesture: React.FC<DragGestureProps> = ({ children, enabled = true, ...rest }) => {
  // TODO: Implement Drag Gesture logic
  return <View {...rest}>{children}</View>;
};

DragGesture.displayName = 'DragGesture';
