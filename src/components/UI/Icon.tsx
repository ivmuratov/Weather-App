import { FC } from 'react';
import '../../iconfonts/style.css';

interface IconProps {
  name: string;
}

export const Icon: FC<IconProps> = ({ name }) => {
  return <i className={`icon-${name}`} />;
};
