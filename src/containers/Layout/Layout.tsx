import React from 'react';
import { withRouter } from 'react-router-dom';
import Container from 'components/Container';
import Icon from 'components/Icon';
import Header from 'containers/Header';
import * as S from './Layout.styles';
import * as T from './Layout.types';

class Layout extends React.Component<T.Props, T.State> {
  state = {
    menuActive: false,
  };

  handleMenuToggle = () => {
    this.setState(state => ({ menuActive: !state.menuActive }));
  }

  handleMenuClose = () => {
    this.setState({ menuActive: false });
  }

  render() {
    const { menu, content, location } = this.props;
    const { menuActive } = this.state;

    return (
      <S.Root active={menuActive}>
        <Container>
          <Header />

          <S.Inner>
            <S.MobileMenuToggle onClick={this.handleMenuToggle}>
              <Icon name="menu" />
            </S.MobileMenuToggle>
            <S.Menu key={location.pathname}>{ menu }</S.Menu>
            <S.Overlay onClick={this.handleMenuClose} />
            <S.Content>{ content }</S.Content>
          </S.Inner>
        </Container>
      </S.Root>
    );
  }
}

export default withRouter(Layout);
