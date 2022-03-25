import {createAsyncThunk} from '@reduxjs/toolkit';
import {authAPI, userApi} from '../../dal/auth-api';
import {AuthRequestDataType, ProfileType} from '../types';
import {setStatusApp} from '../slices';
import {AppDispatch, RootState} from 'redux/store';

export const setLogin = createAsyncThunk<
  {logInData: {userId: number}; profileData: ProfileType},
  AuthRequestDataType,
  {
    state: RootState;
    dispatch: AppDispatch;
    rejectValue: string;
  }
>('auth/setLogin', async (data, {rejectWithValue, dispatch}) => {
  dispatch(setStatusApp({status: 'loading'}));

  try {
    const response = await authAPI.setLogin(data);

    if (response.data.resultCode === 0) {
      const user = await userApi.getUser(response.data.data.userId);
      return {logInData: response.data.data, profileData: user.data};
    }

    return rejectWithValue(response.data.messages[0]);
  } catch (err: any) {
    return rejectWithValue('Что то пошло не так, попробуйте еще раз');
  }
});
