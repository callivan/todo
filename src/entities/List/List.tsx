import styles from './styles.module.scss';
import { IListProps } from './types/component';

export default function List({ data, element }: IListProps) {
  return (
    <ul className={styles.list}>
      {data.map((d) => (
        <li key={d.id} className={styles.item}>
          {element(d)}
        </li>
      ))}
    </ul>
  );
}
