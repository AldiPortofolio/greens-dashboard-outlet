import {
  Action,
  AnyAction,
  combineReducers,
  configureStore,
  ThunkAction,
} from '@reduxjs/toolkit';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import authSlice from './auth/auth.slice';
import { apiSlice } from './api/api';
import layoutSlice from './layout/layout.slice';
import createOrderSlice from './order/create-order.slice';

const combinedReducer = combineReducers({
  auth: authSlice,
  [apiSlice.reducerPath]: apiSlice.reducer,
  layout: layoutSlice,
  createOrder: createOrderSlice,
});

const reducer: typeof combinedReducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    return nextState;
  } else {
    return combinedReducer(state, action);
  }
};

export const makeStore = () =>
  configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }).concat(apiSlice.middleware),
  });

type Store = ReturnType<typeof makeStore>;

export type AppDispatch = Store['dispatch'];
export type RootState = ReturnType<Store['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const wrapper = createWrapper(makeStore, { debug: false });
