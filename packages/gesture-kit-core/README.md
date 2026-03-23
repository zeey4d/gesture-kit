# gesture-kit-core

Core types, utilities, and gesture composition for the Gesture Kit ecosystem.

## Installation

```bash
npm install gesture-kit-core
```

### Peer Dependencies

```bash
npm install react-native-gesture-handler
```

## What's Included

- **Types**: `GestureState`, `BaseGestureEvent`, `TapEvent`, `PanEvent`, `PinchEvent`, `RotationEvent`, etc.
- **GestureComposer**: A declarative component for composing multiple gestures.
- **createGestureComponent**: Factory function for creating custom gesture components.
- **Utilities**: `composeGestures`, `detectSwipeDirection`, `matchesDirection`, `magnitude`.

## Usage

```tsx
import { GestureComposer, composeGestures } from 'gesture-kit-core';
import type { TapEvent, PanEvent } from 'gesture-kit-core';
```

## License

MIT
