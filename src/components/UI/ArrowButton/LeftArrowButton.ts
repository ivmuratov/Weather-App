import styled from 'styled-components';

import AbstractArrowButton, { inactive } from './AbstractArrowButton';

const LeftArrowButton = styled(AbstractArrowButton)`
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

export default LeftArrowButton;
