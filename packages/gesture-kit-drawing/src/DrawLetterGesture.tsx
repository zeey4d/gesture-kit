/**
 * Draw Letter - Detects letter/symbol drawing
 * @module gestures
 */

import React from 'react';
import { View } from 'react-native';

export interface DrawLetterGestureProps {
  children: React.ReactNode;
  enabled?: boolean;
  [key: string]: any;
}

export const DrawLetterGesture: React.FC<DrawLetterGestureProps> = ({ children, enabled = true, ...rest }) => {
  // TODO: Implement Draw Letter logic
  return <View {...rest}>{children}</View>;
};

DrawLetterGesture.displayName = 'DrawLetterGesture';
