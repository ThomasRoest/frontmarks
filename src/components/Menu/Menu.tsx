import React from 'react';
import * as T from './Menu.types';
import * as S from './Menu.styles';

class Menu extends React.PureComponent<T.Props> {
  render() {
    const { items } = this.props;

    return (
      <S.Root>
        {
          items.map(item => (
            <S.Item key={item.text}>
              { item.text }
            </S.Item>
          ))
        }
      </S.Root>
    )
  }
}

export default Menu;
