import styled, { css } from 'styled-components/macro';

interface ImgContainerProps {
  margin?: string;
  size?: string;
}

const ImgContainer = styled.img<ImgContainerProps>`
  margin: ${({ margin }) => margin};
  ${({ size }) => css`
    width: ${size};
    height: ${size};
  `};
`;

export default ImgContainer;
