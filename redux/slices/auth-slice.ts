import {createSlice} from '@reduxjs/toolkit';
import {InitialStateAuthType, UserType} from '../types';
import {setLogin} from '../middleware/setLogin';
import {getAuthMe} from '../middleware/getAuthMe';
import {setLogOut} from '../middleware/setLogOut';

const initialStateAuth: InitialStateAuthType = {
  messages: undefined,
  isAuth: false,
  user: {} as UserType,
};

const slice = createSlice({
  name: 'auth',
  initialState: initialStateAuth,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(setLogin.fulfilled, (state, action) => {
      state.user.id = action.payload.userId;
      state.isAuth = true;
    });
    builder.addCase(getAuthMe.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isAuth = true;
    });
    builder.addCase(getAuthMe.rejected, (state, action) => {
      state.user = {} as UserType;
      // @ts-ignore
      state.messages = action.payload;
      state.isAuth = false;
    });
    builder.addCase(setLogOut.fulfilled, (state, action) => {
      state.user = {} as UserType;
      // @ts-ignore
      state.messages = action.payload;
      state.isAuth = false;
    });
    builder.addCase(setLogOut.rejected, (state, action) => {
      // @ts-ignore
      state.messages = action.payload;
    });
  },
});

export const authReducer = slice.reducer;

export const {} = slice.actions;
