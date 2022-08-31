import styled from 'styled-components';

interface ImgContainerProps {
  margin?: string;
  size?: string;
}

export const ImgContainer = styled.img<ImgContainerProps>`
  margin: ${({ margin }) => margin};
  height: ${({ size }) => size};
  width: ${({ size }) => size};
`;
