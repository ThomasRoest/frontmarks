import React from 'react';
import Icon from 'components/Icon';
import * as T from './IconToggle.types';
import * as S from './IconToggle.styles';

class IconToggle extends React.PureComponent<T.Props> {
  handleClick = () => {
    const { onToggleOn, onToggleOff, active } = this.props;

    if (!active && onToggleOn) onToggleOn();
    if (active && onToggleOff) onToggleOff();
  };

  render() {
    const { iconOff, iconOn, active } = this.props;

    return (
      <S.Root active={active} onClick={this.handleClick}>
        <S.Off><Icon {...iconOff} /></S.Off>
        <S.On><Icon {...iconOn} /></S.On>
      </S.Root>
    );
  }
}

export default IconToggle;
