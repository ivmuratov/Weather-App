import styled, { css } from 'styled-components';

interface ArrowButtonProps {
  inactive?: boolean;
}

const inactive = css<ArrowButtonProps>`
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
    transition: box-shadow 0.5s ease, opacity 0.5s ease;
    opacity: 0.8;
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

export const RightArrowButton = styled(AbstractArrowButton)`
  &::before {
    top: 13px;
    left: 25px;
    transform: rotate(135deg);
    ${inactive}
  }

  &::after {
    top: 21px;
    left: 25px;
    transform: rotate(45deg);
    ${inactive}
  }
`;

export const LeftArrowButton = styled(AbstractArrowButton)`
  &::before {
    top: 13px;
    left: 20px;
    transform: rotate(45deg);
    ${inactive}
  }

  &::after {
    top: 21px;
    left: 20px;
    transform: rotate(-45deg);
    ${inactive}
  }
`;

export const DownArrowButton = styled(AbstractArrowButton)`
  &::before {
    top: 19px;
    left: 19px;
    transform: rotate(-45deg);
    ${inactive}
  }

  &::after {
    top: 19px;
    left: 27px;
    transform: rotate(45deg);
    ${inactive}
  }
`;

export const UpArrowButton = styled(AbstractArrowButton)`
  &::before {
    top: 17px;
    left: 19px;
    transform: rotate(45deg);
    ${inactive}
  }

  &::after {
    top: 17px;
    left: 27px;
    transform: rotate(-45deg);
    ${inactive}
  }
`;
