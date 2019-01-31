import React from 'react';
import * as S from './Text.styles';
import * as T from './Text.types';

class Text extends React.PureComponent<T.Props> {
  render() {
    const { children, variant, color } = this.props;

    return (
      <S.Root variant={variant} color={color}>
        { children }
      </S.Root>
    );
  }
}

export default Text;
