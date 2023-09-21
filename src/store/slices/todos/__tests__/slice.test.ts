import { EFilters } from '@types';

import { IInitialState } from '../types';
import { actionCreator, reducer } from './helpers';

const testName = (str: string) => `Testing "todosReducer" with ${str}`;

describe('Testing "todosSlice"', () => {
  const initTodo = { id: new Date().toISOString(), text: 'Init todo text', completed: false };
  const text = 'Test todo text';

  it(testName('default state'), () => {
    const initialState: IInitialState = { todos: [], filter: null, editTodo: null };

    expect(reducer()).toEqual(initialState);
  });

  it(testName('"addTodo" action'), () => {
    const action = actionCreator({ type: 'todos/addTodo', payload: text });

    expect(reducer(action).todos).toHaveLength(1);
  });

  it(testName('"updateTodo" action'), () => {
    const action = actionCreator({
      type: 'todos/updateTodo',
      payload: { ...initTodo, text, completed: true },
    });
    const changedRedicer = reducer(action, { todos: [initTodo] });

    expect(changedRedicer.todos[0].text).toBe(text);
    expect(changedRedicer.todos[0].completed).toBeTruthy();
  });

  it(testName('"deleteTodo" action'), () => {
    const action = actionCreator({ type: 'todos/deleteTodo', payload: initTodo.id });

    expect(reducer(action, { todos: [initTodo] }).todos).toHaveLength(0);
  });

  it(testName('"cleanCompletedTodo" action'), () => {
    const initTodos = [initTodo, { ...initTodo, completed: true }];
    const action = actionCreator({ type: 'todos/cleanCompletedTodo', payload: undefined });

    expect(reducer(action, { todos: initTodos }).todos).toHaveLength(1);
  });

  it(testName('"addEditTodo" action'), () => {
    const action = actionCreator({ type: 'todos/addEditTodo', payload: initTodo });

    expect(reducer(action).editTodo).not.toBeNull();
  });

  it(testName('"deleteEditTodo" action'), () => {
    const action = actionCreator({ type: 'todos/deleteEditTodo', payload: undefined });

    expect(reducer(action, { editTodo: initTodo }).editTodo).toBeNull();
  });

  it(testName('"setFilter" action'), () => {
    const action = actionCreator({ type: 'todos/setFilter', payload: EFilters.ACTIVE });

    expect(reducer(action).filter).not.toBeNull();
  });
});
