import classNames from 'classnames';
import { forwardRef, useRef } from 'react';

import styles from './styles.module.scss';
import { TTextareaProps } from './types/component';

export const Textarea = forwardRef<HTMLTextAreaElement, TTextareaProps>(function Textarea(
  { form = null, cleaner, value, className, maxHeight = 100, size = 'lg', onChange, ...props },
  ref,
) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange && onChange(e);

    if (!containerRef.current) return;

    const container = containerRef.current;
    const isScroll = container.clientHeight >= maxHeight;

    container.style.paddingRight = isScroll ? '4px' : '0px';
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.code === 'Enter') {
      e.preventDefault();

      form && form.requestSubmit();
    }
  };

  return (
    <div
      tabIndex={0}
      data-size={size}
      className={classNames(
        //Custom class name
        className,

        styles.wrapper,
      )}
    >
      <div data-size={size} ref={containerRef} style={{ maxHeight }} className={styles.container}>
        <textarea
          data-size={size}
          ref={ref}
          rows={1}
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          className={styles.textarea}
          {...props}
        />

        {value}
      </div>

      {value && cleaner && (
        <button
          data-size={size}
          data-testid="cross-button"
          type="button"
          onClick={cleaner.onClean}
          className={styles.button}
        >
          {cleaner.icon}
        </button>
      )}
    </div>
  );
});
