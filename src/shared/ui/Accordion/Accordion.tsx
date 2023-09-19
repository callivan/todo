import classNames from 'classnames';
import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';

import styles from './styles.module.scss';
import { IAccordionRefProps, TAccordionProps } from './types/component';
import { useClickOutside } from './utils/useClickOutside';
import { useMutationContent } from './utils/useMutationContent';
import { useResize } from './utils/useResize';

export const Accordion = forwardRef<IAccordionRefProps, TAccordionProps>(function Accordion(
  {
    className,
    children,
    placeholder,
    isOff = false,
    onOpen,
    onClose,
    onClick,
    onMutation,
    ...props
  },
  ref,
) {
  const [isOpen, setOpen] = useState<boolean>(false);

  const accordionRef = useRef<HTMLDivElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  const setHeight = (height?: number) => {
    if (!wrapperRef.current || !contentRef.current) return;

    const contentHeight = contentRef.current.getBoundingClientRect().height;

    wrapperRef.current.style.height = `${height ?? contentHeight}px`;
  };

  const handleResize = () => {
    setHeight();
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isOff) return;

    onClick && onClick(e);
    setOpen(!isOpen);

    if (!isOpen) {
      onOpen && onOpen();
      setHeight();
    } else {
      onClose && onClose();
      setHeight(0);
    }
  };

  const handleClickOutside = () => {
    onClose && onClose();
    setOpen(false);
    setHeight(0);
  };

  useResize({ traget: accordionRef.current, isOff: !isOpen, callback: handleResize });
  useClickOutside({ target: accordionRef.current, isOff: !isOpen, callback: handleClickOutside });
  useMutationContent({ target: accordionRef.current, callback: onMutation });

  useImperativeHandle(
    ref,
    () => ({
      ref: () => accordionRef.current,
    }),
    [accordionRef.current],
  );

  useEffect(() => {
    setHeight(0);
  }, []);

  return (
    <div
      data-off={isOff}
      ref={accordionRef}
      className={classNames(
        //Custom class name
        className,

        styles.accordion,
      )}
      onClick={handleClick}
      {...props}
    >
      <div ref={wrapperRef} data-open={isOpen} className={styles.wrapper}>
        <div ref={contentRef} className={styles.content}>
          {children}
        </div>
      </div>

      <div data-open={isOpen} className={styles.placeholder}>
        {placeholder}
      </div>
    </div>
  );
});
