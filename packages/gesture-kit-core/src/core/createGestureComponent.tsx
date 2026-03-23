import React from 'react';

export function createGestureComponent<T>(name: string) {
  const Component: React.FC<T & { children?: React.ReactNode }> = ({ children }) => {
    return <>{children}</>;
  };
  Component.displayName = name;
  return Component;
}
