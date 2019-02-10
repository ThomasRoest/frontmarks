import styled from 'styled-components';
import { spacing } from 'styles/variables';
import * as T from './Group.types';

export const Root = styled.div`
  & > * {
    display: block;
    margin-top: ${(props: T.StyledProps) => props.size === 'small' ? spacing.dp2 : spacing.dp5}px;

    &:first-child {
      margin-top: 0;
    }
  }

  ${(props: T.StyledProps) => props.inline && `
    & > * {
      display: inline-block;
      vertical-align: top;
      margin-top: 0;
      margin-right: ${spacing.dp2}px;

      &:last-child {
        margin-right: 0;
      }
    }
  `}
`;
