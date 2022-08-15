import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './App';
import { store } from './store/store';
import { GlobalStyles } from './styles/global';
import { ResetStyles } from './styles/reset';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Provider store={store}>
    <ResetStyles />
    <GlobalStyles />
    <App />
  </Provider>,
);
