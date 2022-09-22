import { skipToken } from '@reduxjs/toolkit/dist/query';
import { FC } from 'react';

import {
  Forecast,
  Content,
  CurrentWeatherStyled,
  TempValue,
  WeatherDetailsItem,
  WeatherDetailsList,
  Temp,
  Description,
} from './CurrentWeather.styled';

import { AirQualitativeName } from '../../constants/enums';
import { useCoord } from '../../hooks/useCoord';
import { useGetDateTimeQuery } from '../../services/dateTimeService';
import { useGetCurrentAirPolutionQuery } from '../../services/openWeatherMapService';
import { useGetCurrentWeatherQuery } from '../../services/weatherBitService';
import { airNames } from '../../utils/airPollution';
import { toLocalDateTimeStr } from '../../utils/date';
import { weatherConditions } from '../../utils/weather';
import Icon from '../UI/Icon';
import ImgContainer from '../UI/ImgContainer';
import LoadingSun from '../UI/LoadingSun';
import Title from '../UI/Title';

const CurrentWeather: FC = () => {
  const { data: coord, isLoading: isLoadCoord, isSuccess: isSuccCoord } = useCoord();

  const {
    data: weather,
    isLoading: isLoadWeather,
    isSuccess: isSuccWeather,
  } = useGetCurrentWeatherQuery(coord ?? skipToken);

  const {
    data: airPollution,
    isLoading: isLoadAP,
    isSuccess: isSuccAP,
  } = useGetCurrentAirPolutionQuery(coord ?? skipToken);

  const {
    data: dateTime,
    isLoading: isLoadDateTime,
    isSuccess: isSuccDateTime,
  } = useGetDateTimeQuery(coord ?? skipToken);

  let content: JSX.Element = <></>;

  if (isLoadCoord || isLoadWeather || isLoadAP || isLoadDateTime) {
    content = <LoadingSun size='150px' />;
  } else if (isSuccCoord && isSuccWeather && isSuccAP && isSuccDateTime) {
    content = (
      <Content>
        <Forecast>
          <Temp>
            <ImgContainer size='105px' src={weatherConditions(weather?.weather)} />
            <TempValue>
              {weather?.temp.toFixed()}
              <span>°</span>
            </TempValue>
          </Temp>
          <Description>
            <p>{weather?.weather.description}</p>
            <p>ощущается как {weather?.app_temp.toFixed()}°</p>
          </Description>
        </Forecast>
        <WeatherDetailsList>
          <WeatherDetailsItem>
            <span>Качество воздуха</span>
            <span>
              <Icon name='air-pollution' margin='0 2px 0 0' />
              {airNames.get(airPollution?.main.aqi as AirQualitativeName)}
            </span>
          </WeatherDetailsItem>
          <WeatherDetailsItem>
            <span>Давление</span>
            <span>
              <Icon name='pressure' margin='0 4px 0 0' />
              {weather?.pres.toFixed()} мбар
            </span>
          </WeatherDetailsItem>
          <WeatherDetailsItem>
            <span>Влажность</span>
            <span>
              <Icon name='humidity' margin='0 2px 0 0' />
              {weather?.rh.toFixed()} %
            </span>
          </WeatherDetailsItem>
          <WeatherDetailsItem>
            <span>Ветер</span>
            <span>
              <Icon name='wind' margin='0 4px 0 0' />
              {weather?.wind_spd.toPrecision(2)} м/с
            </span>
          </WeatherDetailsItem>
          <WeatherDetailsItem>
            <span>Направление</span>
            <span>
              <Icon name='wind-direction' margin='0 4px 0 0' />
              {weather?.wind_cdir}
            </span>
          </WeatherDetailsItem>
        </WeatherDetailsList>
      </Content>
    );
  }

  return (
    <CurrentWeatherStyled>
      <Title more={toLocalDateTimeStr(dateTime?.date_time)?.slice(0, -3)}>Текущая погода</Title>
      {content}
    </CurrentWeatherStyled>
  );
};

export default CurrentWeather;
