export function detectSwipeDirection(dx: number, dy: number) {
  return dx > 0 ? 'right' : 'left';
}

export function matchesDirection(dir: string, expected: string) {
  return dir === expected;
}

export function magnitude(dx: number, dy: number) {
  return Math.sqrt(dx * dx + dy * dy);
}
