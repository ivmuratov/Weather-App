import { skipToken } from '@reduxjs/toolkit/dist/query';
import { FC } from 'react';

import {
  CurrentForecast,
  CurrentWeatherContent,
  StyledCurrentWeather,
  Temp,
  CurrentWeatherDetail,
  CurrentWeatherDetails,
} from './CurrentWeather.styled';

import { AirQualitativeName } from '../../constants/enums';
import { useCoord } from '../../hooks/useCoord';
import { useGetDateTimeQuery } from '../../services/dateTimeService';
import { useGetCurrentAirPolutionQuery } from '../../services/openWeatherMapService';
import { useGetCurrentWeatherQuery } from '../../services/weatherBitService';
import { airNames } from '../../utils/airPollution';
import { toLocalDateTimeStr } from '../../utils/date';
import { weatherConditions } from '../../utils/weather';
import { FlexContainer } from '../UI/FlexContainer';
import Icon from '../UI/Icon';
import { ImgContainer } from '../UI/ImgContainer';
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
          <CurrentWeatherDetails>
            <CurrentWeatherDetail>
              <span>Качество воздуха</span>
              <span>
                <Icon name='air-pollution' margin='0 2px 0 0' />
                {airNames.get(airPollution?.main.aqi as AirQualitativeName)}
              </span>
            </CurrentWeatherDetail>
            <CurrentWeatherDetail>
              <span>Давление</span>
              <span>
                <Icon name='pressure' margin='0 4px 0 0' />
                {weather?.pres.toFixed()} мбар
              </span>
            </CurrentWeatherDetail>
            <CurrentWeatherDetail>
              <span>Влажность</span>
              <span>
                <Icon name='humidity' margin='0 2px 0 0' />
                {weather?.rh.toFixed()} %
              </span>
            </CurrentWeatherDetail>
            <CurrentWeatherDetail>
              <span>Ветер</span>
              <span>
                <Icon name='wind' margin='0 4px 0 0' />
                {weather?.wind_spd.toPrecision(2)} м/с
              </span>
            </CurrentWeatherDetail>
            <CurrentWeatherDetail>
              <span>Направление</span>
              <span>
                <Icon name='wind-direction' margin='0 4px 0 0' />
                {weather?.wind_cdir}
              </span>
            </CurrentWeatherDetail>
          </CurrentWeatherDetails>
        </CurrentWeatherContent>
      )}
    </StyledCurrentWeather>
  );
};

export default CurrentWeather;
