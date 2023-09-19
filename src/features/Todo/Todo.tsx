import { IconCheck, IconCross, IconEdit } from '@shared/icons';
import { Accordion, ButtonIcon, Scroll, Text } from '@shared/ui';
import { useMatchMedia } from '@shared/utils';
import { addEditTodo, deleteTodo, updateTodo, useDispatchTyped } from '@store';
import { useEffect, useRef, useState } from 'react';

import styles from './styles.module.scss';
import { ITodoProps } from './types/component';

export function Todo(props: ITodoProps) {
  const dispatch = useDispatchTyped();

  const [isActive, setActive] = useState<boolean>(false);
  const [isOff, setOff] = useState<boolean>(false);

  const contentRef = useRef<HTMLDivElement | null>(null);

  const { isMobileBig } = useMatchMedia({ queries: { isMobileBig: '(max-width: 595px)' } });

  const size = isMobileBig ? 'sm' : 'md';

  const off = () => {
    if (!contentRef.current) return;

    const stringHeight = isMobileBig ? 20 : 22;
    const contentHeight = contentRef.current.getBoundingClientRect().height;

    setOff(contentHeight <= stringHeight);
  };

  const handleCompleted = () => {
    dispatch(updateTodo({ id: props.id, text: props.text, completed: !props.completed }));
  };

  const handleDelete = () => {
    dispatch(deleteTodo(props.id));
  };

  const handleEdit = () => {
    dispatch(addEditTodo({ id: props.id, text: props.text, completed: props.completed }));
  };

  const handleMutationContent = () => {
    off();
  };

  useEffect(() => {
    off();
  }, []);

  return (
    <Accordion
      data-active={isActive}
      className={styles.accordion}
      isOff={isOff}
      placeholder={
        <Placeholder
          size={size}
          onCompleted={handleCompleted}
          onDelete={handleDelete}
          onEdit={handleEdit}
          {...props}
        />
      }
      onMutation={handleMutationContent}
      onOpen={() => setActive(true)}
      onClose={() => setActive(false)}
    >
      <div className={styles.accordion__content}>
        <Scroll className={styles.accordion__scroll}>
          <div ref={contentRef}>
            <Text data-active={isActive} as="p" className={styles.accordion__text}>
              {props.text}
            </Text>
          </div>
        </Scroll>

        <Actions
          size={size}
          isActive={isActive}
          onCompleted={handleCompleted}
          onDelete={handleDelete}
          onEdit={handleEdit}
          {...props}
        />
      </div>
    </Accordion>
  );
}

interface ICommonProps extends ITodoProps {
  isActive: boolean;
  size: 'sm' | 'md' | 'lg';

  onCompleted: () => void;
  onDelete: () => void;
  onEdit: () => void;
}

interface IPlaceholderProps extends Omit<ICommonProps, 'isActive'> {}

function Placeholder(props: IPlaceholderProps) {
  return (
    <div className={styles.placeholder}>
      <Text className={styles.placeholder__text}>{props.text}</Text>

      {props.size === 'sm' ? null : <Actions isActive={false} {...props} />}
    </div>
  );
}

interface IActionsProps extends ICommonProps {}

function Actions({ completed, isActive, size, onCompleted, onDelete, onEdit }: IActionsProps) {
  return (
    <div data-active={isActive} className={styles.actions}>
      <ButtonIcon isActive={completed} size={size} onClick={onCompleted}>
        <IconCheck width="100%" height="100%" />
      </ButtonIcon>

      <ButtonIcon disabled={completed} size={size} onClick={onEdit}>
        <IconEdit width="100%" height="100%" />
      </ButtonIcon>

      <ButtonIcon size={size} onClick={onDelete}>
        <IconCross width="100%" height="100%" />
      </ButtonIcon>
    </div>
  );
}
