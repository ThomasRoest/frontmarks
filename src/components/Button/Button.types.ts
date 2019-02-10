import * as TIcon from 'components/Icon/Icon.types';

export type Props = {
  text: string,
  onClick?: (e: Event) => void,
  type?: string,
  className?: string,
  href?: string,
  target?: string,
  variant?: 'twitter' | 'transparent',
  wide?: boolean,
  icon?: TIcon.Props,
  postfix?: string,
};

export type StyledProps = Pick<Props, 'wide' | 'variant'>;
