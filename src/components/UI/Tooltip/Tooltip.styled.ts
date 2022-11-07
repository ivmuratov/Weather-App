import styled, { css } from 'styled-components/macro';

import IPosition from '../../../types/IPosition';

interface WrapperProps {
  isShow: boolean;
  position?: IPosition;
}

interface TooltipStyledProps {
  minWidth?: string;
}

export const Wrapper = styled.div<WrapperProps>`
  display: ${({ isShow }) => (isShow ? 'block' : 'none')};
  position: absolute;
  ${({ position }) => css`
    top: ${position?.top};
    left: ${position?.left};
    right: ${position?.right};
  `}
`;

export const TooltipStyled = styled.div<TooltipStyledProps>`
  position: relative;
  min-width: ${({ minWidth }) => minWidth};
  z-index: 1000;
  padding: 15px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  backdrop-filter: blur(10px);
`;

export const Header = styled.header`
  font-size: 18px;
  margin: 0 0 15px 0;
`;

export const Content = styled.div``;
