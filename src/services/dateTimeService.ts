import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { ApiKey, ApiUrl } from '../constants/api';
import DateTimeResp from '../models/DateTimeResp';
import ICoordinates from '../models/ICoordinates';

export const dateTimeApi = createApi({
  reducerPath: 'dateTimeApi',
  baseQuery: fetchBaseQuery({
    baseUrl: ApiUrl.DATE_TIME,
  }),
  endpoints: (build) => ({
    getDateTime: build.query<DateTimeResp, ICoordinates>({
      query: ({ lat, lon }) => ({
        url: `timezone?apiKey=${ApiKey.DATE_TIME}`,
        params: {
          lat,
          long: lon,
        },
      }),
    }),
  }),
});

export const { useGetDateTimeQuery } = dateTimeApi;
