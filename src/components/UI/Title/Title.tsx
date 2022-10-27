import { FC, memo, ReactNode } from 'react';

import { TitleStyled } from './Title.styled';

interface TitleProps {
  children: ReactNode;
  more?: ReactNode | string;
}

const Title: FC<TitleProps> = ({ children, more }) => {
  return (
    <TitleStyled>
      <span>{children}</span>
      <span>{more}</span>
    </TitleStyled>
  );
};

export default memo(Title);
