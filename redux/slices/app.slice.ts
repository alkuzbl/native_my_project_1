import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {InitialStateAppType, StatusType} from '../types';

const APP = 'app';
const initialStateApp: InitialStateAppType = {
  status: 'idle',
  message: undefined,
  isInitialized: false,
};

const slice = createSlice({
  name: APP,
  initialState: initialStateApp,
  reducers: {
    setInitialization: (
      state,
      action: PayloadAction<{isInitialized: boolean}>,
    ) => {
      state.isInitialized = action.payload.isInitialized;
    },
    setStatusApp: (state, action: PayloadAction<{status: StatusType}>) => {
      state.status = action.payload.status;
    },
    setMessageApp: (state, action: PayloadAction<{message: string}>) => {
      state.message = action.payload.message;
    },
  },
});

export const appReducer = slice.reducer;

export const {setStatusApp, setInitialization, setMessageApp} = slice.actions;
