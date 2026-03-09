import { useState } from 'react';

type UseActiveKeyReturn<T> = [T | null, (key: T) => void];

export function useActiveKey<T = string>(
  initialState?: T | null,
): UseActiveKeyReturn<T> {
  const [activeKey, setActiveKey] = useState<T | null>(initialState ?? null);

  const toggleKey = (key: T) => {
    setActiveKey((prev) => (prev === key ? null : key));
  };

  return [activeKey, toggleKey];
}
