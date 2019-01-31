import styled from 'styled-components';
import { fontSets, font, colors } from 'styles/variables';
import * as T from './Text.types';

export const Root = styled.span`
  display: block;

  ${(props: T.StyledProps) => props.variant && fontSets[props.variant]}
  
  ${(props: T.StyledProps) => props.color && `
    color: ${colors[props.color]};
  `}
  
  ${(props: T.StyledProps) => props.weight === 'bold' && `
    font-weight: ${font.weightBold};
  `}
`;