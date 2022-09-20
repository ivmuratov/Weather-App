import styled from 'styled-components/macro';

import AbstractArrowButton, { inactive } from './AbstractArrowButton';

const DownArrowButton = styled(AbstractArrowButton)`
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

export default DownArrowButton;
