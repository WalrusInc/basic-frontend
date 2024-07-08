// src/features/auth/authSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: !!localStorage.getItem('token'),
  user: null,
  token: null,
};

const userDetailsSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
      state.user = action.payload;
      state.token = action.payload.token;
      localStorage.setItem('token', action.payload.token);
    },
    logout(state) {
      state.isLoggedIn = false;
      state.user = null;
      state.token = null;
      localStorage.removeItem('token');
    },
  },
});

export const { login, logout } = userDetailsSlice.actions;
export default userDetailsSlice.reducer;
