import { FC, ReactNode } from 'react';
import styled from 'styled-components/macro';

import { BreakPoint } from '../../styles/vars';

const TitleStyled = styled.h2`
  display: flex;
  justify-content: space-between;
  margin: 0 0 30px 0;

  @media (max-width: ${BreakPoint.md2}) {
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

    @media (max-width: ${BreakPoint.md2}) {
      font-size: 22px;
    }
  }
`;

interface TitleProps {
  children: ReactNode;
  more?: string;
}

const Title: FC<TitleProps> = ({ children, more }) => {
  return (
    <TitleStyled>
      <span>{children}</span>
      <span>{more}</span>
    </TitleStyled>
  );
};

export default Title;
