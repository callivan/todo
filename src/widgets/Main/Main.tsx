import { Empty } from '@entities';
import { Todo } from '@features';
import { Scroll } from '@shared/ui';
import { useGetTodos } from '@store';
import { lazy, Suspense } from 'react';

const List = lazy(() => import('../../entities/List/index'));

export function Main() {
  const todos = useGetTodos();

  return (
    <Scroll>
      {todos && todos.length ? (
        <Suspense>
          <List data={todos} element={(d) => <Todo {...d} />} />
        </Suspense>
      ) : (
        <Empty />
      )}
    </Scroll>
  );
}
