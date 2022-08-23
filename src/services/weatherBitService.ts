import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { API_KEY2 } from '../constants/api';
import { CurrentWeatherResp } from '../types/CurrentWeatherResp';

import { ICoordinates } from '../types/ICoordinates';
import { IWeather } from '../types/IWeather';

export const weatherBitApi = createApi({
  reducerPath: 'weatherBitApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.weatherbit.io/v2.0/',
  }),
  endpoints: (build) => ({
    getCurrentWeather: build.query<IWeather, ICoordinates>({
      query: ({ lat, lon }) => ({
        url: `current?key=${API_KEY2}&lang=ru`,
        params: {
          lat,
          lon,
        },
      }),
      transformResponse: (response: CurrentWeatherResp) => response.data[0],
    }),
  }),
});

export const { useGetCurrentWeatherQuery } = weatherBitApi;
