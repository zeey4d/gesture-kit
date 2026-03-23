/**
 * Multi Finger Drag - Detects multi finger drag
 * @module gestures
 */

import React from 'react';
import { View } from 'react-native';

export interface MultiFingerDragGestureProps {
  children: React.ReactNode;
  enabled?: boolean;
  [key: string]: any;
}

export const MultiFingerDragGesture: React.FC<MultiFingerDragGestureProps> = ({ children, enabled = true, ...rest }) => {
  // TODO: Implement Multi Finger Drag logic
  return <View {...rest}>{children}</View>;
};

MultiFingerDragGesture.displayName = 'MultiFingerDragGesture';
