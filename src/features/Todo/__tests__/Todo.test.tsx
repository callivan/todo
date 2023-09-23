import '@testing-library/jest-dom';

import { renderWithRedux } from '@shared/utils';
import { IInitialState, todosReducer } from '@store';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Todo } from '..';

describe('Testing "Todo" component', () => {
  it('Testing changes in the completion status of a task', async () => {
    const initialState: IInitialState = {
      todos: [{ id: '1', text: '', completed: false }],
      filter: null,
      editTodo: null,
    };

    const { store } = renderWithRedux<'todos', IInitialState>({
      component: <Todo {...initialState.todos[0]} />,
      initialState: { todos: initialState },
      reducer: { todos: todosReducer },
    });

    const completedButtons = screen.getAllByTestId('completed');

    await userEvent.click(completedButtons[0]);

    expect(store.getState().todos.todos[0].completed).toBeTruthy();
  });

  it('Testing changes in the completion status of a task', async () => {
    const initialState: IInitialState = {
      todos: [{ id: '1', text: '', completed: true }],
      filter: null,
      editTodo: null,
    };

    const { store } = renderWithRedux<'todos', IInitialState>({
      component: <Todo {...initialState.todos[0]} />,
      initialState: { todos: initialState },
      reducer: { todos: todosReducer },
    });

    const completedButtons = screen.getAllByTestId('completed');
    const editedButtons = screen.getAllByTestId('edited');

    expect(editedButtons[0]).toBeDisabled();

    await userEvent.click(completedButtons[0]);

    expect(store.getState().todos.todos[0].completed).toBeFalsy();
  });

  it('Testing adding a task to the edit field', async () => {
    const initialState: IInitialState = {
      todos: [{ id: '1', text: '', completed: false }],
      filter: null,
      editTodo: null,
    };

    const { store } = renderWithRedux<'todos', IInitialState>({
      component: <Todo {...initialState.todos[0]} />,
      initialState: { todos: initialState },
      reducer: { todos: todosReducer },
    });

    const editedButtons = screen.getAllByTestId('edited');

    await userEvent.click(editedButtons[0]);

    expect(store.getState().todos.editTodo).not.toBeNull();
  });

  it('Testing task deletion', async () => {
    const initialState: IInitialState = {
      todos: [{ id: '1', text: '', completed: false }],
      filter: null,
      editTodo: null,
    };

    const { store } = renderWithRedux<'todos', IInitialState>({
      component: <Todo {...initialState.todos[0]} />,
      initialState: { todos: initialState },
      reducer: { todos: todosReducer },
    });

    const deletedButtons = screen.getAllByTestId('deleted');

    await userEvent.click(deletedButtons[0]);

    expect(store.getState().todos.todos).toHaveLength(0);
  });
});
