import { useEffect } from 'react';

interface IUseHoverDisabledProps {
  wrapper: HTMLElement | null;
  target: HTMLElement | null;
  isOff?: boolean;
  delay?: number;
}

export function useHoverDisabled({
  wrapper,
  target,
  isOff = false,
  delay = 300,
}: IUseHoverDisabledProps) {
  useEffect(() => {
    if (!wrapper || !target) return;

    const handleScroll = () => {
      if (isOff) return;

      target.style.pointerEvents = 'none';

      setTimeout(() => {
        target.style.pointerEvents = 'visible';
      }, delay);
    };

    wrapper.addEventListener('scroll', handleScroll);

    return () => wrapper.removeEventListener('scroll', handleScroll);
  }, [wrapper, target, isOff, delay]);
}
