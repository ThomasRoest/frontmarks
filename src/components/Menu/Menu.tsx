import React from 'react';
import { withRouter } from 'react-router-dom';
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
              <S.Link to={item.href} exact>{ item.text }</S.Link>
            </S.Item>
          ))
        }
      </S.Root>
    );
  }
}

export default withRouter(Menu);
