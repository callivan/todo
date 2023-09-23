type TTextarea = React.ComponentPropsWithRef<'textarea'>;

interface ITextareaOwnProps {
  form?: HTMLFormElement | null;
  maxHeight?: number;
  size?: 'lg' | 'md' | 'sm';
  cleaner?: {
    icon: JSX.Element;
    onClean: () => void;
  };
}

export type TTextareaProps = Omit<TTextarea, keyof ITextareaOwnProps> & ITextareaOwnProps;
