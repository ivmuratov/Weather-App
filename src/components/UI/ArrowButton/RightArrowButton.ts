import styled from 'styled-components';

import AbstractArrowButton, { inactive } from './AbstractArrowButton';

const RightArrowButton = styled(AbstractArrowButton)`
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

export default RightArrowButton;
