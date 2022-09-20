import styled, { css } from 'styled-components/macro';

interface ArrowButtonProps {
  inactive?: boolean;
}

export const inactive = css<ArrowButtonProps>`
  ${(props) =>
    props.inactive &&
    css`
      top: 17px;
      left: 23px;
      transform: rotate(90deg);
    `}
`;

const AbstractArrowButton = styled.div`
  height: 50px;
  width: 50px;
  box-shadow: 2px;
  border-radius: 50%;
  cursor: pointer;
  position: relative;

  &:hover {
    box-shadow: ${(props) => props.theme.button.boxShadow};
    opacity: 0.8;
    transition: box-shadow 0.5s ease, opacity 0.5s ease;
  }

  &::before,
  &::after {
    content: '';
    border: 2px solid currentColor;
    background-color: ${(props) => props.theme.color};
    display: block;
    height: 15px;
    position: absolute;
  }
`;

export default AbstractArrowButton;
