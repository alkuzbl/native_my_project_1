import {createAsyncThunk} from '@reduxjs/toolkit';
import {authAPI} from '../../dal/auth-api';
import {setInitialization} from '../slices';

export const getAuthMe = createAsyncThunk(
  'auth/getAuthMe',
  async (_, {rejectWithValue, dispatch}) => {
    try {
      const response = await authAPI.getAuthMe();
      console.log(response.data);
      if (response.data.resultCode === 0) {
        return response.data.data;
      }

      return rejectWithValue(response.data.messages[0]);
    } catch (err) {
      console.log(`error - ${err}`);
      return rejectWithValue(['Что-то пошло не так', err]);
    } finally {
      dispatch(setInitialization({isInitialized: true}));
    }
  },
);
