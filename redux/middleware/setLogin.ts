import {createAsyncThunk} from '@reduxjs/toolkit';
import {authAPI} from '../../dal/auth-api';
import {AuthRequestDataType} from '../types';

export const setLogin = createAsyncThunk(
  'auth/setLogin',
  async (data: AuthRequestDataType, {rejectWithValue}) => {
    try {
      const response = await authAPI.setLogin(data);
      console.log(response.data);
      if (response.data.resultCode === 0) {
        return response.data.data;
      }
      return rejectWithValue(response.data.messages[0]);
    } catch (err: any) {
      return rejectWithValue(err);
    }
  },
);
