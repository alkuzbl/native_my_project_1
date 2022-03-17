import {createAsyncThunk} from '@reduxjs/toolkit';
import {TASKS} from '../../constans';
import {tasksAPI} from '../../dal/tasks-api';
import {setStatusTasks} from '../slices';

export const createTask = createAsyncThunk(
  `${TASKS}/createTask`,
  async (data: {id: string; title: string}, {rejectWithValue, dispatch}) => {
    dispatch(setStatusTasks({status: 'loading'}));

    try {
      const response = await tasksAPI.createTask(data);
      if (response.data.resultCode === 0) {
        return response.data.data.item;
      }

      return rejectWithValue(response.data.messages[0]);
    } catch (err) {
      return rejectWithValue(['Что то пошло не так, попробуйте еще раз', err]);
    }
  },
);
