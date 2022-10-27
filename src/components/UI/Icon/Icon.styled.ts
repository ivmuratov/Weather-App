import styled from 'styled-components/macro';

interface IconStyledProps {
  margin?: string;
}

export const IconStyled = styled.i<IconStyledProps>`
  margin: ${({ margin }) => margin};
`;
