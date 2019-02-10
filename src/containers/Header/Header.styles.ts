import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { fontSets, font, colors, spacing } from 'styles/variables';

export const Root = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 850px) {
    flex-direction: column;
    align-items: start;
  }
`;

export const Logo = styled(NavLink)`
  padding: 0;
  background: none;
  border: 0;
  outline: none;
  font-weight: ${font.weightBold};
  color: ${colors.black};
  ${fontSets.heading}

  &:after {
    content: none;
  }
`;

export const Actions = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 850px) {
    margin-top: ${spacing.dp4}px;
  }
`;
