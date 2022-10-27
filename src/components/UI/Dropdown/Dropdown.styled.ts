import styled from 'styled-components/macro';

export const Header = styled.div`
  font-size: 24px;
`;

export const Content = styled.div`
  position: relative;
`;

export const SearchInput = styled.input.attrs({
  type: 'text',
})`
  border: none;
  padding: 0 10px;
  background: rgba(0, 0, 0, 0);
  color: inherit;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:focus::placeholder {
    color: transparent;
  }

  &::placeholder {
    margin: 0;
    color: inherit;
  }
`;

export const DropdownList = styled.ul`
  position: absolute;
  max-height: 150px;
  border-radius: 0 0 10px 10px;
  overflow: auto;
  z-index: 100;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);

  &::-webkit-scrollbar {
    width: 2px;
  }

  &::-webkit-scrollbar-thumb {
    width: 2px;
    background-color: #878787;
  }
`;

export const DropdownItem = styled.li`
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.15);
  }
`;

export const DropdownStyled = styled.div`
  display: flex;
  align-items: center;

  ${SearchInput},
  ${DropdownItem} {
    width: 200px;
  }
`;
