import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_URL: string = import.meta.env.VITE_API_URL;

export const coinbaseAPI = createApi({
  reducerPath: 'coinbase',
  tagTypes: ['currencies', 'name'],
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  refetchOnReconnect: true,
  endpoints: () => ({}),
});
