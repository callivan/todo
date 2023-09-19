import { TodoAdd } from '@features';

import styles from './styles.module.scss';

export function Footer() {
  return (
    <div className={styles.wrapper}>
      <TodoAdd />
    </div>
  );
}
