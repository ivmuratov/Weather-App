import styled from 'styled-components';

import AbstractArrowButton, { inactive } from './AbstractArrowButton';

const UpArrowButton = styled(AbstractArrowButton)`
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

export default UpArrowButton;
