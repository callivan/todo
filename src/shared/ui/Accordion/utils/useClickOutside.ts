import { useEffect } from 'react';

interface IUseClickOutside {
  target: HTMLElement | null;
  isOff?: boolean;
  callback: () => void;
}

export function useClickOutside({ target, isOff, callback }: IUseClickOutside) {
  useEffect(() => {
    if (!target || isOff) return;
    const handleClickOutside = (e: MouseEvent) => {
      const targetEl = e.target;

      if (!targetEl || !(targetEl instanceof HTMLElement) || !target.contains(targetEl)) {
        callback();
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => document.removeEventListener('click', handleClickOutside);
  }, [target, isOff]);
}
