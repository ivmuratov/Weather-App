import styled, { css } from 'styled-components';

interface ImgContainerProps {
  margin?: string;
  size?: string;
}

export const ImgContainer = styled.img<ImgContainerProps>`
  margin: ${({ margin }) => margin};
  ${({ size }) => css`
    width: ${size};
    height: ${size};
  `};
`;
