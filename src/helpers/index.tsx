export const getCurrentYear = (): number => new Date().getFullYear();

export const getElement = <T extends Element>(
  container: Element,
  selector: string
): T | null => container.querySelector<T>(selector);
