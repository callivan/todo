type TDiv = React.ComponentPropsWithRef<'div'>;

interface IAccordionOwnProps {
  children: React.ReactElement;
  placeholder?: React.ReactElement;
  isOff?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
  onMutation?: (mutation: MutationRecord) => void;
}

export interface IAccordionRefProps {
  ref: () => HTMLDivElement | null;
}

export type TAccordionProps = Omit<TDiv, keyof IAccordionOwnProps> & IAccordionOwnProps;
