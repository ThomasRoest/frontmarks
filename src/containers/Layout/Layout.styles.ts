import styled from 'styled-components';
import { spacing, colors, font } from 'styles/variables';
import * as T from './Layout.types';

export const Root = styled.div`
  padding: ${spacing.dp5}px;

  @media (max-width: 850px) {
    padding: ${spacing.dp2}px;
  }

  ${(props: T.StyledProps) => props.active && `
    @media (max-width: 850px) {
      ${Menu} {
        transform: translateX(0);
      }

      ${Overlay} {
        opacity: 0.6;
        visibility: visible;
      }
    }
  `}
`;

export const Overlay = styled.div`
  content: '';
  position: fixed;
  z-index: 99;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: ${colors.black};
  opacity: 0;
  visibility: hidden;
  transition: 0.2s cubic-bezier(0.4, 0.0, 0.2, 1);
  transition-property: opacity, visibility;
`;

export const Inner = styled.div`
  display: flex;
  align-items: top;
  margin-top: ${spacing.dp10}px;
`;

export const Menu = styled.div`
  width: ${spacing.dp * 40}px;
  min-width: ${spacing.dp * 40}px;
  padding-right: ${spacing.dp10}px;

  @media (max-width: 850px) {
    transition: transform 0.25s cubic-bezier(0.4, 0.0, 0.2, 1);
    transform: translateX(-110%);
    width: ${spacing.dp * 50}px;
    padding: ${spacing.dp5}px;
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    bottom: 0;
    background: ${colors.white};
    border-right: 1px solid ${colors.grayLight};
    box-shadow:
      0px 8px 10px -5px rgba(0,0,0,0.2),
      0px 16px 24px 2px rgba(0,0,0,0.14),
      0px 6px 30px 5px rgba(0,0,0,0.12);
  }
`;

export const MobileMenuToggle = styled.button`
  display: none;
  position: absolute;
  right: ${spacing.dp2}px;
  top: ${spacing.dp2}px;
  background: none;
  border: 0;
  height: ${spacing.dp10}px;
  width: ${spacing.dp10}px;
  padding: 0;
  align-items: center;
  justify-content: center;
  font-size: ${font.headingSize}px;
  line-height: ${spacing.dp10}px;
  outline: none;
  cursor: pointer;

  @media (max-width: 850px) {
    display: flex;
  }
`;

export const Content = styled.div`
  flex-grow: 1;
`;
