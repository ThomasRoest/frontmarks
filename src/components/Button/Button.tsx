import React from 'react';
import * as S from './Button.styles';
import * as T from './Button.types';

class Button extends React.PureComponent<T.Props> {
  render() {
    const { text, onClick, type, variant, className, href, target, wide } = this.props;
    const Root: React.ComponentType = href ? S.RootLink : S.Root;
    let tagProps: object = { className, onClick, variant, wide };

    if (!href) tagProps = { ...tagProps, type };
    if (href) tagProps = { ...tagProps, href, target };

    return (
      <Root {...tagProps}>
        { text }
      </Root>
    );
  }
}

export default Button;
