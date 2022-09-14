import styled from 'styled-components';

import { BreakPoint } from '../../styles/vars';
import { FlexContainer } from '../UI/FlexContainer';

export const StyledCurrentWeather = styled.section`
  margin: 0 0 150px 0;
`;

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

export const CurrentWeatherDetails = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 1 auto;
  justify-content: space-between;

  @media (max-width: ${BreakPoint.md2}) {
    display: none;
  }
`;

export const CurrentWeatherDetail = styled.div`
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
