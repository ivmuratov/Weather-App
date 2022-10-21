import styled from 'styled-components/macro';

import { BreakPoint } from '../../styles/vars';

export const CurrentWeatherStyled = styled.section`
  margin: 0 0 80px 0;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: ${BreakPoint.md2}) {
    align-items: center;
    flex-flow: column wrap;
  }
`;

export const Forecast = styled.div`
  display: flex;
  flex-flow: column wrap;
  margin: 0 30px 0 0;

  @media (max-width: ${BreakPoint.md2}) {
    margin: 0 0 20px 0;
  }
`;

export const Temp = styled.div`
  display: flex;
`;

export const TempValue = styled.h1`
  font-size: 84px;
  font-weight: 700;

  span {
    font-weight: 400;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WeatherDetailsList = styled.ul`
  display: flex;
  position: relative;
  flex-direction: column;
  flex: 0 1 auto;
  justify-content: space-between;

  @media (max-width: ${BreakPoint.md2}) {
    display: none;
  }
`;

export const WeatherDetailsItem = styled.li`
  display: flex;
  justify-content: space-between;
  margin: 0 0 10px 0;

  span {
    &:first-child {
      margin: 0 15px 0 0;
    }
  }

  &:last-child {
    margin: 0;
  }
`;

export namespace AirComp {
  export const Item = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin: 0 0 10px 0;

    &:last-child {
      margin: 0;
    }
  `;

  export const Label = styled.div`
    margin: 0 10px 0 0;
  `;

  interface ValueProps {
    color: string;
  }

  export const Value = styled.div<ValueProps>`
    position: relative;

    &::before {
      content: '';
      position: absolute;
      top: 5.5px;
      left: -20px;
      height: 14px;
      width: 14px;
      background: ${({ color }) => color};
      border-radius: 50%;
    }
  `;
}
