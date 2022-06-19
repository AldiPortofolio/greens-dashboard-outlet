import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getFromStorage, setToStorage, removeStorage } from '@/app/utils/utils';
import { parseCookies } from 'nookies';

export const apiSlice = createApi({
  reducerPath: 'api', // optional
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
    prepareHeaders: (headers, { getState }) => {
      const { 'auth.AccessToken': token } = parseCookies();
      console.log('🚀 ~ file: api.ts ~ line 11 ~ token', token);
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['Menu', 'Product', 'Order'],
  endpoints: (builder) => ({}),
});

export default apiSlice.reducer;
