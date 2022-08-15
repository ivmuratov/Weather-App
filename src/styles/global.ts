import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

html,
body {
  font-family: 'Urbanist', sans-serif;
	font-weight: 400;
  height: 100%;
  color: #000000;
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
