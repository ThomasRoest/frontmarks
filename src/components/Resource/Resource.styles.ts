import styled, { css } from 'styled-components';
import { colors, fontSets, font, radius, spacing } from 'styles/variables';
// import * as T from './Resource.types';

export const Top = styled.div`
  position: relative;
  z-index: 5;
  padding-top: 100%;
  background: #fff;
  border: 1px solid ${colors.grayLight};
  border-radius: ${radius.large}px;
  overflow: hidden;
  margin-bottom: ${spacing.dp4}px;
  transition: 0.15s ease-in-out;
  transition-property: transform, box-shadow;
  pointer-events: none;
`;

export const Image = styled.img`
  max-width: 70%;
`;

// TODO: Replace any with T.StyledProps
export const Root = styled.div`
  color: ${colors.black};
  position: relative;

  &:hover ${Top} {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16);
    transform: translateY(-4px);
  }

  &:active ${Top} {
    transform: translateY(-2px);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.16);
  }

  ${(props: any) => props.full && css`
    ${Image} {
      width: 100%;
      height: 100%;
      max-width: 100%;
    }
  `}
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

export const TopInner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Tags = styled.div`
   position: absolute;
   bottom: ${spacing.dp2}px;
   right: ${spacing.dp2}px;
`;

export const Tag = styled.div`
  background: rgba(0, 0, 0, 0.3);
  color: ${colors.white};
  padding: 0 ${spacing.dp}px;
  border-radius: ${radius.small}px;
  display: inline-block;
  margin-left: ${spacing.dp}px;
  ${fontSets.caption}
`;

export const Like = styled.div`
  position: absolute;
  pointer-events: all;
  color: ${colors.white};
  right: ${spacing.dp2}px;
  top: ${spacing.dp2}px;
`;

export const Title = styled.div`
  font-weight: ${font.weightBold};
  margin-bottom: ${spacing.dp}px;
  ${fontSets.heading}
`;

export const Text = styled.div`
   color: ${colors.gray};
   display: -webkit-box;
   -webkit-line-clamp: 4;
   -webkit-box-orient: vertical;
   overflow: hidden;
   white-space: pre-wrap;
  ${fontSets.body};
`;
