import { CombinedState, configureStore, PreloadedState, Reducer } from '@reduxjs/toolkit';
import { render, RenderOptions } from '@testing-library/react';
import { NoInfer, Provider } from 'react-redux';

interface IRenderWithReduxProps<Key extends string, InitType>
  extends Omit<RenderOptions, 'queries'> {
  component: JSX.Element;
  initialState: PreloadedState<CombinedState<NoInfer<Record<Key, InitType>>>>;
  reducer: Record<Key, Reducer<InitType>>;
}

export function renderWithRedux<Key extends string, InitType>({
  component,
  initialState,
  reducer,
  ...renderOptions
}: IRenderWithReduxProps<Key, InitType>) {
  const store = configureStore<Record<Key, InitType>>({
    reducer,
    preloadedState: initialState,
  });
  const provider = <Provider store={store}>{component}</Provider>;

  return { ...render(provider, { ...renderOptions }), store };
}
