import React from 'react';
import Icon from 'components/Icon';
import * as T from './IconToggle.types';
import * as S from './IconToggle.styles';

class IconToggle extends React.PureComponent<T.Props, T.State> {
  state = {
    active: this.props.defaultActive || false,
  };

  handleClick = () => {
    const { onToggleOn, onToggleOff } = this.props;
    const { active } = this.state;
    const nextActive = !active;

    this.setState({ active: nextActive });
    if (nextActive && onToggleOn) onToggleOn();
    if (!nextActive && onToggleOff) onToggleOff();
  };

  render() {
    const { iconOff, iconOn } = this.props;
    const { active } = this.state;

    return (
      <S.Root active={active} onClick={this.handleClick}>
        <S.Off><Icon {...iconOff} /></S.Off>
        <S.On><Icon {...iconOn} /></S.On>
      </S.Root>
    );
  }
}

export default IconToggle;
