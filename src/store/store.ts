import { combineReducers, configureStore } from '@reduxjs/toolkit';

import themeReducer from './reducers/themeSlice';

import weatherApiReducer from '../services/weatherService';

import { weatherApi } from '../services/weatherService';

const rootReducer = combineReducers({
  [weatherApi.reducerPath]: weatherApiReducer,
  themeReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(weatherApi.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
