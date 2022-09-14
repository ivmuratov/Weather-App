import { FC } from 'react';
import styled from 'styled-components';
import '../../iconfonts/style.css';

interface StyledIconProps {
  margin?: string;
}

const StyledIcon = styled.i<StyledIconProps>`
  margin: ${({ margin }) => margin};
`;

interface IconProps {
  name: string;
  margin?: string;
}

const Icon: FC<IconProps> = ({ name, margin }) => {
  return <StyledIcon className={`icon-${name}`} margin={margin} />;
};

export default Icon;
