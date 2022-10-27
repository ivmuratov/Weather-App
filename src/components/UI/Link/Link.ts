import styled from 'styled-components/macro';

interface LinkProps {
  margin?: string;
}

const Link = styled.a<LinkProps>`
  margin: ${({ margin }) => margin};
  color: inherit;
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    color: #ff8c00;
  }
`;

export default Link;
