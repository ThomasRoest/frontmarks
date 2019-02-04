import React from 'react';
import { withRouter } from 'react-router-dom';
import Container from 'components/Container';
import Header from 'containers/Header';
import * as S from './Layout.styles';
import * as T from './Layout.types';

class Layout extends React.Component<T.Props> {
  render() {
    const { menu, content, location } = this.props;

    return (
      <S.Root>
        <Container>
          <Header />

          <S.Inner>
            <S.Menu key={location.pathname}>{ menu }</S.Menu>
            <S.Content>{ content }</S.Content>
          </S.Inner>
        </Container>
      </S.Root>
    );
  }
}

export default withRouter(Layout);
