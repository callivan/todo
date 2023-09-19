import { ITodoAttributes } from '@types';

export interface IListProps {
  data: ITodoAttributes[];
  element: (data: ITodoAttributes) => JSX.Element;
}
