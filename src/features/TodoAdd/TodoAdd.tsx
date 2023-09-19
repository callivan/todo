import { IconCross, IconPlus } from '@shared/icons';
import { ButtonIcon, Textarea } from '@shared/ui';
import { useMatchMedia } from '@shared/utils';
import { deleteEditTodo, updateTodo, useDispatchTyped, useGetEditTodo } from '@store';
import { addTodo } from '@store';
import { useEffect, useRef, useState } from 'react';

import styles from './styles.module.scss';

export function TodoAdd() {
  const dispatch = useDispatchTyped();

  const editTodo = useGetEditTodo();

  const [value, setValue] = useState<string>('');

  const formRef = useRef<HTMLFormElement | null>(null);

  const { isTabletSmall, isMobileBig } = useMatchMedia({
    queries: {
      isTabletSmall: '(max-width: 744px) and (min-width: 596px)',
      isMobileBig: '(max-width:595px)',
    },
  });

  const size = isTabletSmall ? 'md' : isMobileBig ? 'sm' : 'lg';

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!value) return;

    if (editTodo) {
      dispatch(updateTodo({ ...editTodo, text: value }));
      dispatch(deleteEditTodo());
    } else {
      dispatch(addTodo(value));
    }

    setValue('');
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.currentTarget.value);
  };

  const handleClean = () => {
    setValue('');
  };

  useEffect(() => {
    if (!editTodo || !formRef.current) return;

    const textarea = formRef.current.elements.namedItem('textarea');

    if (!textarea || !(textarea instanceof HTMLElement)) return;

    textarea.focus();

    setValue(editTodo.text);
  }, [editTodo, formRef.current]);

  return (
    <form ref={formRef} onSubmit={handleSubmit} className={styles.form}>
      <Textarea
        spellCheck
        name="textarea"
        form={formRef.current}
        size={size}
        placeholder="Add todo"
        value={value}
        onChange={handleChange}
        cleaner={{ onClean: handleClean, icon: <IconCross width="100%" height="100%" /> }}
        className={styles.textarea}
      />

      <ButtonIcon type="submit" size={size} className={styles.button}>
        <IconPlus width="100%" height="100%" />
      </ButtonIcon>
    </form>
  );
}
