import React, { FC } from 'react';
import { ThemeProvider } from 'styled-components';

import Footer from './components/Footer';
import Header from './components/Header/Header';
import Main from './components/Main';
import { Wrapper } from './components/UI/Wrapper';
import { useAppSelector } from './hooks/useAppSelector';
import { GlobalStyles } from './styles/global';
import { ResetStyles } from './styles/reset';

const App: FC = () => {
  const { theme } = useAppSelector((state) => state.themeReducer);

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <ResetStyles />
        <GlobalStyles />
        <Header />
        <Main />
        <Footer />
      </Wrapper>
    </ThemeProvider>
  );
};

export default App;
