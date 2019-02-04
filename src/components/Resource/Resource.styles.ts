import styled from 'styled-components';
import { colors, fontSets, font, radius, spacing } from 'styles/variables';
import * as T from './Resource.types';

export const Root = styled.div`
  color: ${colors.black};
  position: relative;
`;

export const Layer = styled.a`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 2;
  text-decoration: none;

  &:hover:after {
    content: none;
  }
`;

export const Top = styled.div`
  position: relative;
  padding-top: 100%;
  background: ${colors.grayLight};
  border-radius: ${radius.medium}px;
  overflow: hidden;
  margin-bottom: ${spacing.dp4}px;
`;

export const TopInner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

export const Image = styled.div`
  background-image: url(${(props: T.StyledImageProps) => props.src});
`;

export const Tags = styled.div`
   position: absolute;
   top: ${spacing.dp2}px;
   right: ${spacing.dp2}px;
`;

export const Tag = styled.div`
  background: rgba(0, 0, 0, 0.3);
  color: ${colors.white};
  padding: 0 ${spacing.dp}px;
  border-radius: ${radius.small}px;
  ${fontSets.caption}
`;

export const Like = styled.div`
  position: absolute;
  z-index: 3;
  color: ${colors.white};
  right: ${spacing.dp2}px;
  bottom: ${spacing.dp2}px;
`;

export const Title = styled.div`
  font-weight: ${font.weightBold};
  margin-bottom: ${spacing.dp}px;
  ${fontSets.heading}
`;

export const Text = styled.div`
   color: ${colors.gray};
  ${fontSets.body};
`;
