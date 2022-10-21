import { FC, MutableRefObject, ReactNode } from 'react';
import styled from 'styled-components/macro';

interface WrapperProps {
  isShow: boolean;
}

interface TooltipStyledProps {
  minWidth?: string;
}

const Wrapper = styled.div<WrapperProps>`
  display: ${({ isShow }) => (isShow ? 'block' : 'none')};
  position: absolute;
  top: 20px;
  left: -125px;
`;

const TooltipStyled = styled.div<TooltipStyledProps>`
  position: relative;
  min-width: ${({ minWidth }) => minWidth};
  z-index: 1000;
  padding: 15px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  backdrop-filter: blur(10px);
`;

const Header = styled.header`
  font-size: 18px;
  margin: 0 0 15px 0;
`;

const Content = styled.div``;

interface TooltipProps {
  children: ReactNode;
  header: string;
  isShow: boolean;
  refObj: MutableRefObject<HTMLDivElement | null>;
  minWidth?: string;
}

const Tooltip: FC<TooltipProps> = ({ children, header, isShow, refObj, minWidth }) => {
  return (
    <Wrapper isShow={isShow} ref={refObj}>
      <TooltipStyled minWidth={minWidth}>
        <Header>{header}</Header>
        <Content>{children}</Content>
      </TooltipStyled>
    </Wrapper>
  );
};

export default Tooltip;
