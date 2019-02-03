import * as TIcon from 'components/Icon/Icon.types';

export type Props = {
  active?: boolean,
  iconOff: TIcon.Props,
  iconOn: TIcon.Props,
  onToggleOn?: () => void,
  onToggleOff?: () => void,
};

export type StyledProps = Pick<Props, 'active'>;