import classNames from 'classnames';
import { forwardRef } from 'react';

import styles from './styles.module.scss';
import { TButtonTextProps } from './types/component';

export const ButtonText = forwardRef<HTMLButtonElement, TButtonTextProps>(function ButtonText(
  { size = 'lg', isActive = false, children, className, disabled, ...props },
  ref,
) {
  const dataSet = { 'data-disabled': disabled, 'data-active': isActive, 'data-size': size };

  return (
    <button
      ref={ref}
      className={classNames(
        //Custom class name
        className,

        styles.button,
      )}
      {...dataSet}
      {...props}
    >
      <div className={styles.wrapper} {...dataSet}>
        {children}
      </div>

      <span className={styles.mark} {...dataSet} />
    </button>
  );
});
