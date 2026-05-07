import { useEffect, useState } from 'react';
import { LightSensor } from 'expo-sensors';
import { Platform } from 'react-native';

export const useAdaptiveBrightness = () => {
  const [illuminance, setIlluminance] = useState(0);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    let subscription: any;
    
    if (Platform.OS !== 'web') {
      LightSensor.setUpdateInterval(500);
      subscription = LightSensor.addListener(({ illuminance }) => {
        setIlluminance(illuminance);
        // If illuminance is low (e.g., < 20 lux), it's a dark environment
        setIsDark(illuminance < 30);
      });
    }

    return () => subscription?.remove();
  }, []);

  return { illuminance, isDark };
};
