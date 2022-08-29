import { skipToken } from '@reduxjs/toolkit/dist/query';
import { FC } from 'react';

import { StyledDailyForecastList } from './DailyForecastList.styled';

import { useGetCoordQuery } from '../../services/openWeatherMapService';
import { useGetDailyForecastQuery } from '../../services/weatherBitService';
import { getDailyForecastParams } from '../../utils/type';
import DailyForecastItem from '../DailyForecastItem/DailyForecastItem';
import Title from '../UI/Title';

const DailyForecastList: FC = () => {
  const { data: coord } = useGetCoordQuery('Novosibirsk');

  const { data: dailyForecast } = useGetDailyForecastQuery(getDailyForecastParams(coord, 7) ?? skipToken);

  return (
    <StyledDailyForecastList>
      <Title>Прогноз погоды на 7 дней</Title>
      {dailyForecast && dailyForecast.map((item) => <DailyForecastItem key={item.valid_date} item={item} />)}
    </StyledDailyForecastList>
  );
};

export default DailyForecastList;
