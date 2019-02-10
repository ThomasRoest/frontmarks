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
    favorites: [],
  };

  componentDidMount() {
    subscribe(FAVORITES, (favorites) => {
      if (!favorites) return;

      this.setState({ favorites });
    });
  }

  handleFavoritesClick = () => {
    const { history } = this.props;

    history.push('/favorites');
  }

  handleShare = (e: Event) => {
    const { favorites } = this.state;
    const text = favorites.length
      ? 'Check out my favorite frontend resources on Frontmarks'
      : 'Frontmarks - frontend resources collection. Get on board and save your favorites.';
    const opts = `
      height=500,width=500,
      left=100,top=100,
      resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no,status=yes
    `;

    let shareUrl = window.location.origin;
    if (favorites.length) shareUrl += `?favorites=${favorites.join(',')}`;

    const url = `http://twitter.com/share?url=${shareUrl}&text=${text}`;

    e.preventDefault();
    window.open(url, 'twitter', opts);
  }

  render() {
    const { favorites } = this.state;
    const tweetText = favorites.length ? 'Share favorites' : 'Tweet';

    return (
      <S.Root>
        <S.Logo>Frontmarks</S.Logo>
        <S.Actions>
          <Group inline>
            <Button
              variant="transparent"
              text="Favorites"
              icon={{ name: 'heart' }}
              onClick={this.handleFavoritesClick}
              postfix={favorites.length.toString()}
            />

            <Button
              href="#"
              target="_blank"
              variant="twitter"
              text={tweetText}
              icon={{ name: 'twitter' }}
              onClick={this.handleShare}
            />
          </Group>
        </S.Actions>
      </S.Root>
    );
  }
}

export default withRouter(Header);
