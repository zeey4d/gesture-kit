/**
 * CircularBuffer — fixed-size ring buffer for touch point history.
 * Avoids unbounded memory growth during long gestures.
 */
export class CircularBuffer<T> {
  private readonly items: (T | undefined)[];
  private head = 0;
  private _size = 0;

  constructor(private readonly capacity: number) {
    this.items = new Array(capacity);
  }

  /** Push an item. Overwrites oldest if full. */
  push(item: T): void {
    this.items[this.head] = item;
    this.head = (this.head + 1) % this.capacity;
    if (this._size < this.capacity) this._size++;
  }

  /** Get all items in insertion order (oldest → newest). */
  toArray(): T[] {
    if (this._size === 0) return [];
    const result: T[] = [];
    const start = this._size < this.capacity ? 0 : this.head;
    for (let i = 0; i < this._size; i++) {
      const idx = (start + i) % this.capacity;
      result.push(this.items[idx] as T);
    }
    return result;
  }

  /** Get the last N items (newest first). */
  last(n: number): T[] {
    const arr = this.toArray();
    return arr.slice(Math.max(0, arr.length - n));
  }

  /** Get the most recent item. */
  peek(): T | undefined {
    if (this._size === 0) return undefined;
    const idx = (this.head - 1 + this.capacity) % this.capacity;
    return this.items[idx];
  }

  /** Current number of items. */
  get size(): number {
    return this._size;
  }

  /** Clear all items. */
  clear(): void {
    this.head = 0;
    this._size = 0;
    this.items.fill(undefined);
  }
}
