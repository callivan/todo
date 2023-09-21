import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EFilters, ITodoAttributes } from '@types';

import { IInitialState } from './types';

const initialState: IInitialState = {
  todos: [],
  editTodo: null,
  filter: null,
};

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.todos.push({ id: new Date().toISOString(), text: action.payload, completed: false });
    },

    updateTodo: (state, action: PayloadAction<ITodoAttributes>) => {
      const todo = state.todos.find(({ id }) => id === action.payload.id);

      if (todo) {
        todo.text = action.payload.text;
        todo.completed = action.payload.completed;
      }
    },

    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter(({ id }) => id !== action.payload);
    },

    cleanCompletedTodo: (state) => {
      state.todos = state.todos.filter(({ completed }) => !completed);
    },

    addEditTodo: (state, action: PayloadAction<ITodoAttributes>) => {
      state.editTodo = action.payload;
    },

    deleteEditTodo: (state) => {
      state.editTodo = null;
    },

    setFilter: (state, action: PayloadAction<EFilters | null>) => {
      state.filter = action.payload;
    },
  },
});

export const {
  addTodo,
  updateTodo,
  deleteTodo,
  cleanCompletedTodo,
  addEditTodo,
  deleteEditTodo,
  setFilter,
} = todosSlice.actions;

export const todosReducer = todosSlice.reducer;
