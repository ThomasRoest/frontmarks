import React from 'react';
import * as T from './Group.types';
import * as S from './Group.styles';

class Group extends React.PureComponent<T.Props> {
  render() {
    const { inline, children, size } = this.props;

    return <S.Root inline={inline} size={size}>{ children }</S.Root>;
  }
}

export default Group;
