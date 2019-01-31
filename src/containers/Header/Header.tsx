import React from 'react';
import Group from 'components/Group';
import Button from 'components/Button';
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
          <Group inline>
            <Button
              variant="transparent"
              text="Favorites"
              icon={{ name: 'heart' }}
              postfix="24"
            />

            <Button
              variant="twitter"
              text="Tweet"
              icon={{ name: 'twitter' }}
            />
          </Group>
        </S.Actions>
      </S.Root>
    )
  }
}

export default Header;
