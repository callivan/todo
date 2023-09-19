import { EFilters, ITodoAttributes } from '@types';

export interface IInitialState {
  todos: ITodoAttributes[];
  editTodo: ITodoAttributes | null;
  filter: EFilters | null;
}
