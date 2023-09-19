import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { store } from './root';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useDispatchTyped: () => AppDispatch = useDispatch;
export const useSelectorTyped: TypedUseSelectorHook<RootState> = useSelector;
