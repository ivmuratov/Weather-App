import { FC } from 'react';

import { StyledDailyForecastItem } from './DailyForecastItem.styled';

import { IDailyWeatherItem } from '../../types/IDailyWeatherItem';
import { weatherConditions } from '../../utils/weather';
import { ImgContainer } from '../UI/ImgContainer';

interface DailyForecastItemProps {
  item: IDailyWeatherItem;
}

const DailyForecastItem: FC<DailyForecastItemProps> = ({ item }) => {
  return (
    <StyledDailyForecastItem>
      {item.valid_date}
      <ImgContainer size='65px' src={weatherConditions(item?.weather)} />
      <div>
        {item.high_temp.toFixed()}° / {item.low_temp.toFixed()}°
      </div>
      <div>{item.weather.description}</div>
    </StyledDailyForecastItem>
  );
};

export default DailyForecastItem;
