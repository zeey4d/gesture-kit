/**
 * Theme.ts
 * Centralized design tokens for the Pro Wing (Dark Version).
 */

export const Colors = {
  black: '#0A0A0B',
  surface: '#121214',
  card: 'rgba(255, 255, 255, 0.04)',
  border: 'rgba(255, 255, 255, 0.08)',
  
  // Brand Colors
  cyan: '#00FAFF',
  neonGreen: '#BFFF00',
  neonPink: '#FF007F',
  electricPurple: '#8B2CFF',
  burningOrange: '#FF5E00',
  primary: '#00FAFF',
  success: '#BFFF00',
  
  // Gradients (RGBA helpers)
  cyanGlow: 'rgba(0, 250, 255, 0.15)',
  greenGlow: 'rgba(191, 255, 0, 0.15)',
  
  // Text
  text: '#FFFFFF',
  textSecondary: 'rgba(255, 255, 255, 0.7)',
  textMuted: 'rgba(255, 255, 255, 0.45)',
  textExtraMuted: 'rgba(255, 255, 255, 0.25)',
};

export const Spacing = {
  xs: 4,
  s: 8,
  m: 16,
  l: 24,
  xl: 32,
  xxl: 40,
};

export const Layout = {
  radiusS: 12,
  radiusM: 20,
  radiusL: 32,
  blurIntensity: 30,
};

export default {
  Colors,
  Spacing,
  Layout,
};
