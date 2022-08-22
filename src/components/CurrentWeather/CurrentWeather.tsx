import { skipToken } from '@reduxjs/toolkit/dist/query';
import { FC, useEffect, useState } from 'react';

import {
  CurrentForecast,
  CurrentWeatherContent,
  Label,
  StyledCurrentWeather,
  Temp,
  Value,
  WeatherDetail,
  WeatherDetails,
} from './CurrentWeather.styled';

import { AirQualitativeName, TimeUnit } from '../../constants/enums';
import {
  useGetCoordQuery,
  useGetCurrentAirPolutionQuery,
  useGetCurrentWeatherQuery,
} from '../../services/weatherService';
import { convertToMs, toDateTime } from '../../utils/date';
import { airNames, weatherConditions } from '../../utils/utils';
import { FlexContainer } from '../UI/FlexContainer';
import { ImgContainer } from '../UI/ImgContainer';
import Title from '../UI/Title';

const CurrentWeather: FC = () => {
  const [dateTime, setDateTime] = useState<Date>(new Date());

  const { data: coord } = useGetCoordQuery('Novosibirsk');

  const { data: weather } = useGetCurrentWeatherQuery(coord ?? skipToken, {
    pollingInterval: convertToMs(5, TimeUnit.MINUTE),
  });

  const { data: airPollution } = useGetCurrentAirPolutionQuery(coord ?? skipToken);

  useEffect(() => {
    const interval = setTimeout(() => setDateTime(new Date()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, [dateTime]);

  return (
    <StyledCurrentWeather>
      <Title more={toDateTime(dateTime)}>Текущая погода</Title>
      <CurrentWeatherContent>
        <CurrentForecast>
          <FlexContainer>
            <ImgContainer size='100px' src={weatherConditions(weather)} />
            <Temp>
              {weather?.main.temp.toFixed()}
              <span>°</span>
            </Temp>
          </FlexContainer>
          <FlexContainer direction='column'>
            <p>{weather?.weather[0].description}</p>
            <p>ощущается как {weather?.main.feels_like.toFixed()}°</p>
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
      </CurrentWeatherContent>
    </StyledCurrentWeather>
  );
};

export default CurrentWeather;
