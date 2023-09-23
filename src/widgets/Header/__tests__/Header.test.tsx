import '@testing-library/jest-dom';

import { renderWithRedux } from '@shared/utils';
import { IInitialState, todosReducer } from '@store';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Header } from '..';

describe('Testing "Header" component', () => {
  it('Testing a counter with an empty state', async () => {
    const initialState: IInitialState = { todos: [], filter: null, editTodo: null };

    renderWithRedux<'todos', IInitialState>({
      component: <Header />,
      initialState: { todos: initialState },
      reducer: { todos: todosReducer },
    });

    expect(screen.getByTestId('counter')).toHaveTextContent(/0 items? left/i);
  });

  it('Testing a counter with a non-empty state', async () => {
    const initialState: IInitialState = {
      todos: [{ id: '', text: '', completed: false }],
      filter: null,
      editTodo: null,
    };

    renderWithRedux<'todos', IInitialState>({
      component: <Header />,
      initialState: { todos: initialState },
      reducer: { todos: todosReducer },
    });

    expect(screen.getByTestId('counter')).toHaveTextContent(/1 items? left/i);
  });

  it('Testing the clear completed tasks button', async () => {
    const initialState: IInitialState = {
      todos: [
        { id: '', text: '', completed: true },
        { id: '', text: '', completed: false },
      ],
      filter: null,
      editTodo: null,
    };

    const { store } = renderWithRedux<'todos', IInitialState>({
      component: <Header />,
      initialState: { todos: initialState },
      reducer: { todos: todosReducer },
    });

    await userEvent.click(screen.getByText(/Clear completed/i));

    expect(store.getState().todos.todos).toHaveLength(1);
  });
});
