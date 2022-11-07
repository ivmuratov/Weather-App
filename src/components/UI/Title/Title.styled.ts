import styled from 'styled-components/macro';

import { BreakPoint } from '../../../styles/vars';

export const TitleStyled = styled.h2`
  display: flex;
  justify-content: space-between;
  margin: 0 0 20px 0;

  @media (max-width: ${BreakPoint.mobile}) {
    align-items: center;
    flex-flow: column wrap;
  }

  span:first-child {
    font-size: 24px;
    font-weight: 700;
  }

  span:last-child {
    font-size: 24px;
    font-weight: 700;

    @media (max-width: ${BreakPoint.mobile}) {
      font-size: 22px;
    }
  }
`;
