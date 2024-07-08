// src/store.js

import { configureStore } from '@reduxjs/toolkit';
import userDetailsSlice from './slices/userDetailsSlice';

const userDetailsStore = configureStore({
  reducer: {
    auth: userDetailsSlice,
  },
});

export default userDetailsStore;
