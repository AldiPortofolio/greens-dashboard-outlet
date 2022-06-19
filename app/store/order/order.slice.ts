import { createSelector, createEntityAdapter } from '@reduxjs/toolkit';
import { apiSlice } from '../api/api';

const orderAdapter = createEntityAdapter({
  selectId: (state: any) => state._id,
});

const initialState = orderAdapter.getInitialState();

export const orderApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    geOrdersPending: builder.query({
      query: () => ({ url: `/order?status=PENDING` }),
      transformResponse: (responseData: any, meta, arg) => {
        return orderAdapter.setAll(initialState, responseData.data);
      },
      providesTags: (result: any): any => [
        { type: 'Order', id: 'LIST' },
        ...result.ids.map((id: any) => ({ type: 'Order', id })),
      ],
    }),
    geOrdersProcess: builder.query({
      query: () => ({ url: `/order?status=ACCEPTED` }),
      transformResponse: (responseData: any, meta, arg) => {
        return orderAdapter.setAll(initialState, responseData.data);
      },
      providesTags: (result: any): any => [
        { type: 'Order', id: 'LIST' },
        ...result.ids.map((id: any) => ({ type: 'Order', id })),
      ],
    }),
    geOrdersCompleted: builder.query({
      query: () => ({ url: `/order?status=DONE` }),
      transformResponse: (responseData: any, meta, arg) => {
        return orderAdapter.setAll(initialState, responseData.data);
      },
      providesTags: (result: any): any => [
        { type: 'Order', id: 'LIST' },
        ...result.ids.map((id: any) => ({ type: 'Order', id })),
      ],
    }),
    geOrdersRejected: builder.query({
      query: () => ({ url: `/order?status=REJECTED` }),
      transformResponse: (responseData: any, meta, arg) => {
        return orderAdapter.setAll(initialState, responseData.data);
      },
      providesTags: (result: any): any => [
        { type: 'Order', id: 'LIST' },
        ...result.ids.map((id: any) => ({ type: 'Order', id })),
      ],
    }),
    createOrder: builder.mutation({
      query: (initialPost) => ({
        url: `/order`,
        method: 'POST',
        body: {
          ...initialPost,
        },
      }),
      invalidatesTags: [{ type: 'Order', id: 'LIST' }],
    }),
    updateStateOrder: builder.mutation({
      query: ({ id, payload }) => ({
        url: `/order/${id}`,
        method: 'PATCH',
        body: {
          ...payload,
        },
      }),
      // invalidatesTags: (result, error, arg) => [{ type: 'User', id: arg.id }],
      invalidatesTags: [{ type: 'Order', id: 'LIST' }],
    }),
    updateItemSetProduct: builder.mutation({
      query: ({ id, payload }) => ({
        url: `/order-item/${id}`,
        method: 'PATCH',
        body: {
          ...payload,
        },
      }),
      // invalidatesTags: (result, error, arg) => [{ type: 'User', id: arg.id }],
      invalidatesTags: [{ type: 'Order', id: 'LIST' }],
    }),
  }),
  overrideExisting: true,
});

export const {
  useCreateOrderMutation,
  useGeOrdersPendingQuery,
  useUpdateStateOrderMutation,
  useUpdateItemSetProductMutation,
} = orderApiSlice;

//New Order
export const selectOrderResult =
  orderApiSlice.endpoints.geOrdersPending.select('');
const selectOrdersData = createSelector(
  selectOrderResult,
  (orderResult) => orderResult.data // normalized state object with ids & entities
);
export const { selectAll: selectAllOrders, selectById: selectOrdersById } =
  orderAdapter.getSelectors(
    (state: any) => selectOrdersData(state) ?? initialState
  );

//Process Order
export const selectOrderProcesResult =
  orderApiSlice.endpoints.geOrdersProcess.select('');
const selectProcesssData = createSelector(
  selectOrderProcesResult,
  (orderResult) => orderResult.data // normalized state object with ids & entities
);
export const {
  selectAll: selectAllOrdersProcess,
  selectById: selectOrdersProcessById,
} = orderAdapter.getSelectors(
  (state: any) => selectProcesssData(state) ?? initialState
);

// Completed Order
export const selectOrderCompletedResult =
  orderApiSlice.endpoints.geOrdersCompleted.select('');
const selectCompletedData = createSelector(
  selectOrderCompletedResult,
  (orderResult) => orderResult.data // normalized state object with ids & entities
);
export const {
  selectAll: selectAllOrdersCompleted,
  selectById: selectOrdersCompletedById,
} = orderAdapter.getSelectors(
  (state: any) => selectCompletedData(state) ?? initialState
);

// Rejected Order
export const selectOrderRejectedResult =
  orderApiSlice.endpoints.geOrdersRejected.select('');
const selectRejectedData = createSelector(
  selectOrderRejectedResult,
  (orderResult) => orderResult.data // normalized state object with ids & entities
);
export const {
  selectAll: selectAllOrdersRejected,
  selectById: selectOrdersRejectedById,
} = orderAdapter.getSelectors(
  (state: any) => selectRejectedData(state) ?? initialState
);
