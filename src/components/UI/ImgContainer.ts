import styled from 'styled-components';

interface ImgContainerProps {
  size?: string;
}

export const ImgContainer = styled.img<ImgContainerProps>`
  height: ${({ size }) => size};
  width: ${({ size }) => size};
`;
