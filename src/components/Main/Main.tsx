import { FC } from 'react';

import { MainStyled } from './Main.styled';

import CurrentWeather from '../CurrentWeather/CurrentWeather';
import DailyWeatherContent from '../DailyWeatherContent/DailyWeatherContent';
import Container from '../UI/Container/Container';

const Main: FC = () => {
  return (
    <MainStyled>
      <Container>
        <CurrentWeather />
        <DailyWeatherContent />
      </Container>
    </MainStyled>
  );
};

export default Main;
