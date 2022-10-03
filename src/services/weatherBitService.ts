import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { ApiKey, ApiUrl } from '../constants/api';
import CurrentWeatherResp from '../models/CurrentWeatherResp';
import DailyWeatherResp from '../models/DailyWeatherResp';
import ICoordinates from '../models/ICoordinates';
import ICurrentWeather from '../models/ICurrentWeather';
import IDailyWeatherItem from '../models/IDailyWeatherItem';
import IDailyWeatherListParams from '../types/IDailyWeatherListParams';

export const weatherBitApi = createApi({
  reducerPath: 'weatherBitApi',
  baseQuery: fetchBaseQuery({
    baseUrl: ApiUrl.WEATHER_BIT,
  }),
  endpoints: (build) => ({
    getCurrentWeather: build.query<ICurrentWeather, ICoordinates>({
      query: ({ lat, lon }) => ({
        url: `current?key=${ApiKey.WEATHER_BIT}&lang=ru`,
        params: {
          lat,
          lon,
        },
      }),
      transformResponse: (response: CurrentWeatherResp) => response.data[0],
    }),
    getDailyWeatherList: build.query<IDailyWeatherItem[], IDailyWeatherListParams>({
      query: ({ lat, lon, days }) => ({
        url: `forecast/daily?&key=${ApiKey.WEATHER_BIT}&lang=ru`,
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
