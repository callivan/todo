import '@testing-library/jest-dom';

import { renderWithRedux } from '@shared/utils';
import { IInitialState, todosReducer } from '@store';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { EFilters } from '@types';

import { TodoFilters } from '..';

describe('Testing "TodoFilters" component', () => {
  it('Testing switching to all filters', async () => {
    const initialState: IInitialState = {
      todos: [],
      filter: null,
      editTodo: null,
    };

    const { store } = renderWithRedux<'todos', IInitialState>({
      component: <TodoFilters />,
      initialState: { todos: initialState },
      reducer: { todos: todosReducer },
    });

    const buttonAll = screen.getByTestId('all-filter');

    await userEvent.click(buttonAll);

    expect(store.getState().todos.filter).toBeNull();
  });

  it('Testing switching to active filters', async () => {
    const initialState: IInitialState = {
      todos: [],
      filter: null,
      editTodo: null,
    };

    const { store } = renderWithRedux<'todos', IInitialState>({
      component: <TodoFilters />,
      initialState: { todos: initialState },
      reducer: { todos: todosReducer },
    });

    const buttonActive = screen.getByTestId('active-filter');

    await userEvent.click(buttonActive);

    expect(store.getState().todos.filter).toBe(EFilters.ACTIVE);
  });

  it('Testing switching to completed filters', async () => {
    const initialState: IInitialState = {
      todos: [],
      filter: null,
      editTodo: null,
    };

    const { store } = renderWithRedux<'todos', IInitialState>({
      component: <TodoFilters />,
      initialState: { todos: initialState },
      reducer: { todos: todosReducer },
    });

    const buttonCompleted = screen.getByTestId('completed-filter');

    await userEvent.click(buttonCompleted);

    expect(store.getState().todos.filter).toBe(EFilters.COMPLETED);
  });
});
