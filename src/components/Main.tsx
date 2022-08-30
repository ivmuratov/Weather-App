import { FC } from 'react';
import styled from 'styled-components';

import CurrentWeather from './CurrentWeather/CurrentWeather';
import DailyForecastContent from './DailyForecastList/DailyForecastContent';

import { Container } from '../styles/global';

const MainStyled = styled.main`
  flex: 1 0 auto;
`;

const Main: FC = () => {
  return (
    <MainStyled>
      <Container>
        <CurrentWeather />
        <DailyForecastContent />
      </Container>
    </MainStyled>
  );
};

export default Main;
