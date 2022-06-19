import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

const initialState = {
  title: 'Dashboard',
  menuActive: 'dashboard',
  tabOrder: 'newOrder',
  tabMenu: 'allMenu',
};

const LayoutReducer = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    setTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
    setTabOrder: (state, action: PayloadAction<string>) => {
      state.tabOrder = action.payload;
    },
    setMenuActive: (state, action: PayloadAction<string>) => {
      state.menuActive = action.payload;
    },
    setTabMenu: (state, action: PayloadAction<string>) => {
      state.tabMenu = action.payload;
    },
  },
});

export const { setTitle, setTabOrder, setMenuActive, setTabMenu } =
  LayoutReducer.actions;

export default LayoutReducer.reducer;
