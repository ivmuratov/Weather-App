import { createGlobalStyle } from 'styled-components/macro';

import { BreakPoint } from './vars';

import Wrapper from '../components/UI/Wrapper/Wrapper';

export const GlobalStyles = createGlobalStyle`
  html,
  body {
    min-height: 100vh;
  }

  body {
    @media (min-width: ${BreakPoint.md1}) {
      &::-webkit-scrollbar {
        width: 4px;
      }

      &::-webkit-scrollbar-thumb {
        width: 4px;
        background-color: #878787;
      }
    }    
  }

  ${Wrapper} {
    font-family: 'Urbanist', sans-serif;
    font-size: 16px;
	  font-weight: 600;
    background: ${({ theme }) => theme.background} no-repeat 0 0 fixed;
    color: ${({ theme }) => theme.color};  
    transition: background 0.5s linear, color 0.5s linear;    
    background-size: 125% 125%;    
  }
`;
