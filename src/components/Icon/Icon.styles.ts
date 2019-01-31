import styled from 'styled-components';
import { colors } from 'styles/variables';
import * as T from './Icon.types';

export const Root = styled.i`
  fill: currentColor;
  display: inline-flex;
  align-items: center;

  svg {
    width: 1em;
    height: 1em;
    display: inline-block;
    vertical-align: top;
  }
  
  g[fill] {
    fill: currentColor
  }
  
  ${(props: T.StyledProps) => props.color && `
    fill: ${colors[props.color]};
    
    g[fill] {
      fill: ${colors[props.color]}
    }
  `}
`;