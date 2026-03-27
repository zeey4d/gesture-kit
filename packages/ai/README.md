# @gesture-kit/ai

> AI-powered gesture recognition for React Native — one hook, infinite possibilities.

[![npm](https://img.shields.io/npm/v/@gesture-kit/ai)](https://www.npmjs.com/package/@gesture-kit/ai)
[![license](https://img.shields.io/npm/l/@gesture-kit/ai)](./LICENSE)
[![bundle size](https://img.shields.io/bundlephobia/minzip/@gesture-kit/ai)](https://bundlephobia.com/package/@gesture-kit/ai)

**One hook. Zero ML dependencies. Intelligent gesture recognition out of the box.**

`@gesture-kit/ai` adds an intelligent layer on top of `react-native-gesture-handler` — intent detection, early prediction, adaptive learning, and shape recognition — all through a single `useAIGesture` hook.

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🎯 **Smart Classification** | Rule-based recognition of tap, double-tap, long press, swipe, pan with confidence scores |
| 🧠 **Intent Detection** | Maps gestures to semantic actions (swipe-left on a card → "dismiss") |
| ⚡ **Early Prediction** | Predicts the gesture before the user finishes — enables anticipatory UI |
| 📈 **Adaptive Learning** | Learns each user's gesture patterns and auto-adjusts thresholds |
| ✏️ **Shape Recognition** | Draw circles, triangles, stars, hearts — 8 built-in shapes + custom templates |
| 🪶 **Lightweight** | ~33 KB, zero ML dependencies, pure TypeScript math |
| 🐛 **Debug Mode** | Console logging of every engine decision for easy debugging |

---

## 📦 Installation

```bash
npm install @gesture-kit/ai

# Peer dependencies (if not already installed)
npm install react-native-gesture-handler
```

> **Note:** Make sure `react-native-gesture-handler` is properly configured in your project. See the [RNGH installation guide](https://docs.swmansion.com/react-native-gesture-handler/docs/fundamentals/installation).

---

## 🚀 Quick Start

### Minimal Example (5 lines)

```tsx
import { useAIGesture, AIGesture } from '@gesture-kit/ai';

function MyScreen() {
  const gesture = useAIGesture({
    onGesture: (result) => {
      console.log(`${result.type} — ${(result.confidence * 100).toFixed(0)}%`);
    },
  });

  return (
    <AIGesture gesture={gesture}>
      <View style={styles.area}>
        <Text>Tap, swipe, or long press me!</Text>
      </View>
    </AIGesture>
  );
}
```

That's it. No providers, no config files, no setup.

---

## 📖 API Reference

### `useAIGesture(config?)`

The only hook you need. Returns a gesture handle to attach to `<AIGesture>`.

```ts
const gesture = useAIGesture(config?: AIGestureConfig): AIGestureHandle;
```

#### Config Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `onGesture` | `(result) => void` | — | Called when a gesture is recognized |
| `onPredict` | `(result) => void` | — | Called with early predictions (before gesture completes) |
| `onIntent` | `(result) => void` | — | Called when a semantic intent is detected |
| `onShape` | `(result) => void` | — | Called when a drawn shape is recognized |
| `intent` | `boolean` | `false` | Enable intent detection |
| `predict` | `boolean` | `false` | Enable early gesture prediction |
| `adaptive` | `boolean` | `false` | Enable adaptive learning |
| `shapes` | `boolean` | `false` | Enable shape recognition |
| `context` | `string` | — | UI context for intent (e.g., `'card-list'`, `'media-player'`) |
| `userId` | `string` | — | Scope adaptive memory per user |
| `sensitivity` | `'low' \| 'normal' \| 'high'` | `'normal'` | Overall gesture sensitivity |
| `customShapes` | `ShapeTemplate[]` | — | Custom shape templates |
| `intentMap` | `IntentMap` | — | Custom intent mappings |
| `debug` | `boolean` | `false` | Enable debug logging |
| `enabled` | `boolean` | `true` | Enable/disable gesture detection |

#### Return Value (`AIGestureHandle`)

| Property | Type | Description |
|----------|------|-------------|
| `gesture` | `GestureType` | RNGH gesture object — pass to `<AIGesture>` |
| `isActive` | `boolean` | Whether a gesture is currently in progress |
| `lastResult` | `AIGestureResult \| null` | Most recent gesture result |
| `reset()` | `() => void` | Reset engine state and clear history |

---

### `<AIGesture>`

Optional wrapper component. Attaches the gesture to a View via `GestureDetector`.

```tsx
// With external gesture handle
const gesture = useAIGesture({ onGesture: handler });
<AIGesture gesture={gesture}><MyView /></AIGesture>

// Or with inline config (creates the hook internally)
<AIGesture onGesture={handler} intent context="card-list">
  <MyView />
</AIGesture>
```

---

### Gesture Result

```ts
interface AIGestureResult {
  type: 'tap' | 'doubleTap' | 'longPress' | 'swipe' | 'pan' | 'shape' | 'unknown';
  confidence: number;      // 0.0 – 1.0
  direction?: 'left' | 'right' | 'up' | 'down';
  velocity?: number;       // px/s
  distance?: number;       // px
  duration?: number;       // ms
  position: { x: number; y: number };
  timestamp: number;
}
```

---

## 🎯 Usage Examples

### 1. Smart Card with Intent Detection

```tsx
function SwipeableCard({ item, onDismiss, onArchive }) {
  const gesture = useAIGesture({
    intent: true,
    context: 'card-list',
    onIntent: ({ intent }) => {
      if (intent === 'dismiss') onDismiss(item.id);
      if (intent === 'archive') onArchive(item.id);
    },
  });

  return (
    <AIGesture gesture={gesture}>
      <View style={styles.card}>
        <Text>{item.title}</Text>
      </View>
    </AIGesture>
  );
}
```

Built-in intent mappings for `card-list` context:

| Gesture | Intent |
|---------|--------|
| swipe-left | `dismiss` |
| swipe-right | `archive` |
| tap | `select` |
| long press | `edit` |

### 2. Anticipatory Animations with Prediction

```tsx
function PredictiveCard() {
  const opacity = useRef(new Animated.Value(1)).current;

  const gesture = useAIGesture({
    predict: true,
    onPredict: ({ predicted, confidence }) => {
      if (predicted === 'swipe' && confidence > 0.7) {
        // Start fade BEFORE the swipe completes
        Animated.timing(opacity, { toValue: 0.5, duration: 100, useNativeDriver: true }).start();
      }
    },
    onGesture: (result) => {
      if (result.type !== 'swipe') {
        // Not a swipe — restore opacity
        Animated.spring(opacity, { toValue: 1, useNativeDriver: true }).start();
      }
    },
  });

  return (
    <AIGesture gesture={gesture}>
      <Animated.View style={[styles.card, { opacity }]}>
        <Text>Swipe me for a smooth transition!</Text>
      </Animated.View>
    </AIGesture>
  );
}
```

### 3. Shape Drawing

```tsx
function DrawingCanvas() {
  const [detected, setDetected] = useState('');

  const gesture = useAIGesture({
    shapes: true,
    onShape: ({ shape, score }) => {
      setDetected(`${shape} (${(score * 100).toFixed(0)}%)`);
    },
  });

  return (
    <AIGesture gesture={gesture}>
      <View style={styles.canvas}>
        <Text>Draw a shape!</Text>
        {detected && <Text>Detected: {detected}</Text>}
      </View>
    </AIGesture>
  );
}
```

**Built-in shapes:** circle, triangle, square, checkmark, X, star, arrow, heart

Add custom shapes:

```tsx
const gesture = useAIGesture({
  shapes: true,
  customShapes: [
    { name: 'lightning', points: [{ x: 0, y: 0 }, { x: 30, y: 80 }, /* ... */] },
  ],
  onShape: ({ shape }) => console.log(shape),
});
```

### 4. Adaptive Per-User Experience

```tsx
function AdaptiveButton({ userId }) {
  const gesture = useAIGesture({
    adaptive: true,
    userId,
    onGesture: (result) => {
      // After 20+ interactions, thresholds auto-adjust to this user's style
      console.log(result.type, result.confidence);
    },
  });

  return (
    <AIGesture gesture={gesture}>
      <View style={styles.button}>
        <Text>The more you use it, the smarter it gets</Text>
      </View>
    </AIGesture>
  );
}
```

### 5. All Features Combined

```tsx
const gesture = useAIGesture({
  intent: true,
  predict: true,
  adaptive: true,
  shapes: true,
  context: 'media-player',
  userId: currentUser.id,
  sensitivity: 'high',
  debug: __DEV__,
  onGesture: (r) => console.log('gesture:', r.type),
  onIntent:  (r) => console.log('intent:', r.intent),
  onPredict: (r) => console.log('prediction:', r.predicted),
  onShape:   (r) => console.log('shape:', r.shape),
});
```

---

## 🧠 How It Works

The engine pipeline runs entirely on-device with pure TypeScript math:

```
Touch Input → FeatureExtractor → GestureClassifier ─┐
                    ↓                                 │
              GesturePredictor (early fire)           │
                                                      ↓
                                              GestureEngine
                                            ┌────────┴────────┐
                                       IntentDetector   AdaptiveMemory
                                            │
                                      ShapeRecognizer
                                            ↓
                                      AIGestureResult
```

| Component | What it does |
|-----------|-------------|
| **FeatureExtractor** | Computes velocity, direction, curvature, acceleration from raw touch points |
| **GestureClassifier** | Rule-based classification with confidence scoring |
| **IntentDetector** | Lookup table mapping gesture + context → semantic intent |
| **GesturePredictor** | Analyzes partial data (5+ points) for early gesture detection |
| **AdaptiveMemory** | Exponential moving average of user patterns; adjusts thresholds after 20+ gestures |
| **ShapeRecognizer** | $1 Unistroke Recognizer — academic algorithm, 96%+ accuracy |

**Why no ML?** Rule-based is lighter (0 KB vs 3-8 MB), faster (instant vs 500ms model load), more debuggable (read the rules vs black box), and equally accurate for standard gesture types.

---

## ⚙️ Built-in Intent Contexts

| Context | Supported Intents |
|---------|------------------|
| `card-list` | dismiss, archive, expand, collapse, select, quick-action, edit, reorder |
| `media-player` | skip-forward, skip-back, volume-up, volume-down, play-pause, fullscreen, options |
| `image-viewer` | next-image, prev-image, share, close, toggle-controls, zoom-toggle, save |
| `navigation` | navigate-forward, navigate-back, refresh, select, context-menu |

You can also provide your own mappings:

```tsx
const gesture = useAIGesture({
  intent: true,
  context: 'my-app',
  intentMap: {
    'my-app': {
      'swipe-left': 'delete',
      'swipe-right': 'favorite',
      'tap': 'open',
      'longPress': 'share',
    },
  },
  onIntent: ({ intent }) => console.log(intent),
});
```

---

## 🐛 Debug Mode

```tsx
const gesture = useAIGesture({
  debug: true,
  onGesture: (result) => {
    // In debug mode, result.features contains raw extracted features
    console.log(result.features);
  },
});
```

Debug mode logs every engine decision to the console:

```
[AIGesture] { type: 'swipe', confidence: '0.91', direction: 'left', velocity: '823', distance: '156', duration: '189' }
```

---

## 📋 Requirements

| Dependency | Version |
|-----------|---------|
| React | ≥ 18.0.0 |
| React Native | ≥ 0.71.0 |
| react-native-gesture-handler | ≥ 2.10.0 |

---

## 📄 License

MIT
