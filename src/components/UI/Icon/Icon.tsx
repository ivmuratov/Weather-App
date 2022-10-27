import { FC } from 'react';

import '../../../assets/iconfonts/style.css';
import { IconStyled } from './Icon.styled';

interface IconProps {
  name: string;
  margin?: string;
}

const Icon: FC<IconProps> = ({ name, margin }) => {
  return <IconStyled className={`icon-${name}`} margin={margin} />;
};

export default Icon;
