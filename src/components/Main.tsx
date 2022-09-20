import { FC } from 'react';
import styled from 'styled-components/macro';

import CurrentWeather from './CurrentWeather/CurrentWeather';
import DailyWeatherContent from './DailyWeatherContent/DailyWeatherContent';
import Container from './UI/Container';

const MainStyled = styled.main`
  flex: 1 0 auto;
`;

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
