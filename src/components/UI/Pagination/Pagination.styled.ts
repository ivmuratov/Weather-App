import styled from 'styled-components/macro';

interface PageNumberProps {
  active: boolean;
}

export const PaginationStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PageList = styled.ul`
  display: flex;
`;

export const PageNumber = styled.li<PageNumberProps>`
  font-size: 24px;
  padding: 10px;
  margin: 0 10px 0 0;
  cursor: pointer;
  border-bottom: ${({ active }) => (active ? '2px solid' : '0')};

  &:hover {
    opacity: 0.8;
  }

  &:last-child {
    margin: 0;
  }
`;
