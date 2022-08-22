import { FC } from 'react';
import styled from 'styled-components';

import CurrentWeather from './CurrentWeather/CurrentWeather';

import { Container } from '../styles/global';

const MainStyled = styled.main`
  margin: 0 0 0 0;
  flex: 1 0 auto;
`;

const Main: FC = () => {
  return (
    <MainStyled>
      <Container>
        <CurrentWeather />
      </Container>
    </MainStyled>
  );
};

export default Main;
