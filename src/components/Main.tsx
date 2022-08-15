import { FC } from 'react';
import styled from 'styled-components';

import CurrentWeather from './CurrentWeather/CurrentWeather';

const MainStyled = styled.main`
  flex: 1 0 auto;
`;

const Main: FC = () => {
  return (
    <MainStyled>
      <CurrentWeather />
    </MainStyled>
  );
};

export default Main;
