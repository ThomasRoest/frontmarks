import React from 'react';
import Button from 'components/Button';
import Icon from 'components/Icon';
import * as S from './Header.styles';
import * as T from './Header.types';

class Header extends React.PureComponent<T.Props> {
  render() {
    return (
      <S.Root>
        <S.Logo>
          Frontmarks
        </S.Logo>
        <S.Actions>
          <Button
            variant="twitter"
            text="Tweet"
            icon={{ name: 'twitter' }}
          />
        </S.Actions>
      </S.Root>
    )
  }
}

export default Header;
