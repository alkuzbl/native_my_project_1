import {createAsyncThunk} from '@reduxjs/toolkit';
import {TASKS} from '../../constans';
import {tasksAPI} from '../../dal/tasks-api';
import {setStatusTask} from '../slices';

export const deleteTask = createAsyncThunk(
  `${TASKS}/deleteTask`,
  async (
    data: {todoListId: string; taskId: string},
    {rejectWithValue, dispatch},
  ) => {
    dispatch(setStatusTask({...data, taskStatus: 'loading'}));

    try {
      const response = await tasksAPI.deleteTask(data);

      if (response.data.resultCode === 0) {
        return data;
      }

      return rejectWithValue(response.data.messages[0]);
    } catch (err) {
      return rejectWithValue(['Что-то пошло не так, попробуйте еще раз', err]);
    }
  },
);
