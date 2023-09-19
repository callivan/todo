import { configureStore } from '@reduxjs/toolkit';

import { todosReducer } from './slices';

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});
