import { FC } from 'react';
import styled, { keyframes } from 'styled-components/macro';

import ImgContainer from './ImgContainer';

import sunny from '../../imgs/clouds/sunny.svg';

const animate = keyframes`
  0% {
    transform: rotate(0deg);
  }    

  100% {
    transform: rotate(360deg);
  }
`;

const LoadingSunStyled = styled.div`
  animation: ${animate} 10s linear infinite;
`;

interface LoadingSunProps {
  size: string;
}

const LoadingSun: FC<LoadingSunProps> = ({ size }) => {
  return (
    <LoadingSunStyled>
      <ImgContainer src={sunny} size={size} margin='0 auto' />
    </LoadingSunStyled>
  );
};

export default LoadingSun;
