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
import Icon from '../UI/Icon/Icon';
import Link from '../UI/Link/Link';
import LoadingSun from '../UI/LoadingSun/LoadingSun';
import SvgContainer from '../UI/SvgContainer/SvgContainer';
import Title from '../UI/Title/Title';
import Tooltip from '../UI/Tooltip/Tooltip';

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
            <SvgContainer size='105px' src={getWeatherIcon(weather?.weather)} />
            <TempValue>
              {weather?.temp.toFixed()}
              <span>??</span>
            </TempValue>
          </Temp>
          <Description>
            <p>{weather?.weather.description}</p>
            <p>?????????????????? ?????? {weather?.app_temp.toFixed()}??</p>
          </Description>
        </Forecast>
        <WeatherDetailsList>
          <WeatherDetailsItem>
            <span>???????????????? ??????????????</span>
            <span>
              <Link onClick={() => setOpen(true)}>
                <Icon name='air-pollution' />
                {getAirQualitativeName(airPollution.main)}
              </Link>
            </span>
          </WeatherDetailsItem>
          <WeatherDetailsItem>
            <span>????????????????</span>
            <span>
              <Icon name='pressure' margin='0 4px 0 0' />
              {convertToMmHg(weather?.pres)} ???? ???? ????
            </span>
          </WeatherDetailsItem>
          <WeatherDetailsItem>
            <span>??????????????????</span>
            <span>
              <Icon name='humidity' margin='0 2px 0 0' />
              {weather?.rh.toFixed()} %
            </span>
          </WeatherDetailsItem>
          <WeatherDetailsItem>
            <span>??????????</span>
            <span>
              <Icon name='wind' margin='0 4px 0 0' />
              {weather?.wind_spd.toPrecision(2)} ??/??
            </span>
          </WeatherDetailsItem>
          <WeatherDetailsItem>
            <span>??????????????????????</span>
            <span>
              <Icon name='wind-direction' margin='0 4px 0 0' />
              {weather?.wind_cdir}
            </span>
          </WeatherDetailsItem>
        </WeatherDetailsList>
        <Tooltip
          header={'???????????????????????? ????????????????'}
          isShow={open}
          refObj={ref}
          position={{ top: '40px', right: '0px' }}
          minWidth='375px'
        >
          <AirComp.Item>
            <AirComp.Label>?????????????? ?????? CO</AirComp.Label>
            <AirComp.Value color={getAirPollColorIndicate(airPollution.components, 'CO')}>
              {airPollution.components.co} ??g/m<sup>3</sup>
            </AirComp.Value>
          </AirComp.Item>
          <AirComp.Item>
            <AirComp.Label>
              ?????????????? ?????????? NO<sub>2</sub>
            </AirComp.Label>
            <AirComp.Value color={getAirPollColorIndicate(airPollution.components, 'NO2')}>
              {airPollution.components.no2} ??g/m<sup>3</sup>
            </AirComp.Value>
          </AirComp.Item>
          <AirComp.Item>
            <AirComp.Label>
              ?????????????? ???????? SO<sub>2</sub>
            </AirComp.Label>
            <AirComp.Value color={getAirPollColorIndicate(airPollution.components, 'SO2')}>
              {airPollution.components.so2} ??g/m<sup>3</sup>
            </AirComp.Value>
          </AirComp.Item>
          <AirComp.Item>
            <AirComp.Label>
              ???????????? ?????????????? PM<sub>2.5</sub>
            </AirComp.Label>
            <AirComp.Value color={getAirPollColorIndicate(airPollution.components, 'PM2.5')}>
              {airPollution.components.pm2_5} ??g/m<sup>3</sup>
            </AirComp.Value>
          </AirComp.Item>
          <AirComp.Item>
            <AirComp.Label>
              ?????????????? ?????????????? PM<sub>10</sub>
            </AirComp.Label>
            <AirComp.Value color={getAirPollColorIndicate(airPollution.components, 'PM10')}>
              {airPollution.components.pm10} ??g/m<sup>3</sup>
            </AirComp.Value>
          </AirComp.Item>
        </Tooltip>
      </Content>
    );
  }

  return (
    <CurrentWeatherStyled>
      <Title more={toDateTimeStr(dateTime?.date_time, 'dd.mm.yyyy, HH:MM')}>?????????????? ????????????</Title>
      {content}
    </CurrentWeatherStyled>
  );
};

export default CurrentWeather;
