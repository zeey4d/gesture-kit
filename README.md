# react-native-gesture-kit

<p align="center">
  <strong>A modern, declarative gesture component library for React Native</strong>
</p>

<p align="center">
  <a href="#installation">Installation</a> •
  <a href="#quick-start">Quick Start</a> •
  <a href="#components">Components</a> •
  <a href="#gesture-composer">Gesture Composer</a> •
  <a href="#hooks">Hooks</a> •
  <a href="#custom-gestures">Custom Gestures</a> •
  <a href="#api-reference">API Reference</a>
</p>

---

## Overview

`react-native-gesture-kit` wraps [`react-native-gesture-handler`](https://github.com/software-mansion/react-native-gesture-handler) in a clean, declarative component API. Instead of manually configuring gesture recognizers, you use intuitive React components and hooks.

**Core capabilities:**

- 🖱️ **9 Touch Gesture Components** — Tap, DoubleTap, TripleTap, QuadTap, LongPress, VeryLongPress, TapAndHold, TapCancel, PressForce
- 🎛️ **Gesture Composer** — Combine multiple gestures on a single view with priority strategies
- 🪝 **Gesture Hooks** — Headless hooks for full control over gesture detectors
- 🏭 **Factory Function** — Create custom gesture components with `createGestureComponent`
- 🧮 **Utilities** — Swipe direction detection, gesture composition helpers
- 📋 **Full TypeScript** — Comprehensive type definitions for all events, props, and options

## Supported Gesture Categories

The library is organized into comprehensive gesture categories designed for both standard UI interactions and advanced use-cases:

- 👆 **Basic Touch**: Tap, Double Tap, Long Press, Force Touch.
- 🖐️ **Drag & Pan**: Continuous dragging, Swipes, and Flings.
- ✌️ **Multi-Finger**: Pinch-to-zoom and Rotation.
- 📐 **Transform**: Combined pan, pinch, and rotation for matrix transformations.
- ✍️ **Drawing**: Freehand coordinate tracking for signatures and sketches.
- 🔗 **Sequences**: Complex interactions like simultaneous, exclusive, or chained gestures.
- 📱 **Sensor**: Device motion tracking (Gyroscope, Accelerometer).
- 🧲 **Proximity**: Near-screen hardware detection.
- 🪄 **Air Gestures**: Touchless interactions via camera tracking.
- 🧍 **Body**: Pose estimation and full-body movement gestures.
- 🖊️ **Stylus**: High-precision Apple Pencil / S Pen support with tilt & pressure.
- 🧬 **Hybrid**: Composited inputs (e.g., Touch + Device Tilt).
- 🤖 **AI**: Smart stroke and pattern recognition (e.g., drawing shapes to trigger actions).
- 🌐 **Collaborative**: Real-time synchronized gestures over the network (e.g., shared canvases).
- ♿ **Accessibility**: Adaptive gestures optimized for assistive technologies (e.g., screen reader focus gestures).

## Installation

```bash
npm install react-native-gesture-kit react-native-gesture-handler
```

> **Note**: [`react-native-gesture-handler`](https://docs.swmansion.com/react-native-gesture-handler/docs/fundamentals/installation) is a required peer dependency. Follow its installation guide if not already configured in your project.

## Quick Start

Wrap your app root with `GestureHandlerRootView`, then use any gesture component:

```tsx
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { TapGesture } from 'react-native-gesture-kit';

function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <TapGesture onTap={(e) => console.log('Tapped at', e.x, e.y)}>
        <View style={styles.box}>
          <Text>Tap Me</Text>
        </View>
      </TapGesture>
    </GestureHandlerRootView>
  );
}
```

---

## Components

### TapGesture

Detects single or multi-tap gestures.

```tsx
<TapGesture onTap={handleTap} numberOfTaps={1} maxDuration={500}>
  <View />
</TapGesture>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `onTap` | `(e: TapEvent) => void` | **required** | Callback when tap is detected |
| `numberOfTaps` | `number` | `1` | Number of required taps |
| `maxDuration` | `number` | — | Maximum tap duration (ms) |
| `maxDistance` | `number` | — | Maximum finger travel distance |
| `enabled` | `boolean` | `true` | Enable/disable the gesture |

### DoubleTapGesture

Detects double-tap gestures.

```tsx
<DoubleTapGesture onDoubleTap={(e) => console.log('Double tap!', e.x, e.y)}>
  <View />
</DoubleTapGesture>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `onDoubleTap` | `(e: TapEvent) => void` | **required** | Callback on double tap |
| `maxDelay` | `number` | — | Max delay between taps (ms) |
| `maxDistance` | `number` | — | Max distance between tap positions |

### TripleTapGesture / QuadTapGesture

Detect triple and quad taps respectively. Same API pattern as `DoubleTapGesture`.

### LongPressGesture

Detects long press with configurable duration.

```tsx
<LongPressGesture onLongPress={handleLongPress} minDuration={800}>
  <View />
</LongPressGesture>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `onLongPress` | `(e: LongPressEvent) => void` | **required** | Callback on long press |
| `onPressIn` | `(e: LongPressEvent) => void` | — | When press begins |
| `onPressOut` | `(e: LongPressEvent) => void` | — | When press ends |
| `minDuration` | `number` | `500` | Minimum hold duration (ms) |
| `maxDistance` | `number` | — | Max finger travel distance |

### VeryLongPressGesture

Extended long press with 3000ms default duration.

```tsx
<VeryLongPressGesture onVeryLongPress={handleVeryLongPress}>
  <View />
</VeryLongPressGesture>
```

### TapAndHoldGesture

Detects a tap followed by a hold.

```tsx
<TapAndHoldGesture onTapAndHold={handleTapAndHold} onTap={handleTap} holdDuration={1000}>
  <View />
</TapAndHoldGesture>
```

### TapCancelGesture

Detects when a tap begins but is cancelled (finger moves away).

```tsx
<TapCancelGesture onTapCancel={handleCancel} onTapStart={handleStart}>
  <View />
</TapCancelGesture>
```

### PressForceGesture

Detects force/3D touch pressure.

```tsx
<PressForceGesture onPressForce={(e) => console.log('Force:', e.force)} forceThreshold={0.5}>
  <View />
</PressForceGesture>
```

---

## Gesture Composer

The `<Gesture>` component (alias for `GestureComposer`) lets you combine multiple gestures on a single view with a declarative API:

```tsx
import { Gesture } from 'react-native-gesture-kit';

<Gesture
  tap
  doubleTap
  swipe="left"
  pinch
  rotate
  fling="up"
  onTap={handleTap}
  onDoubleTap={handleDoubleTap}
  onSwipe={handleSwipe}
  onPinch={handlePinch}
  onRotation={handleRotation}
  onFling={handleFling}
  priority="simultaneous"
>
  <View />
</Gesture>
```

### Supported Gesture Flags

| Prop | Type | Description |
|---|---|---|
| `tap` | `boolean` | Enable tap detection |
| `doubleTap` | `boolean` | Enable double-tap detection |
| `longPress` | `boolean` | Enable long press detection |
| `swipe` | `boolean \| SwipeDirection` | Enable swipe — `true` for any direction, or `'left'`, `'right'`, `'up'`, `'down'` |
| `pan` | `boolean` | Enable pan/drag tracking |
| `pinch` | `boolean` | Enable pinch-to-zoom |
| `rotate` | `boolean` | Enable rotation |
| `fling` | `boolean \| FlingDirection` | Enable fling — `true` for any direction, or a specific direction |

### Priority Strategies

| Strategy | Behavior |
|---|---|
| `simultaneous` | All gestures can activate at the same time *(default)* |
| `exclusive` | Only one gesture activates (first wins) |
| `race` | First gesture to activate cancels the rest |

### Composer Callbacks

| Callback | Event Type |
|---|---|
| `onTap` | `TapEvent` |
| `onDoubleTap` | `TapEvent` |
| `onLongPress` | `LongPressEvent` |
| `onSwipe` | `SwipeEvent` |
| `onPanStart`, `onPanMove`, `onPanEnd` | `PanEvent` |
| `onPinchStart`, `onPinch`, `onPinchEnd` | `PinchEvent` |
| `onRotationStart`, `onRotation`, `onRotationEnd` | `RotationEvent` |
| `onFling` | `FlingEvent` |

---

## Hooks

For headless gesture usage where you need full control over the `GestureDetector`:

```tsx
import { GestureDetector } from 'react-native-gesture-handler';
import { useTap, useDoubleTap, useLongPress } from 'react-native-gesture-kit';

function MyComponent() {
  const tapGesture = useTap({
    onTap: (e) => console.log('Tapped!', e),
    numberOfTaps: 1,
    enabled: true,
  });

  return (
    <GestureDetector gesture={tapGesture}>
      <View />
    </GestureDetector>
  );
}
```

### Available Hooks

| Hook | Options Interface | Returns |
|---|---|---|
| `useTap` | `UseTapOptions` | Configured `GestureType` |
| `useDoubleTap` | `UseDoubleTapOptions` | Configured `GestureType` |
| `useLongPress` | `UseLongPressOptions` | Configured `GestureType` |
| `useTripleTap` | `UseTripleTapOptions` | Configured `GestureType` |
| `useQuadTap` | `UseQuadTapOptions` | Configured `GestureType` |
| `useVeryLongPress` | `UseVeryLongPressOptions` | Configured `GestureType` |
| `useTapAndHold` | `UseTapAndHoldOptions` | Configured `GestureType` |
| `useTapCancel` | `UseTapCancelOptions` | Configured `GestureType` |
| `usePressForce` | `UsePressForceOptions` | Configured `GestureType` |

---

## Custom Gestures

Create reusable gesture components using the factory function:

```tsx
import { createGestureComponent } from 'react-native-gesture-kit';
import { Gesture } from 'react-native-gesture-handler';

interface TripleTapProps {
  onTripleTap: () => void;
  children: React.ReactNode;
  enabled?: boolean;
}

const TripleTapGesture = createGestureComponent<TripleTapProps>({
  name: 'TripleTapGesture',
  createGesture: (props) =>
    Gesture.Tap()
      .numberOfTaps(3)
      .onEnd(() => props.onTripleTap()),
});

// Usage
<TripleTapGesture onTripleTap={() => console.log('Triple tap!')}>
  <View />
</TripleTapGesture>
```

---

## Utilities

### Direction Detection

```tsx
import { detectSwipeDirection, matchesDirection, magnitude } from 'react-native-gesture-kit';

const direction = detectSwipeDirection(translationX, translationY, velocityX, velocityY);
// => 'left' | 'right' | 'up' | 'down'

const isMatch = matchesDirection(direction, 'left');
// => true | false

const speed = magnitude(velocityX, velocityY);
// => number (Euclidean magnitude)
```

### Gesture Composition

```tsx
import { composeGestures } from 'react-native-gesture-kit';

const composed = composeGestures([tapGesture, panGesture], 'simultaneous');
```

---

## API Reference

### Event Types

All events extend `BaseGestureEvent` with `absoluteX`, `absoluteY`, `x`, `y` coordinates.

| Event | Extra Properties |
|---|---|
| `TapEvent` | `numberOfTaps` |
| `LongPressEvent` | `duration` |
| `PanEvent` | `translationX`, `translationY`, `velocityX`, `velocityY` |
| `SwipeEvent` | `direction`, `velocity`, `distance` |
| `PinchEvent` | `scale`, `velocity`, `focalX`, `focalY` |
| `RotationEvent` | `rotation`, `velocity`, `anchorX`, `anchorY` |
| `FlingEvent` | `direction` |

### TypeScript Imports

```tsx
import type {
  TapEvent,
  LongPressEvent,
  PanEvent,
  SwipeEvent,
  PinchEvent,
  RotationEvent,
  FlingEvent,
  SwipeDirection,
  FlingDirection,
  GesturePriority,
  GestureState,
} from 'react-native-gesture-kit';
```

---

## Folder Structure

```
src/
├── index.ts                # Public API barrel export
├── types/
│   └── gestures.ts         # All TypeScript interfaces & enums
├── core/
│   ├── GestureComposer.tsx # <Gesture> multi-gesture composer
│   └── createGestureComponent.tsx  # Factory for custom gesture components
├── gestures/
│   └── basic-touch/        # Tap, DoubleTap, LongPress, and more
│       ├── *.tsx           # Gesture components
│       └── hooks/          # Corresponding hooks
└── utils/
    ├── direction.ts        # Swipe direction detection
    └── compose.ts          # Gesture composition (Simultaneous/Exclusive/Race)
```

---

## Requirements

- React Native ≥ 0.73
- `react-native-gesture-handler` ≥ 2.30.0
- TypeScript ≥ 5.3 (recommended)

## Contributing

Contributions are welcome! To get started:

1. Fork the repository
2. Create a feature branch: `git checkout -b feat/my-feature`
3. Install dependencies: `npm install`
4. Make your changes in `src/`
5. Build: `npm run build`
6. Submit a pull request

### Development Scripts

```bash
npm run build       # Compile TypeScript to dist/
npm run typecheck   # Run type checker without emitting
```

## License

[MIT](./LICENSE)
