import { useLayoutEffect, useState } from 'react';

interface IUseMathMediaProps<T extends Record<string, string>> {
  queries: T;
}

type TReturned<T> = Record<keyof T, boolean>;

export function useMatchMedia<T extends Record<string, string>>({
  queries,
}: IUseMathMediaProps<T>): TReturned<T> {
  const medias =
    typeof window === 'undefined'
      ? []
      : Object.entries(queries).map((query) => ({
          name: query[0],
          media: matchMedia(query[1]),
        }));

  const initialResults = medias.reduce((acc: TReturned<T>, { name, media: { matches } }) => {
    acc[name as keyof T] = matches;
    return acc;
  }, {} as TReturned<T>);

  const [results, setResults] = useState<TReturned<T>>(initialResults);

  useLayoutEffect(() => {
    const handleChange = (e: MediaQueryListEvent) => {
      const media = medias.find(({ media }) => media.media === e.media);

      if (!media) return results;

      results[media.name as keyof T] = e.matches;

      setResults({ ...results });
    };

    medias.map(({ media }) => media.addEventListener('change', handleChange));

    return () => {
      medias.map(({ media }) => media.removeEventListener('change', handleChange));
    };
  }, []);

  return results;
}
