type TDiv = React.ComponentPropsWithRef<'div'>;

interface IScrollOwnProps {
  children: React.ReactElement;
  isOff?: boolean;
  disabledHoverOnScroll?: boolean;
}

export interface IScrollRefProps {
  ref: () => HTMLDivElement | null;
}

export type TScrollProps = Omit<TDiv, keyof IScrollOwnProps> & IScrollOwnProps;
