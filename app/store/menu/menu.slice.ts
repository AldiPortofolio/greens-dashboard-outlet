import { createSelector, createEntityAdapter } from '@reduxjs/toolkit';
import { apiSlice } from '../api/api';

const menuAdapter = createEntityAdapter({
  selectId: (state: any) => state._id,
});

const initialState = menuAdapter.getInitialState();

export const menusApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    geMenus: builder.query({
      query: () => '/menu-template',
      transformResponse: (responseData: any) => {
        return menuAdapter.setAll(initialState, responseData.data);
      },
      providesTags: (result: any): any => [
        { type: 'Menu', id: 'LIST' },
        ...result.ids.map((id: any) => ({ type: 'Menu', id })),
      ],
    }),
    geMenusAvailable: builder.query({
      query: () => '/menu-template?onSale=1',
      transformResponse: (responseData: any) => {
        return menuAdapter.setAll(initialState, responseData.data);
      },
      providesTags: (result: any): any => [
        { type: 'Menu', id: 'LIST' },
        ...result.ids.map((id: any) => ({ type: 'Menu', id })),
      ],
    }),
    geMenusNotAvailable: builder.query({
      query: () => '/menu-template?onSale=0',
      transformResponse: (responseData: any) => {
        return menuAdapter.setAll(initialState, responseData.data);
      },
      providesTags: (result: any): any => [
        { type: 'Menu', id: 'LIST' },
        ...result.ids.map((id: any) => ({ type: 'Menu', id })),
      ],
    }),
    createMenu: builder.mutation({
      query: (initialPost) => ({
        url: `/menu-template`,
        method: 'POST',
        body: {
          ...initialPost,
        },
      }),
      invalidatesTags: [{ type: 'Menu', id: 'LIST' }],
    }),
  }),
  overrideExisting: false,
});

export const { useGeMenusQuery, useCreateMenuMutation } = menusApiSlice;

export const selectMenuResult = menusApiSlice.endpoints.geMenus.select(null);

const selectMenusData = createSelector(
  selectMenuResult,
  (menuResult) => menuResult.data // normalized state object with ids & entities
);

export const { selectAll: selectAllMenus, selectById: selectMenuById } =
  menuAdapter.getSelectors(
    (state: any) => selectMenusData(state) ?? initialState
  );

// Available
export const selectMenuAvailableResult =
  menusApiSlice.endpoints.geMenusAvailable.select(null);

const selectMenuAvailablesData = createSelector(
  selectMenuAvailableResult,
  (menuResult) => menuResult.data // normalized state object with ids & entities
);

export const {
  selectAll: selectAllMenusAvailable,
  selectById: selectMenuAvailableById,
} = menuAdapter.getSelectors(
  (state: any) => selectMenuAvailablesData(state) ?? initialState
);

// Not Available
export const selectMenuNotAvailableResult =
  menusApiSlice.endpoints.geMenusNotAvailable.select(null);

const selectMenuNotAvailablesData = createSelector(
  selectMenuNotAvailableResult,
  (menuResult) => menuResult.data // normalized state object with ids & entities
);

export const {
  selectAll: selectAllMenusNotAvailable,
  selectById: selectMenuNotAvailableById,
} = menuAdapter.getSelectors(
  (state: any) => selectMenuNotAvailablesData(state) ?? initialState
);
