/**
 * Four Finger Tap - Detects four finger tap
 * @module gestures
 */

import React from 'react';
import { View } from 'react-native';

export interface FourFingerTapGestureProps {
  children: React.ReactNode;
  enabled?: boolean;
  [key: string]: any;
}

export const FourFingerTapGesture: React.FC<FourFingerTapGestureProps> = ({ children, enabled = true, ...rest }) => {
  // TODO: Implement Four Finger Tap logic
  return <View {...rest}>{children}</View>;
};

FourFingerTapGesture.displayName = 'FourFingerTapGesture';
