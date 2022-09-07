import styled, { css } from 'styled-components';

interface ArrowButtonProps {
  inactive?: boolean;
}

const base = css<ArrowButtonProps>`
  content: '';
  border: 2px solid currentColor;
  background-color: ${(props) => props.theme.color};
  display: block;
  height: 25px;
  position: absolute;
  top: ${({ inactive }) => (inactive ? '13px' : '5px')};
  transition: transform 0.5s ease;
`;

const ArrowButton = styled.div<ArrowButtonProps>`
  height: 50px;
  width: 50px;
  box-shadow: 2px;
  border-radius: 50%;
  cursor: pointer;
  position: relative;

  &:hover {
    box-shadow: ${(props) => props.theme.button.boxShadow};
    transition: box-shadow 0.5s ease, opacity 0.5s ease;
    opacity: 0.8;
  }

  &::before {
    ${base}
    margin-top: 0px;
  }

  &::after {
    ${base}
    margin-top: ${({ inactive }) => (inactive ? '0px' : '15px')};
  }
`;

const rightBase = css<ArrowButtonProps>`
  left: ${({ inactive }) => (inactive ? '23px' : '25px')};
`;

export const RightArrowButton = styled(ArrowButton)`
  &::before {
    ${rightBase}
    transform: ${({ inactive }) => (inactive ? 'rotate(90deg)' : 'rotate(135deg)')};
  }

  &::after {
    ${rightBase}
    transform: ${({ inactive }) => (inactive ? 'rotate(90deg)' : 'rotate(45deg)')};
  }
`;

const leftBase = css<ArrowButtonProps>`
  left: ${({ inactive }) => (inactive ? '23px' : '20px')};
`;

export const LeftArrowButton = styled(ArrowButton)`
  &::before {
    ${leftBase}
    transform: ${({ inactive }) => (inactive ? 'rotate(90deg)' : 'rotate(45deg)')};
  }

  &::after {
    ${leftBase}
    transform: ${({ inactive }) => (inactive ? 'rotate(90deg)' : 'rotate(-45deg)')};
  }
`;
