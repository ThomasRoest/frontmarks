import React from 'react';
import * as S from './Container.styles';
import * as T from './Container.types';

class Container extends React.PureComponent<T.Props> {
  render() {
    const { children } = this.props;

    return (
      <S.Root>
        { children }
      </S.Root>
    )
  }
}

export default Container;
