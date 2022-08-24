import { skipToken } from '@reduxjs/toolkit/dist/query';
import { FC } from 'react';

import { StyledDailyForecast } from './DailyForecast.styled';

import { useGetCoordQuery } from '../../services/openWeatherMapService';
import { useGetDailyForecastQuery } from '../../services/weatherBitService';

const DailyForecast: FC = () => {
  const { data: coord } = useGetCoordQuery('Novosibirsk');

  const { data: dailyForecast } = useGetDailyForecastQuery(coord ?? skipToken);

  return <StyledDailyForecast>Forecast</StyledDailyForecast>;
};

export default DailyForecast;
