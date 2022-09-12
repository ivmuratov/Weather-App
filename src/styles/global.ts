import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
html,
body {
  height: 100%;
}

body {
  font-family: 'Urbanist', sans-serif;
	font-weight: 600;
  transition: all 0.5s;
  background: ${(props) => props.theme.background} fixed;
  color: ${(props) => props.theme.color};  
}

._ibg {
    position: relative;
    
    img {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        object-fit: cover;
    }
}
`;
