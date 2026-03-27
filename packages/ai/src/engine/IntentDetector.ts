/**
 * IntentDetector — maps gesture type + context → semantic intent.
 * Uses a simple lookup table with developer-customizable mappings.
 */

import type { GestureType } from './GestureClassifier';
import type { CardinalDirection } from '../utils/math';

// ── Types ─────────────────────────────────────────────────────────

export interface IntentResult {
  intent: string;
  context: string;
  gestureKey: string;
}

export type IntentMap = Record<string, Record<string, string>>;

// ── Default Intent Map ────────────────────────────────────────────

const DEFAULT_INTENT_MAP: IntentMap = {
  'card-list': {
    'swipe-left': 'dismiss',
    'swipe-right': 'archive',
    'swipe-up': 'expand',
    'swipe-down': 'collapse',
    'tap': 'select',
    'doubleTap': 'quick-action',
    'longPress': 'edit',
    'pan': 'reorder',
  },
  'media-player': {
    'swipe-left': 'skip-forward',
    'swipe-right': 'skip-back',
    'swipe-up': 'volume-up',
    'swipe-down': 'volume-down',
    'tap': 'play-pause',
    'doubleTap': 'fullscreen',
    'longPress': 'options',
  },
  'image-viewer': {
    'swipe-left': 'next-image',
    'swipe-right': 'prev-image',
    'swipe-up': 'share',
    'swipe-down': 'close',
    'tap': 'toggle-controls',
    'doubleTap': 'zoom-toggle',
    'longPress': 'save',
  },
  'navigation': {
    'swipe-left': 'navigate-forward',
    'swipe-right': 'navigate-back',
    'swipe-down': 'refresh',
    'tap': 'select',
    'longPress': 'context-menu',
  },
  _default: {
    'swipe-left': 'navigate-forward',
    'swipe-right': 'navigate-back',
    'swipe-up': 'scroll-up',
    'swipe-down': 'scroll-down',
    'tap': 'select',
    'doubleTap': 'quick-action',
    'longPress': 'context-menu',
    'pan': 'drag',
  },
};

// ── Detector ──────────────────────────────────────────────────────

export class IntentDetector {
  private intentMap: IntentMap;

  constructor(customMap?: IntentMap) {
    this.intentMap = customMap
      ? { ...DEFAULT_INTENT_MAP, ...customMap }
      : DEFAULT_INTENT_MAP;
  }

  /**
   * Detect intent from a gesture type, optional direction, and context.
   */
  detect(
    gestureType: GestureType,
    direction?: CardinalDirection,
    context?: string,
  ): IntentResult | null {
    if (gestureType === 'unknown') return null;

    // Build the gesture key (e.g., 'swipe-left', 'tap')
    const gestureKey =
      direction && (gestureType === 'swipe' || gestureType === 'pan')
        ? `${gestureType}-${direction}`
        : gestureType;

    // Look up in context-specific map, then fall back to defaults
    const contextMap =
      context && this.intentMap[context]
        ? this.intentMap[context]
        : this.intentMap._default;

    const intent = contextMap?.[gestureKey] ?? this.intentMap._default?.[gestureKey];

    if (!intent) return null;

    return {
      intent,
      context: context ?? '_default',
      gestureKey,
    };
  }

  /** Update the intent map at runtime */
  updateMap(customMap: IntentMap): void {
    this.intentMap = { ...this.intentMap, ...customMap };
  }
}
