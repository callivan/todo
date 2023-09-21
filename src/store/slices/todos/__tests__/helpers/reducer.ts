import { AnyAction } from '@reduxjs/toolkit';

import { todosReducer } from '../..';
import { IInitialState } from '../../types';

export const reducer = (action?: AnyAction, initState?: Partial<IInitialState>) =>
  todosReducer(
    {
      todos: initState?.todos ?? [],
      filter: initState?.filter ?? null,
      editTodo: initState?.editTodo ?? null,
    },
    action || { type: '' },
  );
