import { useEffect, useState } from 'react';

interface IUseMutationContentProps {
  target: HTMLElement | null;
  config?: MutationObserverInit;
  callback?: (mutation: MutationRecord) => void;
}

const defaultConfig: MutationObserverInit = {
  childList: true,
  characterData: true,
  subtree: true,
  characterDataOldValue: true,
};

export function useMutationContent({
  target,
  config = defaultConfig,
  callback,
}: IUseMutationContentProps) {
  const [observer, setObserver] = useState<MutationObserver | null>(null);

  useEffect(() => {
    if (!callback) return;

    const obs = new MutationObserver(([mutation]) => {
      callback(mutation);
    });

    setObserver(obs);
  }, [callback]);

  useEffect(() => {
    if (!observer || !target) return;
    observer.observe(target, config);

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [observer, target, config]);
}
