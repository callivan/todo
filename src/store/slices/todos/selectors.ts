import { EFilters, ITodoAttributes } from '@types';

import { useSelectorTyped } from '../../types';

const getCompletedTodos = (todos: ITodoAttributes[]) => todos.filter(({ completed }) => completed);
const getActiveTodos = (todos: ITodoAttributes[]) => todos.filter(({ completed }) => !completed);

export const useGetTodos = () =>
  useSelectorTyped((state) => {
    const todos = state.todos.todos;

    switch (state.todos.filter) {
      case EFilters.ACTIVE:
        return getActiveTodos(todos);
      case EFilters.COMPLETED:
        return getCompletedTodos(todos);
      default:
        return todos;
    }
  });

export const useGetEditTodo = () => useSelectorTyped((state) => state.todos.editTodo);

export const useGetFilter = () => useSelectorTyped((state) => state.todos.filter);
