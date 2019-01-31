import React from 'react';
import * as S from './Grid.styles';
import * as T from './Grid.types';

class Grid extends React.PureComponent<T.Props> {
  render() {
    const { children } = this.props;

    return (
      <S.Root>
        { children }
      </S.Root>
    );
  }
}

export default Grid;