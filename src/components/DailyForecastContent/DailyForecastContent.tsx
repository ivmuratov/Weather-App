import { skipToken } from '@reduxjs/toolkit/dist/query';
import { FC, Fragment } from 'react';

import { DailyForecastList, StyledDailyForecastContent } from './DailyForecastContent.styled';

import { useCoord } from '../../hooks/useCoord';
import { usePagination } from '../../hooks/usePagination';
import { IDailyWeatherItem } from '../../models/IDailyWeatherItem';
import { useGetDailyForecastQuery } from '../../services/weatherBitService';
import { getDailyForecastParams } from '../../utils/type';
import DailyForecastItem from '../DailyForecastItem/DailyForecastItem';
import LoadingSun from '../UI/LoadingSun';
import { Pagination } from '../UI/Pagination';
import Title from '../UI/Title';

const DailyForecastContent: FC = () => {
  const coord = useCoord();

  const { data: dailyForecast, isLoading } = useGetDailyForecastQuery(getDailyForecastParams(coord, 16) ?? skipToken);

  const { currItems, currPage, itemsPerPage, actions } = usePagination<IDailyWeatherItem>(dailyForecast);

  return (
    <StyledDailyForecastContent>
      <Title>Прогноз погоды на 16 дней</Title>
      {isLoading ? (
        <LoadingSun size='500px' />
      ) : (
        <Fragment>
          <DailyForecastList>
            {currItems && currItems.map((item) => <DailyForecastItem key={item.valid_date} item={item} />)}
          </DailyForecastList>
          <Pagination
            currPage={currPage}
            items={dailyForecast?.length ?? 0}
            itemsPerPage={itemsPerPage}
            actions={actions}
          />
        </Fragment>
      )}
    </StyledDailyForecastContent>
  );
};

export default DailyForecastContent;
