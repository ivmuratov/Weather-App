import { FC, useState } from 'react';

import {
  Date,
  Info,
  Description,
  StyledDailyWeatherItem,
  MaxMinTemp,
  MoreContent,
  MainContent,
  DailyWeatherDetailsGroup,
  DailyWeatherDetailsItem,
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
    <StyledDailyWeatherItem>
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
          <DailyWeatherDetailsGroup>
            <DailyWeatherDetailsItem>
              <span>Давление</span>
              <span>
                <Icon name='pressure' margin='0 4px 0 0' />
                {item.pres.toFixed()} мбар
              </span>
            </DailyWeatherDetailsItem>
            <DailyWeatherDetailsItem>
              <span>Влажность</span>
              <span>
                <Icon name='humidity' margin='0 2px 0 0' />
                {item.rh} %
              </span>
            </DailyWeatherDetailsItem>
            <DailyWeatherDetailsItem>
              <span>Облачность</span>
              <span>
                <Icon name='cloudy' margin='0 4px 0 0' />
                {item.clouds} %
              </span>
            </DailyWeatherDetailsItem>
          </DailyWeatherDetailsGroup>
          <DailyWeatherDetailsGroup>
            <DailyWeatherDetailsItem>
              <span>Ветер</span>
              <span>
                <Icon name='wind' margin='0 4px 0 0' />
                {item.wind_spd.toPrecision(2)} м/с
              </span>
            </DailyWeatherDetailsItem>
            <DailyWeatherDetailsItem>
              <span>Порывы ветра</span>
              <span>
                <Icon name='wind-gust' margin='0 4px 0 0' />
                {item.wind_gust_spd.toPrecision(2)} м/с
              </span>
            </DailyWeatherDetailsItem>
            <DailyWeatherDetailsItem>
              <span>Направление</span>
              <span>
                <Icon name='wind-direction' margin='0 4px 0 0' />
                {item.wind_cdir}
              </span>
            </DailyWeatherDetailsItem>
          </DailyWeatherDetailsGroup>
          <DailyWeatherDetailsGroup>
            <DailyWeatherDetailsItem>
              <span>Вероятность осадков</span>
              <span>
                <Icon name='pop' margin='0 2px 0 0' />
                {item.pop} %
              </span>
            </DailyWeatherDetailsItem>
            <DailyWeatherDetailsItem>
              <span>Видимость</span>
              <span>
                <Icon name='visibility' margin='0 4px 0 0' />
                {item.vis.toFixed()} км
              </span>
            </DailyWeatherDetailsItem>
            <DailyWeatherDetailsItem>
              <span>UV-индекс</span>
              <span>
                <Icon name='air-pollution' margin='0 2px 0 0' />
                {item.uv}
              </span>
            </DailyWeatherDetailsItem>
          </DailyWeatherDetailsGroup>
        </MoreContent>
      )}
    </StyledDailyWeatherItem>
  );
};

export default DailyWeatherItem;