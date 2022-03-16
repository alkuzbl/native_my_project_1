import {createAsyncThunk} from '@reduxjs/toolkit';
import {authAPI} from '../../dal/auth-api';

export const setLogOut = createAsyncThunk(
  'auth/setLogOut',
  async (_, {rejectWithValue}) => {
    try {
      const response = await authAPI.logOut();
      if (response.data.resultCode === 0) {
        return 'До скорой встречи';
      }

      return rejectWithValue(response.data.data.messages[0]);
    } catch (err) {
      return rejectWithValue(['Что то пошло нет так, попробуйте еще', err]);
    }
  },
);
