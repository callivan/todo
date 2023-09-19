import { useEffect, useRef } from 'react';

interface IUseResizeProps {
  traget: HTMLElement | null;
  debounce?: number;
  isOff?: boolean;
  callback: (entry: ResizeObserverEntry) => void;
}

export function useResize({ traget, debounce = 500, isOff = false, callback }: IUseResizeProps) {
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const idle = useRef<number | null>(null);

  const cancel = () => {
    idle.current && cancelIdleCallback(idle.current);
    timer.current && clearTimeout(timer.current);
  };

  useEffect(() => {
    if (!traget || isOff) {
      cancel();
      return;
    }

    const observer = new ResizeObserver(([entry]) => {
      cancel();

      timer.current = setTimeout(() => {
        requestIdleCallback(() => callback(entry), { timeout: debounce });
      }, 500);
    });

    observer.observe(traget);

    return () => {
      observer.disconnect();
      cancel();
    };
  }, [traget, debounce, isOff]);
}
