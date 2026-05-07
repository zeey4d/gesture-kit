import { useEffect, useState } from 'react';
import { Accelerometer, Gyroscope } from 'expo-sensors';

export const useAccelerometer = (updateInterval: number = 16) => {
  const [data, setData] = useState({ x: 0, y: 0, z: 0 });

  useEffect(() => {
    Accelerometer.setUpdateInterval(updateInterval);
    const subscription = Accelerometer.addListener(setData);
    return () => subscription.remove();
  }, [updateInterval]);

  return data;
};

export const useGyroscope = (updateInterval: number = 16) => {
  const [data, setData] = useState({ x: 0, y: 0, z: 0 });

  useEffect(() => {
    Gyroscope.setUpdateInterval(updateInterval);
    const subscription = Gyroscope.addListener(setData);
    return () => subscription.remove();
  }, [updateInterval]);

  return data;
};
