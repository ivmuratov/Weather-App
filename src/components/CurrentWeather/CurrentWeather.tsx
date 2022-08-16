import { skipToken } from '@reduxjs/toolkit/dist/query';
import { FC } from 'react';

import {
  CurrentForecast,
  Label,
  StyledCurrentWeather,
  Temp,
  Value,
  WeatherDetail,
  WeatherDetails,
} from './CurrentWeather.styled';

import { AirQualitativeName } from '../../constants/enums';
import {
  useGetCoordQuery,
  useGetCurrentAirPolutionQuery,
  useGetCurrentWeatherQuery,
} from '../../services/WeatherService';
import { airNames, weatherConditions } from '../../utils/utils';
import { FlexContainer } from '../UI/FlexContainer.styled';
import { ImgContainer } from '../UI/ImgContainer.styled';

const CurrentWeather: FC = () => {
  const { data: coord } = useGetCoordQuery('Novosibirsk');

  const { data: weather } = useGetCurrentWeatherQuery(coord ?? skipToken);

  const { data: airPollution } = useGetCurrentAirPolutionQuery(coord ?? skipToken);

  return (
    <StyledCurrentWeather>
      <CurrentForecast>
        <ImgContainer size='100px' src={weatherConditions(weather?.weather[0].main, weather?.clouds.all)} />
        <FlexContainer direction='column'>
          <Temp>
            {weather?.main.temp.toFixed()}
            <span>°</span>
          </Temp>
          <p>{weather?.weather[0].description}</p>
          <p>Ощущается как {weather?.main.feels_like.toFixed()}°</p>
        </FlexContainer>
      </CurrentForecast>
      <WeatherDetails>
        <WeatherDetail>
          <Label>Качество воздуха</Label>
          <Value>{airNames.get(airPollution?.main.aqi as AirQualitativeName)}</Value>
        </WeatherDetail>
        <WeatherDetail>
          <Label>Давление</Label>
          <Value>{weather?.main.pressure} мбар</Value>
        </WeatherDetail>
        <WeatherDetail>
          <Label>Ветер</Label>
          <Value>{weather?.wind.speed} м/с</Value>
        </WeatherDetail>
        <WeatherDetail>
          <Label>Порывы ветра</Label>
          <Value>{weather?.wind.gust ?? '-'} м/с</Value>
        </WeatherDetail>
      </WeatherDetails>
    </StyledCurrentWeather>
  );
};

export default CurrentWeather;
