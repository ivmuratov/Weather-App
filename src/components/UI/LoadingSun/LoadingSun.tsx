import { FC, memo } from 'react';

import { LoadingSunStyled } from './LoadingSun.styled';

import sunny from '../../../assets/weather-icons/clouds/sunny.svg';
import SvgContainer from '../SvgContainer/SvgContainer';

interface LoadingSunProps {
  size: string;
}

const LoadingSun: FC<LoadingSunProps> = ({ size }) => {
  return (
    <LoadingSunStyled>
      <SvgContainer src={sunny} size={size} />
    </LoadingSunStyled>
  );
};

export default memo(LoadingSun);
