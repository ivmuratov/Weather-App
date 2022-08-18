import React from 'react';
import { ThemeProvider } from 'styled-components';

import Footer from './components/Footer';
import Header from './components/Header/Header';
import Main from './components/Main';
import { useAppSelector } from './hooks/redux';
import { Wrapper } from './styles/global';
import { GlobalStyles } from './styles/global';
import { ResetStyles } from './styles/reset';

const App = () => {
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
