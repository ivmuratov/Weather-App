import styled, { createGlobalStyle } from 'styled-components';

import { Indent, MaxWidth } from './vars';

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

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

interface ContainerProps {
  maxWidth?: MaxWidth;
  indent?: Indent;
}

export const Container = styled.div<ContainerProps>`
  max-width: ${({ maxWidth = MaxWidth.mw1, indent = Indent.ind1 }) => maxWidth + indent * 2 + 'px'};
  padding: ${({ indent = Indent.ind1 }) => '0 ' + indent + 'px'};
  margin: 0 auto;
`;
