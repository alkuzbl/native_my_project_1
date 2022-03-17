import {createAsyncThunk} from '@reduxjs/toolkit';
import {TASKS} from '../../constans';
import {tasksAPI} from '../../dal/tasks-api';
import {setStatusTasks} from '../../redux/slices';

export const fetchTasks = createAsyncThunk(
  `${TASKS}/fetchTasks`,
  async (id: string, {rejectWithValue, dispatch}) => {
    dispatch(setStatusTasks({status: 'loading'}));

    try {
      const response = await tasksAPI.fetchTasks(id);

      return {todoListId: id, data: response.data.items};
    } catch (err) {
      return rejectWithValue(['Что-то пошло не так, попробуйте еще раз', err]);
    }
  },
);
