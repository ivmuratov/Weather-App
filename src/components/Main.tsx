import { FC } from 'react';
import styled from 'styled-components';

import CurrentWeather from './CurrentWeather/CurrentWeather';
import DailyForecastList from './DailyForecastList/DailyForecastList';

import { Container } from '../styles/global';

const MainStyled = styled.main`
  flex: 1 0 auto;
`;

const Main: FC = () => {
  return (
    <MainStyled>
      <Container>
        <CurrentWeather />
        <DailyForecastList />
      </Container>
    </MainStyled>
  );
};

export default Main;
