import { ChangeEvent, FC, MouseEventHandler, useState } from 'react';
import styled from 'styled-components/macro';

import Icon from './Icon';

const ToggleStyled = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Content = styled.div`
  position: relative;
  width: 60px;
  height: 30px;
  background: #a5b3b5;
  border-radius: 30px;
  padding: 10px;
  transition: 0.5s all;

  &:before {
    transition: 0.5s all;
    content: '';
    position: absolute;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    top: 50%;
    left: 3px;
    background: #ffffff;
    transform: translate(0, -50%);
  }
`;

const Input = styled.input`
  display: none;
  opacity: 0;
  position: absolute;

  &:checked + ${Content} {
    background: #575dff;

    &:before {
      transform: translate(32px, -50%);
    }
  }
`;

interface ToggleProps {
  onClick: MouseEventHandler;
}

const Toggle: FC<ToggleProps> = ({ onClick }) => {
  const [checked, setChecked] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };

  return (
    <ToggleStyled>
      {checked ? <Icon name='moon' margin='0 5px 0 0' /> : <Icon name='sun' margin='0 5px 0 0' />}
      <Input type='checkbox' onClick={onClick} onChange={handleChange} checked={checked} />
      <Content />
    </ToggleStyled>
  );
};

export default Toggle;
