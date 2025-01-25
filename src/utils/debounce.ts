type DebounceFunction = (...args: any[]) => void;

export const debounce = (func: DebounceFunction, delay: number = 500): DebounceFunction => {
  let timer: NodeJS.Timeout;

  return (...args: any[]) => {
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      func(...args);
    }, delay);
  };
};
