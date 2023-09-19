import { TodoFilters } from '@features';
import { ButtonText, Text } from '@shared/ui';
import { useMatchMedia } from '@shared/utils';
import { cleanCompletedTodo, useDispatchTyped, useGetTodos } from '@store';

import styles from './styles.module.scss';

export function Header() {
  const dispatch = useDispatchTyped();

  const todos = useGetTodos();

  const { isTabletSmall, isMobileBig } = useMatchMedia({
    queries: {
      isTabletSmall: '(max-width: 744px) and (min-width: 596px)',
      isMobileBig: '(max-width:595px)',
    },
  });

  const size = isTabletSmall ? 'md' : isMobileBig ? 'sm' : 'lg';

  const handleCleanCompleted = () => {
    dispatch(cleanCompletedTodo());
  };

  return (
    <div className={styles.header}>
      <Text className={styles.counter}>{`${todos.length} items left`}</Text>

      <div className={styles.wrapper}>
        <TodoFilters />

        <ButtonText size={size} onClick={handleCleanCompleted}>
          Clear completed
        </ButtonText>
      </div>
    </div>
  );
}
