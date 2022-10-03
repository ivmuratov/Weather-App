import { FC } from 'react';
import styled from 'styled-components/macro';
import '../../assets/iconfonts/style.css';

interface IconStyledProps {
  margin?: string;
}

const IconStyled = styled.i<IconStyledProps>`
  margin: ${({ margin }) => margin};
`;

interface IconProps {
  name: string;
  margin?: string;
}

const Icon: FC<IconProps> = ({ name, margin }) => {
  return <IconStyled className={`icon-${name}`} margin={margin} />;
};

export default Icon;
