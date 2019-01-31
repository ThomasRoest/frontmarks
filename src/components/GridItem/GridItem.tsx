import React from 'react';
import * as T from './GridItem.types';
import * as S from './GridItem.styles';

class GridItem extends React.PureComponent<T.Props> {
  render() {
    const { children } = this.props;

    return (
      <S.Root>
        <S.Inner>
          { children }
        </S.Inner>
      </S.Root>
    )
  }
}

export default GridItem;
