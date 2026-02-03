"use client";

import { useEffect, useState } from "react";

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(initialValue);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const raw = window.localStorage.getItem(key);
    if (raw) {
      try {
        setStoredValue(JSON.parse(raw) as T);
      } catch {
        setStoredValue(initialValue);
      }
    }
    setReady(true);
  }, [initialValue, key]);

  useEffect(() => {
    if (!ready) return;
    window.localStorage.setItem(key, JSON.stringify(storedValue));
  }, [key, ready, storedValue]);

  return { storedValue, setStoredValue, ready };
}
