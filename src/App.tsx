import React from 'react';
import styled from 'styled-components';

import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

const Wrapper = styled.div`
  max-width: 900px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 0 15px;
  margin: 0 auto;
`;

const App = () => {
  return (
    <Wrapper>
      <Header />
      <Main />
      <Footer />
    </Wrapper>
  );
};

export default App;
