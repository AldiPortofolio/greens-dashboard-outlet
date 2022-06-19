import {
  createSelector,
  createEntityAdapter,
  EntityState,
  CombinedState,
} from '@reduxjs/toolkit';
import { apiSlice } from '../api/api';

const productAdapter = createEntityAdapter({
  selectId: (state: any) => state._id,
});

const initialState = productAdapter.getInitialState();

export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    geProducts: builder.query({
      query: (arg: string) => `/product${arg}`,
      transformResponse: (responseData: any) => {
        return productAdapter.setAll(initialState, responseData.data);
      },
      providesTags: (result: any): any => [
        { type: 'Product', id: 'LIST' },
        ...result.ids.map((id: any) => ({ type: 'Product', id })),
      ],
    }),
  }),
  overrideExisting: true,
});

export const { useGeProductsQuery } = productsApiSlice;

export const selectProductResult =
  productsApiSlice.endpoints.geProducts.select('');

const selectProductsData = createSelector(
  selectProductResult,
  (productResult) => productResult.data // normalized state object with ids & entities
);

export const { selectAll: selectAllProducts, selectById: selectProductById } =
  productAdapter.getSelectors(
    (state: any) => selectProductsData(state) ?? initialState
  );
