import { ChangeEvent, FC, useState } from 'react';
import styled from 'styled-components/macro';

import { useModalOpen } from '../../hooks/useModalOpen';
import IDropdownItem from '../../types/IDropdownItem';

const Header = styled.div``;

const Content = styled.div`
  position: relative;
`;

const SearchInput = styled.input.attrs({
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

const DropdownList = styled.ul`
  position: absolute;
  max-height: 150px;
  border-radius: 0 0 10px 10px;
  overflow: auto;
  z-index: 100;
  backdrop-filter: blur(8px);
  transition: display 0.5s ease;

  &::-webkit-scrollbar {
    width: 2px;
  }

  &::-webkit-scrollbar-thumb {
    width: 2px;
    background-color: #878787;
  }
`;

const DropdownItem = styled.li`
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.15);
  }
`;

const DropdownStyled = styled.div`
  display: flex;
  align-items: baseline;

  ${SearchInput},
  ${DropdownItem} {
    width: 200px;
  }
`;

interface DropdownProps {
  header?: string;
  label: string;
  select: (item: IDropdownItem) => void;
  items: IDropdownItem[];
}

const Dropdown: FC<DropdownProps> = ({ header, label, select, items }) => {
  const { ref, open, setOpen } = useModalOpen<HTMLUListElement>(false);

  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleOnItemClick = (item: IDropdownItem) => {
    select(item);
    setOpen(false);
    setSearchQuery('');
  };

  return (
    <DropdownStyled>
      <Header>{header}</Header>
      <Content>
        <SearchInput
          onClick={() => setOpen(true)}
          value={searchQuery}
          onChange={(event: ChangeEvent<HTMLInputElement>) => setSearchQuery(event.target.value)}
          placeholder={label}
        />
        {open && (
          <DropdownList ref={ref}>
            {items
              .filter((item) => {
                if (searchQuery !== '') {
                  return item.label.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase());
                }
                return item;
              })
              .map((item) => (
                <DropdownItem key={item.id} onClick={() => handleOnItemClick(item)}>
                  {item.label}
                </DropdownItem>
              ))}
          </DropdownList>
        )}
      </Content>
    </DropdownStyled>
  );
};

export default Dropdown;
