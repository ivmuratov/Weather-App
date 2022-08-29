import { combineReducers, configureStore } from '@reduxjs/toolkit';

import themeReducer from './reducers/themeSlice';

import { dateTimeApi } from '../services/dateTimeService';
import { openWeatherMapApi } from '../services/openWeatherMapService';
import { weatherBitApi } from '../services/weatherBitService';

const rootReducer = combineReducers({
  [openWeatherMapApi.reducerPath]: openWeatherMapApi.reducer,
  [weatherBitApi.reducerPath]: weatherBitApi.reducer,
  [dateTimeApi.reducerPath]: dateTimeApi.reducer,
  themeReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(openWeatherMapApi.middleware, weatherBitApi.middleware, dateTimeApi.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
