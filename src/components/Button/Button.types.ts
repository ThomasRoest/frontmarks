export type Props = {
  text: string,
  onClick?: () => void,
  type?: string,
  className?: string,
  href?: string,
  target?: string,
  variant?: 'twitter',
  wide?: boolean,
};

export type StyledProps = Pick<Props, 'wide' | 'variant'>;
