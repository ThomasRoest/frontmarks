import styled from 'styled-components';
import { colors, spacing, radius, fontSets } from 'styles/variables';
import * as T from './IconToggle.types';

const indicatorStyles = `
  line-height: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transition: 0.15s ease-in-out;
  transition-property: opacity, transform;
`;

export const Off = styled.span`
  ${indicatorStyles}
  transform: translate(-50%, -50%);
`;

export const On = styled.span`
  ${indicatorStyles}
  transform: translate(-50%, -50%) scale(0);
  z-index: 1;
`;

export const Root = styled.button`
  position: relative;
  background: none;
  border: 0;
  padding: 0;
  width: ${spacing.dp8}px;
  height: ${spacing.dp8}px;
  background: rgba(0, 0, 0, 0.15);
  border-radius: ${radius.medium}px;
  cursor: pointer;
  outline: 0;
  transition: background 0.15s ease-in-out;
  vertical-align: top;
  color: ${colors.white};
  ${fontSets.lead}

  &:hover {
    background: rgba(0, 0, 0, 0.2);
  }

  ${(props: T.StyledProps) => props.active && `
    ${On} {
      transform: translate(-50%, -50%) scale(1);
    }

    ${Off} {
      opacity: 0;
    }
  `}
`;
