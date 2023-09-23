export {
  todosReducer,
  addTodo,
  updateTodo,
  deleteTodo,
  cleanCompletedTodo,
  addEditTodo,
  deleteEditTodo,
  setFilter,
} from './slice';

export type { IInitialState } from './types';

export { useGetTodos, useGetEditTodo, useGetFilter } from './selectors';
