import { skipToken } from '@reduxjs/toolkit/dist/query';
import { FC, useState } from 'react';

import {
  Forecast,
  Content,
  CurrentWeatherStyled,
  TempValue,
  WeatherDetailsItem,
  WeatherDetailsList,
  Temp,
  Description,
  AirComp,
} from './CurrentWeather.styled';

import { useCoord } from '../../hooks/useCoord';
import { useModalOpen } from '../../hooks/useModalOpen';
import { useGetDateTimeQuery } from '../../services/dateTimeService';
import { useGetCurrentAirPolutionQuery } from '../../services/openWeatherMapService';
import { useGetCurrentWeatherQuery } from '../../services/weatherBitService';
import { convertToMmHg } from '../../utils/convertToMmHg/convertToMmHg';
import { getAirPollColorIndicate } from '../../utils/getAirPollColorIndicate/getAirPollColorIndicate';
import { getAirQualitativeName } from '../../utils/getAirQualitativeName/getAirQualitativeName';
import { getWeatherIcon } from '../../utils/getWeatherIcon/getWeatherIcon';
import { toDateTimeStr } from '../../utils/toDateTimeStr/toDateTimeStr';
import Icon from '../UI/Icon';
import ImgContainer from '../UI/ImgContainer';
import Link from '../UI/Link';
import LoadingSun from '../UI/LoadingSun';
import Title from '../UI/Title';
import Tooltip from '../UI/Tooltip';

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

  const { ref, open, setOpen } = useModalOpen<HTMLDivElement>(false);

  let content: JSX.Element = <></>;

  if (isLoadCoord || isLoadWeather || isLoadAP || isLoadDateTime) {
    content = <LoadingSun size='150px' />;
  } else if (isSuccCoord && isSuccWeather && isSuccAP && isSuccDateTime) {
    content = (
      <Content>
        <Forecast>
          <Temp>
            <ImgContainer size='105px' src={getWeatherIcon(weather?.weather)} />
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
              <Link onClick={() => setOpen(true)}>
                <Icon name='air-pollution' />
                {getAirQualitativeName(airPollution.main)}
              </Link>
            </span>
          </WeatherDetailsItem>
          <WeatherDetailsItem>
            <span>Давление</span>
            <span>
              <Icon name='pressure' margin='0 4px 0 0' />
              {convertToMmHg(weather?.pres)} мм рт ст
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
          <Tooltip header={'Загрязняющие вещества'} isShow={open} refObj={ref} minWidth='375px'>
            <AirComp.Item>
              <AirComp.Label>Угарный газ CO</AirComp.Label>
              <AirComp.Value color={getAirPollColorIndicate(airPollution.components, 'CO')}>
                {airPollution.components.co} μg/m<sup>3</sup>
              </AirComp.Value>
            </AirComp.Item>
            <AirComp.Item>
              <AirComp.Label>
                Двуокись азота NO<sub>2</sub>
              </AirComp.Label>
              <AirComp.Value color={getAirPollColorIndicate(airPollution.components, 'NO2')}>
                {airPollution.components.no2} μg/m<sup>3</sup>
              </AirComp.Value>
            </AirComp.Item>
            <AirComp.Item>
              <AirComp.Label>
                Диоксид серы SO<sub>2</sub>
              </AirComp.Label>
              <AirComp.Value color={getAirPollColorIndicate(airPollution.components, 'SO2')}>
                {airPollution.components.so2} μg/m<sup>3</sup>
              </AirComp.Value>
            </AirComp.Item>
            <AirComp.Item>
              <AirComp.Label>
                Мелкие частицы PM<sub>2.5</sub>
              </AirComp.Label>
              <AirComp.Value color={getAirPollColorIndicate(airPollution.components, 'PM2.5')}>
                {airPollution.components.pm2_5} μg/m<sup>3</sup>
              </AirComp.Value>
            </AirComp.Item>
            <AirComp.Item>
              <AirComp.Label>
                Взвешенные частицы PM<sub>10</sub>
              </AirComp.Label>
              <AirComp.Value color={getAirPollColorIndicate(airPollution.components, 'PM10')}>
                {airPollution.components.pm10} μg/m<sup>3</sup>
              </AirComp.Value>
            </AirComp.Item>
          </Tooltip>
        </WeatherDetailsList>
      </Content>
    );
  }

  return (
    <CurrentWeatherStyled>
      <Title more={toDateTimeStr(dateTime?.date_time, 'dd.mm.yyyy, HH:MM')}>Текущая погода</Title>
      {content}
    </CurrentWeatherStyled>
  );
};

export default CurrentWeather;
