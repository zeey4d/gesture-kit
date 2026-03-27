/**
 * AdaptiveMemory — learns user gesture patterns over time.
 * Uses exponential moving averages to personalize classification thresholds.
 * Storage is in-memory with optional AsyncStorage persistence.
 */

import {
  ADAPTIVE_SMOOTHING,
  ADAPTIVE_MIN_GESTURES,
  ADAPTIVE_MAX_DEVIATION,
  SWIPE_MIN_VELOCITY,
  SWIPE_MIN_DISTANCE,
  TAP_MAX_DURATION,
  LONG_PRESS_MIN_DURATION,
} from '../utils/constants';
import type { GestureFeatures } from './FeatureExtractor';
import type { GestureType } from './GestureClassifier';

// ── Types ─────────────────────────────────────────────────────────

export interface UserProfile {
  avgSwipeVelocity: number;
  avgSwipeDistance: number;
  avgTapDuration: number;
  avgLongPressDuration: number;
  totalGestures: number;
  gestureFrequency: Record<string, number>;
}

export interface AdaptedThresholds {
  swipeMinVelocity?: number;
  swipeMinDistance?: number;
  tapMaxDuration?: number;
  longPressMinDuration?: number;
}

// ── Memory ────────────────────────────────────────────────────────

const DEFAULT_PROFILE: UserProfile = {
  avgSwipeVelocity: SWIPE_MIN_VELOCITY,
  avgSwipeDistance: SWIPE_MIN_DISTANCE,
  avgTapDuration: 100,
  avgLongPressDuration: LONG_PRESS_MIN_DURATION,
  totalGestures: 0,
  gestureFrequency: {},
};

export class AdaptiveMemory {
  private profiles = new Map<string, UserProfile>();
  private readonly storageKey: string;

  constructor(storagePrefix = '@gesture-kit/ai') {
    this.storageKey = `${storagePrefix}:profiles`;
  }

  /** Get or create a user profile */
  private getProfile(userId: string): UserProfile {
    if (!this.profiles.has(userId)) {
      this.profiles.set(userId, { ...DEFAULT_PROFILE, gestureFrequency: {} });
    }
    return this.profiles.get(userId)!;
  }

  /**
   * Record a completed gesture and update the user's profile.
   */
  record(
    userId: string,
    gestureType: GestureType,
    features: GestureFeatures,
  ): void {
    const profile = this.getProfile(userId);
    const alpha = ADAPTIVE_SMOOTHING;

    profile.totalGestures++;
    profile.gestureFrequency[gestureType] =
      (profile.gestureFrequency[gestureType] ?? 0) + 1;

    // Update running averages based on gesture type
    switch (gestureType) {
      case 'swipe':
        profile.avgSwipeVelocity =
          profile.avgSwipeVelocity * (1 - alpha) + features.velocity * alpha;
        profile.avgSwipeDistance =
          profile.avgSwipeDistance * (1 - alpha) + features.distance * alpha;
        break;

      case 'tap':
        profile.avgTapDuration =
          profile.avgTapDuration * (1 - alpha) + features.duration * alpha;
        break;

      case 'longPress':
        profile.avgLongPressDuration =
          profile.avgLongPressDuration * (1 - alpha) + features.duration * alpha;
        break;
    }
  }

  /**
   * Get adapted thresholds for a user.
   * Returns undefined if not enough data has been collected.
   */
  getAdaptedThresholds(userId: string): AdaptedThresholds | undefined {
    const profile = this.getProfile(userId);

    if (profile.totalGestures < ADAPTIVE_MIN_GESTURES) {
      return undefined;
    }

    const maxDev = ADAPTIVE_MAX_DEVIATION;

    // Adapt swipe velocity: if user typically swipes slower, lower the threshold
    const swipeVelRatio = profile.avgSwipeVelocity / SWIPE_MIN_VELOCITY;
    const clampedVelRatio = Math.max(1 - maxDev, Math.min(1 + maxDev, swipeVelRatio));

    // Adapt swipe distance
    const swipeDistRatio = profile.avgSwipeDistance / SWIPE_MIN_DISTANCE;
    const clampedDistRatio = Math.max(1 - maxDev, Math.min(1 + maxDev, swipeDistRatio));

    // Adapt tap duration: if user has longer taps, increase the threshold
    const tapDurRatio = profile.avgTapDuration / 100; // 100ms is typical tap
    const clampedTapRatio = Math.max(1 - maxDev, Math.min(1 + maxDev, tapDurRatio));

    return {
      swipeMinVelocity: SWIPE_MIN_VELOCITY * clampedVelRatio * 0.85,
      swipeMinDistance: SWIPE_MIN_DISTANCE * clampedDistRatio * 0.9,
      tapMaxDuration: 250 * clampedTapRatio * 1.1,
      longPressMinDuration: profile.avgLongPressDuration * 0.8,
    };
  }

  /** Get the raw profile for debugging */
  getProfile_debug(userId: string): UserProfile | undefined {
    return this.profiles.get(userId);
  }

  /** Reset a user's profile */
  reset(userId: string): void {
    this.profiles.delete(userId);
  }

  /** Reset all profiles */
  resetAll(): void {
    this.profiles.clear();
  }

  /**
   * Persist profiles to AsyncStorage (optional).
   * Returns false if AsyncStorage is unavailable.
   */
  async persist(): Promise<boolean> {
    try {
      const AsyncStorage =
        require('@react-native-async-storage/async-storage').default;
      const data: Record<string, UserProfile> = {};
      this.profiles.forEach((profile, key) => {
        data[key] = profile;
      });
      await AsyncStorage.setItem(this.storageKey, JSON.stringify(data));
      return true;
    } catch {
      // AsyncStorage not available — silently fail
      return false;
    }
  }

  /**
   * Load profiles from AsyncStorage (optional).
   * Returns false if AsyncStorage is unavailable or no data found.
   */
  async load(): Promise<boolean> {
    try {
      const AsyncStorage =
        require('@react-native-async-storage/async-storage').default;
      const raw = await AsyncStorage.getItem(this.storageKey);
      if (!raw) return false;
      const data = JSON.parse(raw) as Record<string, UserProfile>;
      for (const [key, profile] of Object.entries(data)) {
        this.profiles.set(key, profile);
      }
      return true;
    } catch {
      return false;
    }
  }
}
