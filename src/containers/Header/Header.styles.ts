import styled from 'styled-components';
import { fontSets, font } from 'styles/variables';

export const Root = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.button`
  padding: 0;
  background: none;
  border: 0;
  outline: none;
  font-weight: ${font.weightBold};
  ${fontSets.heading}
`;

export const Actions = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
`;