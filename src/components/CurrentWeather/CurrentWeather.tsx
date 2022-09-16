import { skipToken } from '@reduxjs/toolkit/dist/query';
import { FC } from 'react';

import {
  CurrentForecast,
  CurrentWeatherContent,
  StyledCurrentWeather,
  TempValue,
  CurrentWeatherDetailsItem,
  CurrentWeatherDetailsList,
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
  const coord = useCoord();

  const { data: weather, isLoading: isLoadWeather } = useGetCurrentWeatherQuery(coord ?? skipToken);

  const { data: airPollution, isLoading: isLoadAP } = useGetCurrentAirPolutionQuery(coord ?? skipToken);

  const { data: date, isLoading: isLoadDate } = useGetDateTimeQuery(coord ?? skipToken);

  return (
    <StyledCurrentWeather>
      <Title more={isLoadDate ? 'Загрузка времени' : toLocalDateTimeStr(date?.date_time)?.slice(0, -3)}>
        Текущая погода
      </Title>
      {isLoadWeather || isLoadAP ? (
        <LoadingSun size='150px' />
      ) : (
        <CurrentWeatherContent>
          <CurrentForecast>
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
          </CurrentForecast>
          <CurrentWeatherDetailsList>
            <CurrentWeatherDetailsItem>
              <span>Качество воздуха</span>
              <span>
                <Icon name='air-pollution' margin='0 2px 0 0' />
                {airNames.get(airPollution?.main.aqi as AirQualitativeName)}
              </span>
            </CurrentWeatherDetailsItem>
            <CurrentWeatherDetailsItem>
              <span>Давление</span>
              <span>
                <Icon name='pressure' margin='0 4px 0 0' />
                {weather?.pres.toFixed()} мбар
              </span>
            </CurrentWeatherDetailsItem>
            <CurrentWeatherDetailsItem>
              <span>Влажность</span>
              <span>
                <Icon name='humidity' margin='0 2px 0 0' />
                {weather?.rh.toFixed()} %
              </span>
            </CurrentWeatherDetailsItem>
            <CurrentWeatherDetailsItem>
              <span>Ветер</span>
              <span>
                <Icon name='wind' margin='0 4px 0 0' />
                {weather?.wind_spd.toPrecision(2)} м/с
              </span>
            </CurrentWeatherDetailsItem>
            <CurrentWeatherDetailsItem>
              <span>Направление</span>
              <span>
                <Icon name='wind-direction' margin='0 4px 0 0' />
                {weather?.wind_cdir}
              </span>
            </CurrentWeatherDetailsItem>
          </CurrentWeatherDetailsList>
        </CurrentWeatherContent>
      )}
    </StyledCurrentWeather>
  );
};

export default CurrentWeather;
