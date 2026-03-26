export function readBooleanFromStorage(
  key: string,
  fallback: boolean,
): boolean {
  const raw = localStorage.getItem(key);
  if (raw == null) return fallback;

  try {
    const parsed: unknown = JSON.parse(raw);
    return typeof parsed === 'boolean' ? parsed : fallback;
  } catch {
    return fallback;
  }
}

export function writeBooleanToStorage(key: string, value: boolean): void {
  localStorage.setItem(key, JSON.stringify(value));
}

