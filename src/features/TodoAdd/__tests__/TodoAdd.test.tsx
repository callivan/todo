import '@testing-library/jest-dom';

import { renderWithRedux } from '@shared/utils';
import { IInitialState, todosReducer } from '@store';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { TodoAdd } from '..';

describe('Testing "TodoAdd" component', () => {
  it('Testing adding a task', async () => {
    const initialState: IInitialState = {
      todos: [],
      filter: null,
      editTodo: null,
    };

    const { store } = renderWithRedux<'todos', IInitialState>({
      component: <TodoAdd />,
      initialState: { todos: initialState },
      reducer: { todos: todosReducer },
    });

    const text = 'Test text';
    const textarea = screen.getByRole('textbox');

    await userEvent.type(textarea, text);

    expect(textarea).toHaveValue(text);

    await userEvent.click(screen.getByTestId('submit-button'));

    expect(store.getState().todos.todos).toHaveLength(1);
  });

  it('Testing editing a task', async () => {
    const todo = { id: '1', text: 'Init', completed: false };
    const initialState: IInitialState = {
      todos: [todo],
      filter: null,
      editTodo: todo,
    };

    const { store } = renderWithRedux<'todos', IInitialState>({
      component: <TodoAdd />,
      initialState: { todos: initialState },
      reducer: { todos: todosReducer },
    });

    const text = 'text';
    const textarea = screen.getByRole('textbox');

    await userEvent.type(textarea, `{backspace}${text}`, {
      initialSelectionEnd: 0,
      initialSelectionStart: 4,
    });
    await userEvent.click(screen.getByTestId('submit-button'));

    expect(store.getState().todos.todos[0].text).toBe(text);
    expect(store.getState().todos.editTodo).toBeNull();
  });
});
