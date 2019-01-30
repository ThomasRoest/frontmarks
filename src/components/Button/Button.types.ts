import * as TIcon from 'components/Icon/Icon.types';

export type Props = {
  text: string,
  onClick?: () => void,
  type?: string,
  className?: string,
  href?: string,
  target?: string,
  variant?: 'twitter',
  wide?: boolean,
  icon?: TIcon.Props,
};

export type StyledProps = Pick<Props, 'wide' | 'variant'>;
