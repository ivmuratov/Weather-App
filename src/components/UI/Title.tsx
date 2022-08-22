import { FC, ReactNode } from 'react';
import styled from 'styled-components';

import { FlexContainer } from './FlexContainer';

import { BreakPoint } from '../../styles/vars';

const StyledTitle = styled(FlexContainer)`
  justify-content: space-between;
  margin: 0 0 15px 0;

  @media (max-width: ${BreakPoint.md2}) {
    align-items: center;
    flex-flow: column wrap;
  }
`;

const Content = styled.h2`
  font-size: 24px;
  font-weight: 700;
`;

const More = styled.div`
  font-size: 24px;
  font-weight: 700;

  @media (max-width: ${BreakPoint.md2}) {
    font-size: 22px;
  }
`;

interface TitleProps {
  children: ReactNode;
  more?: string;
}

const Title: FC<TitleProps> = ({ children, more }) => {
  return (
    <StyledTitle>
      <Content>{children}</Content>
      <More>{more}</More>
    </StyledTitle>
  );
};

export default Title;
