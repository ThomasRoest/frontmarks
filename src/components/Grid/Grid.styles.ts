import styled from 'styled-components';
import { spacing } from 'styles/variables';

export const Root = styled.div`
  display: flex;
  align-items: top;
  flex-wrap: wrap;
  margin-top: -${spacing.dp10}px;
  margin-left: -${spacing.dp5}px;

  @media (max-width: 850px) {
    margin-left: -${spacing.dp2}px;
    margin-top: -${spacing.dp5}px;
  }
`;
