import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { ApiKey, ApiUrl } from '../constants/api';
import AirPollutionResp from '../models/AirPollutionResp';
import CoordinatesResp from '../models/CoordinatesResp';
import IAirPollution from '../models/IAirPollution';
import ICoordinates from '../models/ICoordinates';

export const openWeatherMapApi = createApi({
  reducerPath: 'openWeatherMapApi',
  baseQuery: fetchBaseQuery({
    baseUrl: ApiUrl.OPEN_WEATHER_MAP,
  }),
  endpoints: (build) => ({
    getCoord: build.query<ICoordinates, string>({
      query: (city) => ({
        url: `geo/1.0/direct?&appid=${ApiKey.OPEN_WEATHER_MAP}`,
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
        url: `data/2.5/air_pollution?&appid=${ApiKey.OPEN_WEATHER_MAP}`,
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
