import * as TIcon from 'components/Icon/Icon.types';

export type Props = {
  defaultActive?: boolean,
  iconOff: TIcon.Props,
  iconOn: TIcon.Props,
  onToggleOn?: () => void,
  onToggleOff?: () => void,
};

export type StyledProps = Pick<State, 'active'>;

export type State = {
  active: Props['defaultActive'],
}