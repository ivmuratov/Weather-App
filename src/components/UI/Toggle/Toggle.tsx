import { ChangeEvent, FC, MouseEventHandler, ReactNode, useState } from 'react';

import { ToggleStyled, Placeholder, Input, Content } from './Toggle.styled';

interface ToggleProps {
  onClick: MouseEventHandler;
  placeholder?: ReactNode | string;
  placeholderSize?: string;
  placeholderIndent?: string;
}

const Toggle: FC<ToggleProps> = ({ onClick, placeholder, placeholderSize, placeholderIndent }) => {
  const [checked, setChecked] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };

  return (
    <ToggleStyled>
      <Placeholder fontSize={placeholderSize} indent={placeholderIndent}>
        {placeholder}
      </Placeholder>
      <Input type='checkbox' onClick={onClick} onChange={handleChange} checked={checked} />
      <Content />
    </ToggleStyled>
  );
};

export default Toggle;
