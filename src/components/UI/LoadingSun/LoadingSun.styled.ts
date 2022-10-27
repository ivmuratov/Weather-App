import styled, { keyframes } from 'styled-components/macro';

import SvgContainer from '../SvgContainer/SvgContainer';

export const animate = keyframes`
  0% {
    transform: rotate(0deg);
  }    

  100% {
    transform: rotate(360deg);
  }
`;

export const LoadingSunStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  ${SvgContainer} {
    animation: ${animate} 10s linear infinite;
  }
`;
