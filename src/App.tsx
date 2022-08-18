import React, { useState } from 'react';

import { Provider } from 'react-redux';
import { DefaultTheme, ThemeProvider } from 'styled-components';

import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import { store } from './store/store';
import { Wrapper } from './styles/global';
import { GlobalStyles } from './styles/global';
import { ResetStyles } from './styles/reset';
import { darkTheme, lightTheme } from './styles/theme';

//TODO: поработать с redux (тема должна переключаться из header)
const App = () => {
  const [theme, setTheme] = useState<DefaultTheme>(lightTheme);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Wrapper>
          <ResetStyles />
          <GlobalStyles />

          <button
            onClick={() => {
              setTheme(theme === lightTheme ? darkTheme : lightTheme);
            }}
          >
            tuggle theme
          </button>
          <Header />
          <Main />
          <Footer />
        </Wrapper>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
