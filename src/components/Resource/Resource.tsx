import React from 'react';
import * as S from './Resource.styles';
import * as T from './Resource.types';

class Resource extends React.PureComponent<T.Props> {
  render() {
    const { title, text, href, src, tags } = this.props;

    return (
      <S.Root href={href}>
        <S.Top>
          <S.TopInner>
            <S.Image src={src} />

            {
              tags && (
                <S.Tags>
                  { tags.map(tag => <S.Tag key={tag.text}>{ tag.text }</S.Tag>) }
                </S.Tags>
              )
            }
          </S.TopInner>
        </S.Top>
        <S.Title>{ title }</S.Title>
        <S.Text>{ text }</S.Text>
      </S.Root>
    )
  }
}

export default Resource;
