import { createGlobalStyle } from 'styled-components/macro';

import { BreakPoint } from './vars';

import Wrapper from '../components/UI/Wrapper';

export const GlobalStyles = createGlobalStyle`
  html,
  body {
    min-height: 100vh;
  }

  ${Wrapper} {
    font-family: 'Urbanist', sans-serif;
	  font-weight: 600;
    background: ${(props) => props.theme.background} no-repeat 0 0 fixed;
    color: ${(props) => props.theme.color};  
    transition: background 0.5s linear, color 0.5s linear;

    @media (max-width: ${BreakPoint.md2}) {
      background-size: 110% 110%;
    }
  }
`;
