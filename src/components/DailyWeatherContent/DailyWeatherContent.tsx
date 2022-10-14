import { skipToken } from '@reduxjs/toolkit/dist/query';
import { FC, useState } from 'react';

import { DailyWeatherList, DailyWeatherContentStyled } from './DailyWeatherContent.styled';

import { useCoord } from '../../hooks/useCoord';
import { useGetDailyWeatherListQuery } from '../../services/weatherBitService';
import { getDailyWeatherListParams } from '../../utils/getDailyWeatherListParams/getDailyWeatherListParams';
import DailyWeatherItem from '../DailyWeatherItem/DailyWeatherItem';
import LoadingSun from '../UI/LoadingSun';
import Title from '../UI/Title';
import Toggle from '../UI/Toggle';

const DailyWeatherContent: FC = () => {
  const { data: coord, isLoading: isLoadCoord, isSuccess: isSuccCoord } = useCoord();

  const {
    data: dailyWeatherList,
    isLoading: isLoadDF,
    isSuccess: isSuccDF,
  } = useGetDailyWeatherListQuery(getDailyWeatherListParams(coord, 14) ?? skipToken);

  const [openAllItems, setOpenAllItems] = useState<boolean>(false);

  let content: JSX.Element = <></>;

  if (isLoadCoord || isLoadDF) {
    content = <LoadingSun size='150px' />;
  } else if (isSuccCoord && isSuccDF) {
    content = (
      <DailyWeatherList>
        {dailyWeatherList &&
          dailyWeatherList.map((item) => <DailyWeatherItem key={item.valid_date} item={item} openAll={openAllItems} />)}
      </DailyWeatherList>
    );
  }

  return (
    <DailyWeatherContentStyled>
      <Title
        more={
          <Toggle
            onClick={() => setOpenAllItems(!openAllItems)}
            placeholder='подробный'
            placeholderSize='16px'
            placeholderIndent='7px'
          />
        }
      >
        Прогноз на 7 дней
      </Title>
      {content}
    </DailyWeatherContentStyled>
  );
};

export default DailyWeatherContent;
