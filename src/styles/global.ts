import { createGlobalStyle } from 'styled-components'
import { colors, font } from './variables';

export default createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    min-height: 100%;
    color: ${colors.black};
    background: ${colors.white};
    font-family: ${font.family};
  }
  
  a {
    text-decoration: none;
    position: relative;
    color: ${colors.blueLight};
    
    &:after {
      content: '';
      height: 1px;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: currentColor;
      position: absolute;
      opacity: 0;
      transition: opacity 0.15s ease-in-out;
    }
    
    &:hover:after {
      opacity: 1;
    }
  }
`