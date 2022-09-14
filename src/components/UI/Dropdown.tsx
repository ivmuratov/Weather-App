import { FC } from 'react';
import styled from 'styled-components';

import { useModalOpen } from '../../hooks/useModalOpen';
import { IDropdownItem } from '../../types/IDropdownItem';

interface DropdownListProps {
  open?: boolean;
}

const StyledDropdown = styled.div`
  display: flex;
  align-items: baseline;
`;

const DropdownHeader = styled.div``;

const DropdownContent = styled.div`
  position: relative;
`;

const DropdownLabel = styled.label`
  background: rgba(0, 0, 0, 0);
  padding: 0 10px;
  cursor: pointer;

  &:hover {
    /* transition: color 0.5s ease; */
  }
`;

const DropdownList = styled.ul<DropdownListProps>`
  position: absolute;
  max-height: 130px;
  padding: 5px 10px;
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
  margin: 0 0 10px 0;
  cursor: pointer;

  &:last-child {
    margin: 0;
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

  const onItemClick = (item: IDropdownItem) => {
    select(item);
    setOpen(false);
  };

  return (
    <StyledDropdown>
      <DropdownHeader>{header}</DropdownHeader>
      <DropdownContent>
        <DropdownLabel onClick={() => setOpen(!open)}>{label}</DropdownLabel>
        {open && (
          <DropdownList ref={ref}>
            {items.map((item) => (
              <DropdownItem key={item.id} onClick={() => onItemClick(item)}>
                {item.label}
              </DropdownItem>
            ))}
          </DropdownList>
        )}
      </DropdownContent>
    </StyledDropdown>
  );
};

export default Dropdown;
