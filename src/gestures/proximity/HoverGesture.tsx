/**
 * Hover Gesture - Detects hovering
 * @module gestures
 */

import React from 'react';
import { View } from 'react-native';

export interface HoverGestureProps {
  children: React.ReactNode;
  enabled?: boolean;
  [key: string]: any;
}

export const HoverGesture: React.FC<HoverGestureProps> = ({ children, enabled = true, ...rest }) => {
  // TODO: Implement Hover Gesture logic
  return <View {...rest}>{children}</View>;
};

HoverGesture.displayName = 'HoverGesture';
