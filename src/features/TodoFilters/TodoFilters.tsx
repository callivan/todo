import { ButtonText } from '@shared/ui';
import { useMatchMedia } from '@shared/utils';
import { setFilter, useDispatchTyped, useGetFilter } from '@store';
import { EFilters } from '@types';
import React from 'react';

import styles from './styles.module.scss';

export function TodoFilters() {
  const dispatch = useDispatchTyped();

  const filter = useGetFilter();

  const { isTabletSmall, isMobileBig } = useMatchMedia({
    queries: {
      isTabletSmall: '(max-width: 744px) and (min-width: 596px)',
      isMobileBig: '(max-width:595px)',
    },
  });

  const size = isTabletSmall ? 'md' : isMobileBig ? 'sm' : 'lg';

  const handleChangeFilter = (e: React.MouseEvent<HTMLButtonElement>) => {
    const filter = e.currentTarget.name;
    dispatch(setFilter((filter as EFilters) || null));
  };

  return (
    <div className={styles.wrapper}>
      <ButtonText
        data-testid="all-filter"
        isActive={!filter}
        size={size}
        onClick={handleChangeFilter}
      >
        All
      </ButtonText>

      <ButtonText
        data-testid="active-filter"
        name={EFilters.ACTIVE}
        isActive={filter === EFilters.ACTIVE}
        size={size}
        onClick={handleChangeFilter}
      >
        Active
      </ButtonText>

      <ButtonText
        data-testid="completed-filter"
        name={EFilters.COMPLETED}
        isActive={filter === EFilters.COMPLETED}
        size={size}
        onClick={handleChangeFilter}
      >
        Completed
      </ButtonText>
    </div>
  );
}
