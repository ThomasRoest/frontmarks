import React from 'react';
import Icon from 'components/Icon';
import * as S from './Button.styles';
import * as T from './Button.types';

class Button extends React.PureComponent<T.Props> {
  render() {
    const { text, onClick, type, variant, className, href, target, wide, icon } = this.props;
    const Root: React.ComponentType = href ? S.RootLink : S.Root;
    let tagProps: object = { className, onClick, variant, wide };

    if (!href) tagProps = { ...tagProps, type };
    if (href) tagProps = { ...tagProps, href, target };

    return (
      <Root {...tagProps}>
        { icon && <S.Icon><Icon {...icon} /></S.Icon> }
        <S.Text>{ text }</S.Text>
      </Root>
    );
  }
}

export default Button;
