import {createAsyncThunk} from '@reduxjs/toolkit';
import {authAPI} from '../../dal/auth-api';
import {AuthRequestDataType} from '../types';
import {setStatusApp} from '../slices';

export const setLogin = createAsyncThunk(
  'auth/setLogin',
  async (data: AuthRequestDataType, {rejectWithValue, dispatch}) => {
    dispatch(setStatusApp({status: 'loading'}));

    try {
      const response = await authAPI.setLogin(data);

      if (response.data.resultCode === 0) {
        return response.data.data;
      }

      return rejectWithValue(response.data.messages[0]);
    } catch (err: any) {
      return rejectWithValue(err);
    }
  },
);
