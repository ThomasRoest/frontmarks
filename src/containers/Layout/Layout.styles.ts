import styled from 'styled-components';
import { spacing } from 'styles/variables';

export const Root= styled.div`
  padding: ${spacing.dp5}px;
`;

export const Inner = styled.div`
  display: flex;
  align-items: top;
  margin-top: ${spacing.dp10}px;
`;

export const Menu = styled.div`
  width: ${spacing.dp * 40}px;
  padding-right: ${spacing.dp5}px;
`;

export const Content = styled.div`
  flex-grow: 1;
`;
