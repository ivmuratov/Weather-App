import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { API_KEY2 } from '../constants/api';
import CurrentWeatherResp from '../models/CurrentWeatherResp';
import DailyWeatherResp from '../models/DailyWeatherResp';
import ICoordinates from '../models/ICoordinates';
import ICurrentWeather from '../models/ICurrentWeather';
import IDailyWeatherItem from '../models/IDailyWeatherItem';
import IDailyWeatherListParams from '../types/IDailyWeatherListParams';

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
    getDailyWeatherList: build.query<IDailyWeatherItem[], IDailyWeatherListParams>({
      query: ({ lat, lon, days }) => ({
        url: `forecast/daily?&key=${API_KEY2}&lang=ru`,
        params: {
          lat,
          lon,
          days,
        },
      }),
      transformResponse: (response: DailyWeatherResp) => response.data,
    }),
  }),
});

export const { useGetCurrentWeatherQuery, useGetDailyWeatherListQuery } = weatherBitApi;
