import styled from 'styled-components';

import { FlexContainer } from '../UI/FlexContainer.styled';

export const StyledCurrentWeather = styled.section`
  margin: 50px 0 0 0;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  border: 1px solid;
  border-radius: 10px;
`;

export const CurrentForecast = styled(FlexContainer)`
  margin: 0 10px 0 0;
`;

export const Temp = styled.h1`
  font-size: 84px;
  font-weight: 700;

  span {
    font-weight: 400;
  }
`;

export const FeelsLike = styled.p`
  font-weight: 700;
`;

export const WeatherDetails = styled(FlexContainer)`
  flex-direction: column;
  flex: 0 1 240px;
  justify-content: center;
`;

export const WeatherDetail = styled(FlexContainer)`
  justify-content: space-between;
  margin: 0 0 10px 0;
`;

export const Label = styled.span`
  font-weight: 700;
  margin: 0 5px 0 0;
`;

export const Value = styled.span`
  font-weight: 700;
`;
