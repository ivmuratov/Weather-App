import { skipToken } from '@reduxjs/toolkit/dist/query';
import { FC } from 'react';

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
import { useAppSelector } from '../../hooks/redux';
import direction from '../../imgs/icons/direction.svg';
import { useGetDateTimeQuery } from '../../services/dateTimeService';
import { useGetCoordQuery, useGetCurrentAirPolutionQuery } from '../../services/openWeatherMapService';
import { useGetCurrentWeatherQuery } from '../../services/weatherBitService';
import { airNames } from '../../utils/airPollution';
import { weatherConditions } from '../../utils/weather';
import { FlexContainer } from '../UI/FlexContainer';
import { ImgContainer } from '../UI/ImgContainer';
import Title from '../UI/Title';

const CurrentWeather: FC = () => {
  const { name } = useAppSelector((state) => state.cityReducer);

  const { data: coord } = useGetCoordQuery(name);

  const { data: weather } = useGetCurrentWeatherQuery(coord ?? skipToken);

  const { data: airPollution } = useGetCurrentAirPolutionQuery(coord ?? skipToken);

  const { data: date } = useGetDateTimeQuery(coord ?? skipToken);

  return (
    <StyledCurrentWeather>
      <Title more={date?.date_time.slice(0, -3)}>Текущая погода</Title>
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
