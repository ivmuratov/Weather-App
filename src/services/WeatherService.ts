import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { API_KEY } from '../constants/api';
import { CoordinatesResp } from '../types/CoordinatesResp';
import { CurrentAirPollutionResp } from '../types/CurrentAirPollutionResp';
import { CurrentWeatherResp } from '../types/CurrentWeatherResp';
import { IAirPollution } from '../types/IAirPollution';
import { ICoordinates } from '../types/ICoordinates';

export const weatherApi = createApi({
  reducerPath: 'weatherApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.openweathermap.org/',
  }),
  endpoints: (build) => ({
    getCoord: build.query<ICoordinates, string>({
      query: (city) => ({
        url: `geo/1.0/direct?&appid=${API_KEY}`,
        params: {
          q: city,
        },
      }),
      transformResponse: (response: CoordinatesResp[]) => {
        const { lon, lat } = response[0];
        return {
          lon,
          lat,
        };
      },
    }),
    getCurrentWeather: build.query<CurrentWeatherResp, ICoordinates>({
      query: ({ lat, lon }) => ({
        url: `data/2.5/weather?&appid=${API_KEY}&units=metric&lang=ru`,
        params: {
          lat,
          lon,
        },
      }),
    }),
    getCurrentAirPolution: build.query<IAirPollution, ICoordinates>({
      query: ({ lat, lon }) => ({
        url: `data/2.5/air_pollution?&appid=${API_KEY}`,
        params: {
          lat,
          lon,
        },
      }),
      transformResponse: (response: CurrentAirPollutionResp) => {
        return response.list[0];
      },
    }),
  }),
});

export const { useGetCoordQuery, useGetCurrentWeatherQuery, useGetCurrentAirPolutionQuery } = weatherApi;
export default weatherApi.reducer;
