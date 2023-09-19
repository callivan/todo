import { TButton } from '../../types/common';

interface IButtonTextOwnProps {
  children: string;
  size?: 'lg' | 'md' | 'sm';
  isActive?: boolean;
}

export type TButtonTextProps = Omit<TButton, keyof IButtonTextOwnProps> & IButtonTextOwnProps;
