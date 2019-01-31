import styled, { css } from 'styled-components';
import { colors, spacing, radius, fontSets, font } from 'styles/variables';
import * as T from './Button.types';

export const Root = styled.button`
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  text-decoration: none;
  background: ${colors.yellow};
  color: ${colors.black};
  padding: 0 ${spacing.dp6}px;
  box-shadow: 0 4px 6px rgba(50, 50, 93, .11), 0 1px 3px rgba(0, 0, 0, .08);
  color: ${colors.black};
  cursor: pointer;
  border: 0;
  border-radius: ${radius.small}px;
  transition: 0.15s ease-in-out;
  transition-property: background, transform, box-shadow;
  position: relative;
  outline: none;
  font-family: ${font.family};
  text-transform: uppercase;
  height: ${spacing.dp10}px;
  font-weight: ${font.weightBold};
  ${fontSets.caption};
  line-height: ${spacing.dp10}px;

  &:hover {
    background: ${colors.yellowLight};
    transform: translateY(-1px);
    box-shadow: 0 7px 14px rgba(50, 50, 93, .1), 0 3px 6px rgba(0, 0, 0, .08);
  }

  &:active {
    top: 1px;
  }
  
  ${(props: T.StyledProps) => props.wide && css`
    width: 100%;
    display: block;
  `}
  
  ${(props: T.StyledProps) => props.variant === 'twitter' && css`
    background: ${colors.twitter};
    color: ${colors.white};
    
    &:hover {
      background: ${colors.twitterLight};
    }
  `}
`;

export const RootLink = Root.withComponent('a');

export const Icon = styled.span`
  margin-right: ${spacing.dp2}px;
  display: inline-block;
  vertical-align: middle
`;

export const Text= styled.span`
  display: inline-block;
  vertical-align: middle;
`;