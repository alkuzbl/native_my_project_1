import {createSlice} from '@reduxjs/toolkit';
import {InitialStateAuthType, ProfileType, UserType} from '../types';
import {setLogin, getAuthMe, setLogOut} from '../middleware';

const initialStateAuth: InitialStateAuthType = {
  messages: undefined,
  isAuth: false,
  user: {} as UserType,
  profileData: {} as ProfileType,
};

const slice = createSlice({
  name: 'auth',
  initialState: initialStateAuth,
  reducers: {
    clearMessages: state => {
      state.messages = undefined;
    },
  },
  extraReducers: builder => {
    builder.addCase(setLogin.fulfilled, (state, action) => {
      state.user.id = action.payload.logInData.userId;
      state.profileData = action.payload.profileData;
      state.isAuth = true;
    });
    builder.addCase(setLogin.rejected, (state, action) => {
      state.messages = action.payload;
    });
    builder.addCase(getAuthMe.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isAuth = true;
    });
    builder.addCase(getAuthMe.rejected, state => {
      state.user = {} as UserType;
      state.isAuth = false;
      state.profileData = {} as ProfileType;
    });
    builder.addCase(setLogOut.fulfilled, (state, action) => {
      state.user = {} as UserType;
      state.profileData = {} as ProfileType;
      state.messages = action.payload;
      state.isAuth = false;
    });
    builder.addCase(setLogOut.rejected, (state, action) => {
      state.messages = action.payload;
    });
  },
});

export const authReducer = slice.reducer;
export const {clearMessages} = slice.actions;
