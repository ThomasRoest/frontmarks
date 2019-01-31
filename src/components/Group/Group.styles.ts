import styled from 'styled-components';
import { spacing } from 'styles/variables';
import * as T from './Group.types';

export const Root = styled.div`
  & > * {
    display: block;
    margin-top: ${spacing.dp5}px;

    &:first-child {
      margin-top: 0;
    }
  }

  ${(props: T.StyledProps) => props.inline && `
    & > * {
      display: inline-block;
      vertical-align: top;
      margin-top: 0;
      margin-right: ${spacing.dp5}px;
    }
  `}
`;