import { skipToken } from '@reduxjs/toolkit/dist/query';
import { FC } from 'react';

import { DailyForecastList, StyledDailyForecastContent } from './DailyForecastContent.styled';

import { useAppSelector } from '../../hooks/redux';
import { useGetCoordQuery } from '../../services/openWeatherMapService';
import { useGetDailyForecastQuery } from '../../services/weatherBitService';
import { getDailyForecastParams } from '../../utils/type';
import DailyForecastItem from '../DailyForecastItem/DailyForecastItem';
import Title from '../UI/Title';

const DailyForecastContent: FC = () => {
  const { name } = useAppSelector((state) => state.cityReducer);

  const { data: coord } = useGetCoordQuery(name);

  const { data: dailyForecast } = useGetDailyForecastQuery(getDailyForecastParams(coord, 7) ?? skipToken);

  return (
    <StyledDailyForecastContent>
      <Title>Прогноз погоды на 7 дней</Title>
      <DailyForecastList>
        {dailyForecast && dailyForecast.map((item) => <DailyForecastItem key={item.valid_date} item={item} />)}
      </DailyForecastList>
    </StyledDailyForecastContent>
  );
};

export default DailyForecastContent;
