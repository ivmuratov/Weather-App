import { FC } from 'react';

import { Date, Info, Description, StyledDailyForecastItem, Temp } from './DailyForecastItem.styled';

import { IDailyWeatherItem } from '../../types/IDailyWeatherItem';
import { getDay, toLocalDateStr } from '../../utils/date';
import { weatherConditions } from '../../utils/weather';
import { ImgContainer } from '../UI/ImgContainer';

interface DailyForecastItemProps {
  item: IDailyWeatherItem;
}

const DailyForecastItem: FC<DailyForecastItemProps> = ({ item }) => {
  return (
    <StyledDailyForecastItem>
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
      <div>Кнопка</div>
    </StyledDailyForecastItem>
  );
};

export default DailyForecastItem;
