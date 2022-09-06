import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { API_KEY2 } from '../constants/api';
import { CurrentWeatherResp } from '../models/CurrentWeatherResp';
import { DailyForecastParams } from '../models/DailyForecastParams';
import { DailyForecastResp } from '../models/DailyForecastResp';
import { ICoordinates } from '../models/ICoordinates';
import { ICurrentWeather } from '../models/ICurrentWeather';
import { IDailyWeatherItem } from '../models/IDailyWeatherItem';

export const weatherBitApi = createApi({
  reducerPath: 'weatherBitApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.weatherbit.io/v2.0/',
  }),
  endpoints: (build) => ({
    getCurrentWeather: build.query<ICurrentWeather, ICoordinates>({
      query: ({ lat, lon }) => ({
        url: `current?key=${API_KEY2}&lang=ru`,
        params: {
          lat,
          lon,
        },
      }),
      transformResponse: (response: CurrentWeatherResp) => response.data[0],
    }),
    getDailyForecast: build.query<IDailyWeatherItem[], DailyForecastParams>({
      query: ({ lat, lon, days }) => ({
        url: `forecast/daily?&key=${API_KEY2}&lang=ru`,
        params: {
          lat,
          lon,
          days,
        },
      }),
      transformResponse: (response: DailyForecastResp) => response.data,
    }),
  }),
});

export const { useGetCurrentWeatherQuery, useGetDailyForecastQuery } = weatherBitApi;
