import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { spacing, colors, font } from 'styles/variables';

const activeClassName = 'active';

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

export const Link  = styled(NavLink).attrs({ activeClassName })`
  color: ${colors.black};

  &.${activeClassName} {
    font-weight: ${font.weightBold};
    cursor: default;

    &:hover {
      &:after {
        content: none
      }
    }
  }
`;
