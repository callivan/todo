import { EFilters, ITodoAttributes } from '@types';

import { useSelectorTyped } from '../../types';
import { IInitialState } from './types';

const getCompletedTodos = (todos: ITodoAttributes[]) => todos.filter(({ completed }) => completed);

const getActiveTodos = (todos: ITodoAttributes[]) => todos.filter(({ completed }) => !completed);

export const getTodosByFilter = (state: IInitialState) => {
  switch (state.filter) {
    case EFilters.ACTIVE:
      return getActiveTodos(state.todos);
    case EFilters.COMPLETED:
      return getCompletedTodos(state.todos);
    default:
      return state.todos;
  }
};

export const getFilter = (state: IInitialState) => state.filter;

export const getEditTodo = (state: IInitialState) => state.editTodo;

export const useGetTodos = () => useSelectorTyped(({ todos }) => getTodosByFilter(todos));

export const useGetEditTodo = () => useSelectorTyped(({ todos }) => getEditTodo(todos));

export const useGetFilter = () => useSelectorTyped(({ todos }) => getFilter(todos));
