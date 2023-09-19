import classNames from 'classnames';
import { forwardRef, useImperativeHandle, useRef } from 'react';

import styles from './styles.module.scss';
import { IScrollRefProps, TScrollProps } from './types/component';
import { useHoverDisabled } from './utils/useHoverDisabled';

export const Scroll = forwardRef<IScrollRefProps, TScrollProps>(function Scroll(
  { className, children, disabledHoverOnScroll = true, isOff = false, ...props },
  ref,
) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useHoverDisabled({
    wrapper: wrapperRef.current,
    target: containerRef.current,
    isOff: !disabledHoverOnScroll,
  });

  useImperativeHandle(
    ref,
    () => ({
      ref: () => wrapperRef.current,
    }),
    [wrapperRef.current],
  );

  return (
    <div
      data-scroll={!isOff}
      ref={wrapperRef}
      className={classNames(
        //Custom class name
        className,

        styles.scroll,
      )}
      {...props}
    >
      <div ref={containerRef} className={styles.container}>
        {children}
      </div>
    </div>
  );
});
