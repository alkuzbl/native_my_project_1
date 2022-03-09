import {createSlice} from '@reduxjs/toolkit';

const APP = 'app';
const initialStateApp = {
  status: 'idle',
  message: undefined,
  isInitialized: false,
};

const slice = createSlice({
  name: APP,
  initialState: initialStateApp,
  reducers: {},
});

export const appReducer = slice.reducer;
