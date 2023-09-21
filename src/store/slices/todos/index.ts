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

export { useGetTodos, useGetEditTodo, useGetFilter } from './selectors';
