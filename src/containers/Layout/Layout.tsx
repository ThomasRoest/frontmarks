import React from 'react';
import Container from 'components/Container';
import Header from 'containers/Header';
import * as S from './Layout.styles';
import * as T from './Layout.types';

class Layout extends React.PureComponent<T.Props> {
  render() {
    const { menu, content } = this.props;

    return (
      <S.Root>
        <Container>
          <Header />

          <S.Inner>
            <S.Menu>{ menu }</S.Menu>
            <S.Content>{ content }</S.Content>
          </S.Inner>
        </Container>
      </S.Root>
    );
  }
}

export default Layout;
