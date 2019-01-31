import styled from 'styled-components';
import { spacing } from 'styles/variables';

export const Root = styled.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;
`;

export const Item = styled.li`
  margin-top: ${spacing.dp3}px;
  
  &:first-child {
    margin-top: 0;
  }
`;