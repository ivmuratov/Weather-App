import styled from 'styled-components/macro';

import { BreakPoint } from '../../styles/vars';
import Link from '../UI/Link/Link';

export const FooterStyled = styled.footer`
  flex: 0 0 auto;
  padding: 20px 0;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;

  p {
    margin: 0 10px 0 0;
  }

  @media (max-width: ${BreakPoint.tablet}) {
    flex-direction: column;
    align-items: center;

    p,
    ${Link} {
      margin: 0 0 5px 0;

      &:last-child {
        margin: 0;
      }
    }
  }
`;
