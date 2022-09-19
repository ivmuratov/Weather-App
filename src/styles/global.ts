import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html,
  body {
    height: 100%;
  }

  body {
    font-family: 'Urbanist', sans-serif;
	  font-weight: 600;
    background: ${(props) => props.theme.background} fixed;
    color: ${(props) => props.theme.color};  
    transition: background 0.5s linear, color 0.5s linear;
  }  
`;
