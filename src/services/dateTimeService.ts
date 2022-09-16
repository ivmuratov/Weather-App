import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { API_KEY3 } from '../constants/api';
import DateTimeResp from '../models/DateTimeResp';
import ICoordinates from '../models/ICoordinates';

export const dateTimeApi = createApi({
  reducerPath: 'dateTimeApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.ipgeolocation.io/',
  }),
  endpoints: (build) => ({
    getDateTime: build.query<DateTimeResp, ICoordinates>({
      query: ({ lat, lon }) => ({
        url: `timezone?apiKey=${API_KEY3}`,
        params: {
          lat,
          long: lon,
        },
      }),
    }),
  }),
});

export const { useGetDateTimeQuery } = dateTimeApi;
