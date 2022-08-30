import styled from 'styled-components';

import { BreakPoint } from '../../styles/vars';

export const StyledDailyForecastItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin: 0 0 15px 0;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
`;

export const Date = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 10px 0 0;
`;

export const Temp = styled.div`
  display: flex;
  align-items: flex-end;
  margin: 0 10px 0 10px;

  span:first-child {
    font-size: 42px;
  }

  span:last-child {
    font-size: 21px;
  }
`;

export const Description = styled.div`
  @media (max-width: ${BreakPoint.md1}) {
    display: none;
  }
`;
