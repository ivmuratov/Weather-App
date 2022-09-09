import { FC, useState } from 'react';

import {
  Date,
  Info,
  Description,
  StyledDailyForecastItem,
  Temp,
  MoreContent,
  MainContent,
  WeatherDetailsItem,
  WeatherDetailItem,
} from './DailyForecastItem.styled';

import { IDailyWeatherItem } from '../../models/IDailyWeatherItem';
import { getDay, toLocalDateStr } from '../../utils/date';
import { weatherConditions } from '../../utils/weather';
import { DownArrowButton, UpArrowButton } from '../UI/ArrowButton';
import { ImgContainer } from '../UI/ImgContainer';

interface DailyForecastItemProps {
  item: IDailyWeatherItem;
}

const DailyForecastItem: FC<DailyForecastItemProps> = ({ item }) => {
  const [open, setOpen] = useState<boolean>(false);

  const toggleOpen = () => {
    console.log('open');
    setOpen(!open);
  };

  return (
    <StyledDailyForecastItem>
      <MainContent>
        <Info>
          <Date>
            <span>{getDay(item.valid_date)}</span>
            <span>{toLocalDateStr(item.valid_date)?.slice(0, -5)}</span>
          </Date>
          <ImgContainer margin='0 10px 0 0' size='65px' src={weatherConditions(item?.weather)} />
          <Temp>
            <span>{item.max_temp.toFixed()}°</span>
            <span>/{item.min_temp.toFixed()}°</span>
          </Temp>
        </Info>
        <Description>{item.weather.description}</Description>
        {open ? <UpArrowButton onClick={toggleOpen} /> : <DownArrowButton onClick={toggleOpen} />}
      </MainContent>
      {open && (
        <MoreContent>
          <WeatherDetailsItem>
            <WeatherDetailItem>
              <span>Давление</span>
              <span>{item.pres.toFixed()} мбар</span>
            </WeatherDetailItem>
            <WeatherDetailItem>
              <span>Влажность</span>
              <span>{item.rh} %</span>
            </WeatherDetailItem>
            <WeatherDetailItem>
              <span>Облачность</span>
              <span>{item.clouds} %</span>
            </WeatherDetailItem>
          </WeatherDetailsItem>
          <WeatherDetailsItem>
            <WeatherDetailItem>
              <span>Ветер</span>
              <span>{item.wind_spd.toPrecision(2)} м/с</span>
            </WeatherDetailItem>
            <WeatherDetailItem>
              <span>Порывы ветра</span>
              <span>{item.wind_gust_spd.toPrecision(2)} м/с</span>
            </WeatherDetailItem>
            <WeatherDetailItem>
              <span>Направление</span>
              <span>{item.wind_cdir}</span>
            </WeatherDetailItem>
          </WeatherDetailsItem>
          <WeatherDetailsItem>
            <WeatherDetailItem>
              <span>Вероятность осадков</span>
              <span>{item.pop} %</span>
            </WeatherDetailItem>
            <WeatherDetailItem>
              <span>Видимость</span>
              <span>{item.vis.toFixed()} км</span>
            </WeatherDetailItem>
            <WeatherDetailItem>
              <span>UV-индекс</span>
              <span>{item.uv}</span>
            </WeatherDetailItem>
          </WeatherDetailsItem>
        </MoreContent>
      )}
    </StyledDailyForecastItem>
  );
};

export default DailyForecastItem;
