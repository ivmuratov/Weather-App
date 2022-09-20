import { FC, useState } from 'react';

import {
  Date,
  Info,
  Description,
  DailyWeatherItemStyled,
  MaxMinTemp,
  MoreContent,
  MainContent,
  WeatherDetailsGroup,
  WeatherDetailsItem,
} from './DailyWeatherItem.styled';

import IDailyWeatherItem from '../../models/IDailyWeatherItem';
import { getDay, toLocalDateStr } from '../../utils/date';
import { weatherConditions } from '../../utils/weather';
import DownArrowButton from '../UI/ArrowButton/DownArrowButton';
import UpArrowButton from '../UI/ArrowButton/UpArrowButton';
import Icon from '../UI/Icon';
import ImgContainer from '../UI/ImgContainer';

interface DailyWeatherItemProps {
  item: IDailyWeatherItem;
}

const DailyWeatherItem: FC<DailyWeatherItemProps> = ({ item }) => {
  const [openMoreContent, setOpenMoreContent] = useState<boolean>(false);

  const toggleOpen = () => {
    setOpenMoreContent(!openMoreContent);
  };

  return (
    <DailyWeatherItemStyled>
      <MainContent>
        <Info>
          <Date>
            <span>{getDay(item.valid_date)}</span>
            <span>{toLocalDateStr(item.valid_date)?.slice(0, -5)}</span>
          </Date>
          <ImgContainer margin='0 10px 0 0' size='65px' src={weatherConditions(item?.weather)} />
          <MaxMinTemp>
            <span>{item.max_temp.toFixed()}°</span>
            <span>/{item.min_temp.toFixed()}°</span>
          </MaxMinTemp>
        </Info>
        <Description>{item.weather.description}</Description>
        {openMoreContent ? <UpArrowButton onClick={toggleOpen} /> : <DownArrowButton onClick={toggleOpen} />}
      </MainContent>
      {openMoreContent && (
        <MoreContent>
          <WeatherDetailsGroup>
            <WeatherDetailsItem>
              <span>Давление</span>
              <span>
                <Icon name='pressure' margin='0 4px 0 0' />
                {item.pres.toFixed()} мбар
              </span>
            </WeatherDetailsItem>
            <WeatherDetailsItem>
              <span>Влажность</span>
              <span>
                <Icon name='humidity' margin='0 2px 0 0' />
                {item.rh} %
              </span>
            </WeatherDetailsItem>
            <WeatherDetailsItem>
              <span>Облачность</span>
              <span>
                <Icon name='cloudy' margin='0 4px 0 0' />
                {item.clouds} %
              </span>
            </WeatherDetailsItem>
          </WeatherDetailsGroup>
          <WeatherDetailsGroup>
            <WeatherDetailsItem>
              <span>Ветер</span>
              <span>
                <Icon name='wind' margin='0 4px 0 0' />
                {item.wind_spd.toPrecision(2)} м/с
              </span>
            </WeatherDetailsItem>
            <WeatherDetailsItem>
              <span>Порывы ветра</span>
              <span>
                <Icon name='wind-gust' margin='0 4px 0 0' />
                {item.wind_gust_spd.toPrecision(2)} м/с
              </span>
            </WeatherDetailsItem>
            <WeatherDetailsItem>
              <span>Направление</span>
              <span>
                <Icon name='wind-direction' margin='0 4px 0 0' />
                {item.wind_cdir}
              </span>
            </WeatherDetailsItem>
          </WeatherDetailsGroup>
          <WeatherDetailsGroup>
            <WeatherDetailsItem>
              <span>Вероятность осадков</span>
              <span>
                <Icon name='pop' margin='0 2px 0 0' />
                {item.pop} %
              </span>
            </WeatherDetailsItem>
            <WeatherDetailsItem>
              <span>Видимость</span>
              <span>
                <Icon name='visibility' margin='0 4px 0 0' />
                {item.vis.toFixed()} км
              </span>
            </WeatherDetailsItem>
            <WeatherDetailsItem>
              <span>UV-индекс</span>
              <span>
                <Icon name='air-pollution' margin='0 2px 0 0' />
                {item.uv}
              </span>
            </WeatherDetailsItem>
          </WeatherDetailsGroup>
        </MoreContent>
      )}
    </DailyWeatherItemStyled>
  );
};

export default DailyWeatherItem;
