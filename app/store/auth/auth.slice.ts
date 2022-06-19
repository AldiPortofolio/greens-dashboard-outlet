import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '@/app/lib/axios';
import { getFromStorage, setToStorage, removeStorage } from '@/app/utils/utils';
import { setCookie, destroyCookie } from 'nookies';

// Get user from localStorage
const user = getFromStorage('user');

const initialState = {
  user: user || null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

// Login user
export const login = createAsyncThunk(
  'auth/login',
  async (payload: any, thunkAPI) => {
    try {
      const response = await axios.post('/authentication', payload);
      if (response.data.accessToken) {
        setCookie(null, 'auth.AccessToken', response.data.accessToken, {
          maxAge: response?.data?.authentication?.payload.exp,
          path: '/',
        });
        setToStorage('user', JSON.stringify(response.data.user));
      }
      return response;
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async () => {
  destroyCookie(null, 'auth.AccessToken', {
    path: '/',
  });
  await removeStorage('user');
});

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload as any;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as any;
        state.user = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
      });
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
