import { Text } from '@shared/ui';

import styles from './styles.module.scss';

export function Empty() {
  return (
    <div className={styles.container}>
      <Text className={styles.text}>It's empty so far.🧐</Text>
    </div>
  );
}
