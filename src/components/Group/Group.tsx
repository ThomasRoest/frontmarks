import React from 'react';
import * as T from './Group.types';
import * as S from './Group.styles';

class Group extends React.PureComponent<T.Props> {
  render() {
    const { inline, children } = this.props;

    return <S.Root inline={inline}>{ children }</S.Root>;
  }
}

export default Group;
