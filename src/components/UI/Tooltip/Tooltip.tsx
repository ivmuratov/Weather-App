import { FC, MutableRefObject, ReactNode } from 'react';

import { Content, Header, TooltipStyled, Wrapper } from './Tooltip.styled';

import IPosition from '../../../types/IPosition';

interface TooltipProps {
  children: ReactNode;
  header: string;
  isShow: boolean;
  refObj: MutableRefObject<HTMLDivElement | null>;
  position?: IPosition;
  minWidth?: string;
}

const Tooltip: FC<TooltipProps> = ({ children, header, isShow, refObj, position, minWidth }) => {
  return (
    <Wrapper ref={refObj} isShow={isShow} position={position}>
      <TooltipStyled minWidth={minWidth}>
        <Header>{header}</Header>
        <Content>{children}</Content>
      </TooltipStyled>
    </Wrapper>
  );
};

export default Tooltip;
