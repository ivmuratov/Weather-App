import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { API_KEY } from '../constants/api';
import { AirPollutionResp } from '../types/AirPollutionResp';
import { CoordinatesResp } from '../types/CoordinatesResp';
import { IAirPollution } from '../types/IAirPollution';
import { ICoordinates } from '../types/ICoordinates';

export const openWeatherMapApi = createApi({
  reducerPath: 'openWeatherMapApi',
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
    getCurrentAirPolution: build.query<IAirPollution, ICoordinates>({
      query: ({ lat, lon }) => ({
        url: `data/2.5/air_pollution?&appid=${API_KEY}`,
        params: {
          lat,
          lon,
        },
      }),
      transformResponse: (response: AirPollutionResp) => {
        return response.list[0];
      },
    }),
  }),
});

export const { useGetCoordQuery, useGetCurrentAirPolutionQuery } = openWeatherMapApi;
