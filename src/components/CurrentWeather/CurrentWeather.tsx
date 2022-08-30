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

import { AirQualitativeName } from '../../constants/enums';
import direction from '../../imgs/icons/direction.svg';
import { useGetDateTimeQuery } from '../../services/dateTimeService';
import { useGetCoordQuery, useGetCurrentAirPolutionQuery } from '../../services/openWeatherMapService';
import { useGetCurrentWeatherQuery } from '../../services/weatherBitService';
import { airNames } from '../../utils/airPollution';
import { toLocalDateTimeStr } from '../../utils/date';
import { weatherConditions } from '../../utils/weather';
import { FlexContainer } from '../UI/FlexContainer';
import { ImgContainer } from '../UI/ImgContainer';
import Title from '../UI/Title';

const CurrentWeather: FC = () => {
  const [dateTime, setDateTime] = useState<Date>(new Date());

  const { data: coord } = useGetCoordQuery('Novosibirsk');

  const { data: weather } = useGetCurrentWeatherQuery(coord ?? skipToken);

  const { data: airPollution } = useGetCurrentAirPolutionQuery(coord ?? skipToken);

  const { data: date } = useGetDateTimeQuery(coord ?? skipToken);

  useEffect(() => {
    const interval = setTimeout(() => setDateTime(new Date()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, [dateTime]);

  return (
    <StyledCurrentWeather>
      <Title more={toLocalDateTimeStr(date?.date_time_unix)}>Текущая погода</Title>
      <CurrentWeatherContent>
        <CurrentForecast>
          <FlexContainer>
            <ImgContainer size='105px' src={weatherConditions(weather?.weather)} />
            <Temp>
              {weather?.temp.toFixed()}
              <span>°</span>
            </Temp>
          </FlexContainer>
          <FlexContainer direction='column'>
            <p>{weather?.weather.description}</p>
            <p>ощущается как {weather?.app_temp.toFixed()}°</p>
          </FlexContainer>
        </CurrentForecast>
        <WeatherDetails>
          <WeatherDetail>
            <Label>Качество воздуха</Label>
            <Value>{airNames.get(airPollution?.main.aqi as AirQualitativeName)}</Value>
          </WeatherDetail>
          <WeatherDetail>
            <Label>Давление</Label>
            <Value>{weather?.pres.toFixed()} мбар</Value>
          </WeatherDetail>
          <WeatherDetail>
            <Label>Влажность</Label>
            <Value>{weather?.rh.toFixed()} %</Value>
          </WeatherDetail>
          <WeatherDetail>
            <Label>Ветер</Label>
            <Value>{weather?.wind_spd.toFixed()} м/с</Value>
          </WeatherDetail>
          <WeatherDetail>
            <Label>
              <ImgContainer size='20px' src={direction} />
            </Label>
            <Value>{weather?.wind_cdir}</Value>
          </WeatherDetail>
        </WeatherDetails>
      </CurrentWeatherContent>
    </StyledCurrentWeather>
  );
};

export default CurrentWeather;
