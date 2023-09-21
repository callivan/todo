import { EFilters } from '@types';

import { getEditTodo, getFilter, getTodosByFilter } from '../selectors';
import { IInitialState } from '../types';

describe('Testing todos selectors', () => {
  const todo = { id: new Date().toISOString(), text: 'Test todo text', completed: false };
  const initState: IInitialState = {
    todos: [todo, { ...todo, completed: true }],
    filter: null,
    editTodo: null,
  };

  it('Testing "getTodosByFilter" selector with "null" filter', () => {
    expect(getTodosByFilter(initState)).toHaveLength(2);
  });

  it('Testing "getTodosByFilter" selector with "active" filter', () => {
    expect(getTodosByFilter({ ...initState, filter: EFilters.ACTIVE })).toHaveLength(1);
  });

  it('Testing "getTodosByFilter" selector with "completed" filter', () => {
    expect(getTodosByFilter({ ...initState, filter: EFilters.COMPLETED })).toHaveLength(1);
  });

  it('Testing "getFilter" selector', () => {
    expect(getFilter({ ...initState, filter: EFilters.ACTIVE })).toBe(EFilters.ACTIVE);
  });

  it('Testing "getEditTodo" selector', () => {
    expect(getEditTodo({ ...initState, editTodo: todo })).not.toBeNull();
  });
});
