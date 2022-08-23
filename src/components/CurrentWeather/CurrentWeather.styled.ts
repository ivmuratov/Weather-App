import styled from 'styled-components';

import { BreakPoint } from '../../styles/vars';

import { FlexContainer } from '../UI/FlexContainer';

export const StyledCurrentWeather = styled.section``;

export const CurrentWeatherContent = styled(FlexContainer)`
  justify-content: space-between;

  @media (max-width: ${BreakPoint.md2}) {
    align-items: center;
    flex-flow: column wrap;
  }
`;

export const CurrentForecast = styled(FlexContainer)`
  flex-flow: column wrap;
  margin: 0 30px 0 0;

  @media (max-width: ${BreakPoint.md2}) {
    margin: 0 0 20px 0;
  }
`;

export const Temp = styled.h1`
  font-size: 84px;
  font-weight: 700;

  span {
    font-weight: 400;
  }
`;

export const WeatherDetails = styled(FlexContainer)`
  flex-direction: column;
  flex: 0 1 auto;
  justify-content: space-between;

  @media (max-width: ${BreakPoint.md2}) {
    display: none;
  }
`;

export const WeatherDetail = styled(FlexContainer)`
  justify-content: space-between;
  padding: 0 0 10px 0;

  &:last-child {
    padding: 0;
  }
`;

export const Label = styled.span`
  margin: 0 10px 0 0;
`;

export const Value = styled.span``;
