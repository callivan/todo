import classNames from 'classnames';
import { forwardRef } from 'react';

import styles from './styles.module.scss';
import { TButtonIconProps } from './types/component';

export const ButtonIcon = forwardRef<HTMLButtonElement, TButtonIconProps>(function ButtonText(
  { size = 'lg', isActive = false, children, className, ...props },
  ref,
) {
  return (
    <button
      data-size={size}
      data-active={isActive}
      ref={ref}
      className={classNames(
        //Custom class name
        className,

        styles.button,
      )}
      {...props}
    >
      {children}
    </button>
  );
});
