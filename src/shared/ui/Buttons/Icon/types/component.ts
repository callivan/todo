import { TButton } from '../../types/common';

interface IButtonIconOwnProps {
  children: JSX.Element;
  size?: 'lg' | 'md' | 'sm';
  isActive?: boolean;
}

export type TButtonIconProps = Omit<TButton, keyof IButtonIconOwnProps> & IButtonIconOwnProps;
