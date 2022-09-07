import { skipToken } from '@reduxjs/toolkit/dist/query';
import { FC, useState } from 'react';

import { DailyForecastList, StyledDailyForecastContent } from './DailyForecastContent.styled';

import { useCoord } from '../../hooks/useCoord';
import { usePagination } from '../../hooks/usePagination';
import { IDailyWeatherItem } from '../../models/IDailyWeatherItem';
import { useGetDailyForecastQuery } from '../../services/weatherBitService';
import { IDropdownItem } from '../../types/IDropdownItem';
import { getDailyForecastParams } from '../../utils/type';
import DailyForecastItem from '../DailyForecastItem/DailyForecastItem';
import Dropdown from '../UI/Dropdown';
import { Pagination } from '../UI/Pagination';
import Title from '../UI/Title';

const dropdownItems: IDropdownItem[] = [
  { id: 1, label: '7', value: '7' },
  { id: 2, label: '8', value: '8' },
  { id: 3, label: '9', value: '9' },
  { id: 4, label: '10', value: '10' },
  { id: 5, label: '11', value: '11' },
  { id: 6, label: '12', value: '12' },
  { id: 7, label: '13', value: '13' },
  { id: 8, label: '14', value: '14' },
  { id: 9, label: '15', value: '15' },
  { id: 10, label: '16', value: '16' },
];

const DailyForecastContent: FC = () => {
  const coord = useCoord();

  const [daysForecast, setDaysForecast] = useState<IDropdownItem>(dropdownItems[9]);

  const { data: dailyForecast } = useGetDailyForecastQuery(
    getDailyForecastParams(coord, +daysForecast.value) ?? skipToken,
  );

  const { currItems, currPage, itemsPerPage, actions } = usePagination<IDailyWeatherItem>(dailyForecast);

  return (
    <StyledDailyForecastContent>
      <Title
        more={<Dropdown header='Дни:' label={daysForecast.label} select={setDaysForecast} items={dropdownItems} />}
      >
        Прогноз погоды на {daysForecast.label} дней
      </Title>
      <DailyForecastList>
        {currItems && currItems.map((item) => <DailyForecastItem key={item.valid_date} item={item} />)}
      </DailyForecastList>
      <Pagination
        currPage={currPage}
        items={dailyForecast?.length ?? 0}
        itemsPerPage={itemsPerPage}
        actions={actions}
      />
    </StyledDailyForecastContent>
  );
};

export default DailyForecastContent;
