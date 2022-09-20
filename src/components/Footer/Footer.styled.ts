import styled from 'styled-components/macro';

import { BreakPoint } from '../../styles/vars';

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

  a {
    margin: 0 7px 0 0;
    color: inherit;
    text-decoration: underline;

    &:hover {
      opacity: 0.8;
    }

    &:last-child {
      margin: 0;
    }
  }

  @media (max-width: ${BreakPoint.md1}) {
    flex-direction: column;
    align-items: center;

    p,
    a {
      margin: 0 0 5px 0;

      &:last-child {
        margin: 0;
      }
    }
  }
`;
