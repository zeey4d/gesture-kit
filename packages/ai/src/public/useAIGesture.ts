/**
 * useAIGesture — the ONE public hook.
 *
 * Wraps the entire AI gesture engine into a single React hook.
 * Internally creates a RNGH Pan gesture, feeds touch data through
 * the engine pipeline, and returns a handle for the developer.
 *
 * @example
 * ```tsx
 * const gesture = useAIGesture({
 *   onGesture: (result) => console.log(result.type),
 * });
 * return <AIGesture gesture={gesture}><MyView /></AIGesture>;
 * ```
 */

import { useRef, useState, useMemo, useCallback, useEffect } from 'react';
import { Gesture } from 'react-native-gesture-handler';
import { GestureEngine } from '../engine/GestureEngine';
import type { AIGestureConfig, AIGestureHandle, AIGestureResult } from './types';

export function useAIGesture(config: AIGestureConfig = {}): AIGestureHandle {
  const {
    onGesture,
    onPredict,
    onIntent,
    onShape,
    intent = false,
    predict = false,
    adaptive = false,
    shapes = false,
    context,
    userId,
    customShapes,
    intentMap,
    sensitivity = 'normal',
    debug = false,
    enabled = true,
  } = config;

  // ── State ───────────────────────────────────────────────────────

  const [isActive, setIsActive] = useState(false);
  const [lastResult, setLastResult] = useState<AIGestureResult | null>(null);

  // ── Stable callback refs ────────────────────────────────────────
  // Use refs so the engine doesn't need to be recreated when callbacks change

  const onGestureRef = useRef(onGesture);
  const onPredictRef = useRef(onPredict);
  const onIntentRef = useRef(onIntent);
  const onShapeRef = useRef(onShape);

  onGestureRef.current = onGesture;
  onPredictRef.current = onPredict;
  onIntentRef.current = onIntent;
  onShapeRef.current = onShape;

  // ── Engine initialization ───────────────────────────────────────

  const engineRef = useRef<GestureEngine | null>(null);

  // Create/recreate engine when feature flags change
  useMemo(() => {
    engineRef.current = new GestureEngine(
      {
        intent,
        predict,
        adaptive,
        shapes,
        context,
        userId,
        customShapes,
        intentMap,
        sensitivity,
        debug,
      },
      {
        onGesture: (result) => {
          setLastResult(result);
          onGestureRef.current?.(result);
        },
        onPredict: (result) => {
          onPredictRef.current?.(result);
        },
        onIntent: (result) => {
          onIntentRef.current?.(result);
        },
        onShape: (result) => {
          onShapeRef.current?.(result);
        },
      },
    );
  }, [intent, predict, adaptive, shapes, context, userId, sensitivity, debug]);

  // ── RNGH Gesture ────────────────────────────────────────────────

  const gesture = useMemo(() => {
    const pan = Gesture.Pan()
      .enabled(enabled)
      .minDistance(0)
      .minPointers(1)
      .maxPointers(1)
      .onBegin((event) => {
        setIsActive(true);
        engineRef.current?.onTouchStart(event.x, event.y);
      })
      .onUpdate((event) => {
        engineRef.current?.onTouchMove(event.x, event.y);
      })
      .onEnd((event) => {
        engineRef.current?.onTouchEnd(event.x, event.y);
        setIsActive(false);
      })
      .onFinalize((event, success) => {
        if (!success) {
          engineRef.current?.onTouchCancel();
          setIsActive(false);
        }
      });

    return pan;
  }, [enabled]);

  // ── Reset function ──────────────────────────────────────────────

  const reset = useCallback(() => {
    engineRef.current?.reset();
    setLastResult(null);
    setIsActive(false);
  }, []);

  // ── Persist adaptive data on unmount ────────────────────────────

  useEffect(() => {
    return () => {
      if (adaptive) {
        engineRef.current?.persistAdaptiveData();
      }
    };
  }, [adaptive]);

  return { gesture, isActive, lastResult, reset };
}
