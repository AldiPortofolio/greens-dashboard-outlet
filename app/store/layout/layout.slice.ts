import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  title: 'Dashboard',
};

const LayoutReducer = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    setTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
  },
});

export const { setTitle } = LayoutReducer.actions;
export default LayoutReducer.reducer;
