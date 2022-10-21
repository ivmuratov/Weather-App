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
    color: ${({ theme }) => theme.link.hoverColor};
  }
`;

export default Link;
