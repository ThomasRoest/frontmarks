import React from 'react';
import * as S from './Icon.styles';
import * as T from './Icon.types';

class Icon extends React.PureComponent<T.Props> {
  render() {
    const { name } = this.props;
    const svg = require(`./icons/${name}.svg`);

    return (
      <S.Root dangerouslySetInnerHTML={{ __html: svg }} />
    );
  }
}

export default Icon;