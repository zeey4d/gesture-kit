/**
 * useDrag - useDrag hook
 */

import { useMemo } from 'react';

export interface useDragOptions {
  enabled?: boolean;
  [key: string]: any;
}

export function useDrag(options: useDragOptions = {}) {
  const { enabled = true } = options;
  return useMemo(() => {
    // TODO: Implement useDrag logic
    return { enabled };
  }, [enabled]);
}
