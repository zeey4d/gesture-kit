/**
 * Type definitions for this gesture category.
 */

import type { BaseGestureEvent } from '@gesture-kit/core';

export interface HybridEvent extends BaseGestureEvent {
  sources: string[];
  confidence: number;
}

export interface TouchSensorEvent extends HybridEvent {
  sensorData: { x: number; y: number; z: number };
}

export interface TouchCameraEvent extends HybridEvent {
  cameraData: { handDetected: boolean; gestureClass: string };
}

export interface TouchVoiceEvent extends HybridEvent {
  voiceCommand: string;
  voiceConfidence: number;
}

export interface MultiDeviceEvent extends HybridEvent {
  deviceId: string;
  syncTimestamp: number;
}
