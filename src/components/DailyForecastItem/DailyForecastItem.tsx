import { FC, useState } from 'react';

import {
  Date,
  Info,
  Description,
  StyledDailyForecastItem,
  Temp,
  MoreContent,
  MainContent,
} from './DailyForecastItem.styled';

import { IDailyWeatherItem } from '../../models/IDailyWeatherItem';
import { getDay, toLocalDateStr } from '../../utils/date';
import { weatherConditions } from '../../utils/weather';
import { ImgContainer } from '../UI/ImgContainer';

interface DailyForecastItemProps {
  item: IDailyWeatherItem;
}

const DailyForecastItem: FC<DailyForecastItemProps> = ({ item }) => {
  const [open, setOpen] = useState<boolean>(false);

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
        <div onClick={() => setOpen(!open)}>больше</div>
      </MainContent>
      {open && <MoreContent>Доп контент</MoreContent>}
    </StyledDailyForecastItem>
  );
};

export default DailyForecastItem;
