import { skipToken } from '@reduxjs/toolkit/dist/query';
import { FC, Fragment } from 'react';

import { DailyWeatherList, StyledDailyWeatherContent } from './DailyWeatherContent.styled';

import { useCoord } from '../../hooks/useCoord';
import { usePagination } from '../../hooks/usePagination';
import IDailyWeatherItem from '../../models/IDailyWeatherItem';
import { useGetDailyForecastQuery } from '../../services/weatherBitService';
import { getDailyForecastParams } from '../../utils/weather';
import DailyWeatherItem from '../DailyWeatherItem/DailyWeatherItem';
import LoadingSun from '../UI/LoadingSun';
import Pagination from '../UI/Pagination';
import Title from '../UI/Title';

const DailyWeatherContent: FC = () => {
  const coord = useCoord();

  const { data: dailyForecast, isLoading } = useGetDailyForecastQuery(getDailyForecastParams(coord, 16) ?? skipToken);

  const { currItems, currPage, itemsPerPage, actions } = usePagination<IDailyWeatherItem>(dailyForecast);

  return (
    <StyledDailyWeatherContent>
      <Title>Прогноз погоды на 16 дней</Title>
      {isLoading ? (
        <LoadingSun size='150px' />
      ) : (
        <Fragment>
          <DailyWeatherList>
            {currItems && currItems.map((item) => <DailyWeatherItem key={item.valid_date} item={item} />)}
          </DailyWeatherList>
          <Pagination
            currPage={currPage}
            items={dailyForecast?.length ?? 0}
            itemsPerPage={itemsPerPage}
            actions={actions}
          />
        </Fragment>
      )}
    </StyledDailyWeatherContent>
  );
};

export default DailyWeatherContent;
