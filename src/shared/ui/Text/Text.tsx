import classNames from 'classnames';
import { ElementType } from 'react';

import styles from './styles.module.scss';
import { TElements, TTextProps } from './types/component';

export function Text<T extends ElementType = TElements>({
  children,
  as,
  className,
  ...props
}: TTextProps<T>) {
  const Tag = as || 'span';
  return (
    <Tag
      className={classNames(
        //Custom class name
        className,

        styles.text,
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
