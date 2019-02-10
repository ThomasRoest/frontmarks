import styled from 'styled-components';
import { spacing } from 'styles/variables';

export const Root = styled.div`
  width: 25%;

  @media (max-width: 850px) {
    width: 33.33%;
  }

  @media (max-width: 600px) {
    width: 50%;
  }
`;

export const Inner = styled.div`
  padding-left: ${spacing.dp5}px;
  padding-top: ${spacing.dp10}px;

  @media (max-width: 850px) {
    padding-left: ${spacing.dp2}px;
    padding-top: ${spacing.dp5}px;
  }
`;
