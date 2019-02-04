import React from 'react';
import { withRouter } from 'react-router-dom';
import Group from 'components/Group';
import Button from 'components/Button';
import { subscribe } from 'utilities/storage';
import { FAVORITES } from 'constants/lsKeys';
import * as S from './Header.styles';
import * as T from './Header.types';

class Header extends React.PureComponent<T.Props, T.State> {
  state: T.State = {
    favoritesCount: 0,
  };

  componentDidMount() {
    subscribe(FAVORITES, (favorites) => {
      if (!favorites) return;

      this.setState({ favoritesCount: favorites.length });
    });
  }

  handleFavoritesClick = () => {
    const { history } = this.props;

    history.push('/favorites');
  }

  render() {
    const { favoritesCount } = this.state;

    return (
      <S.Root>
        <S.Logo>
          Frontmarks
        </S.Logo>
        <S.Actions>
          <Group inline>
            <Button
              variant="transparent"
              text="Favorites"
              icon={{ name: 'heart' }}
              onClick={this.handleFavoritesClick}
              postfix={favoritesCount.toString()}
            />

            <Button
              variant="twitter"
              text="Tweet"
              icon={{ name: 'twitter' }}
            />
          </Group>
        </S.Actions>
      </S.Root>
    );
  }
}

export default withRouter(Header);
