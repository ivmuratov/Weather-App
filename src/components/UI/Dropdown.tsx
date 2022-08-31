import { FC, useState } from 'react';
import styled from 'styled-components';

interface DropdownListProps {
  open?: boolean;
}

const StyledDropdown = styled.div`
  position: relative;
`;

const DropdownHeader = styled.div`
  padding: 10px 20px;
  background: rgba(0, 0, 0, 0);
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  transition: background 0.5s ease, box-shadow 0.5s ease;
  cursor: pointer;

  &:hover {
    background: rgba(0, 0, 0, 0.085);
    box-shadow: 0 3px 4px rgba(0, 0, 0, 0.25);
    transition: background 0.5s ease, box-shadow 0.5s ease;
  }
`;

const DropdownList = styled.ul<DropdownListProps>`
  display: ${({ open }) => (open ? 'block' : 'none')};
  position: absolute;
  max-height: 100px;
  overflow: auto;
  z-index: 100;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 5px;
  padding: 10px 20px;
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
  margin: 0 0 5px 0;
  cursor: pointer;

  &:last-child {
    margin: 0;
  }
`;

interface DropdownProps {
  label?: string;
  value: string;
  select: (item: string) => void;
  items: string[];
}

const Dropdown: FC<DropdownProps> = ({ label, value, select, items }) => {
  const [open, setOpen] = useState<boolean>(false);

  const onItemClick = (item: string) => {
    select(item);
    setOpen(false);
  };

  return (
    <StyledDropdown>
      <span>{label}</span>
      <DropdownHeader onClick={() => setOpen(!open)}>{value}</DropdownHeader>
      <DropdownList open={open}>
        {items.map((item) => (
          <DropdownItem onClick={() => onItemClick(item)}>{item}</DropdownItem>
        ))}
      </DropdownList>
    </StyledDropdown>
  );
};

export default Dropdown;
