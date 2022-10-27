import { ChangeEvent, FC, ReactNode, useState } from 'react';

import { DropdownStyled, Header, Content, SearchInput, DropdownList, DropdownItem } from './Dropdown.styled';

import { useModalOpen } from '../../../hooks/useModalOpen';
import IDropdownItem from '../../../types/IDropdownItem';

interface DropdownProps {
  header?: string | ReactNode;
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
