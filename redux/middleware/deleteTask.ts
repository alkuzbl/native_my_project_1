import {createAsyncThunk} from '@reduxjs/toolkit';
import {TASKS} from '../../constans';
import {tasksAPI} from '../../dal/tasks-api';
import {setStatusTask} from '../slices';
import {AppDispatch, RootState} from 'redux/store';

export const deleteTask = createAsyncThunk<
  {todoListId: string; taskId: string},
  {todoListId: string; taskId: string},
  {
    state: RootState;
    dispatch: AppDispatch;
    rejectValue: string;
  }
>(
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
      dispatch(setStatusTask({...data, taskStatus: 'failed'}));
      return rejectWithValue(response.data.messages[0]);
    } catch (err) {
      return rejectWithValue('Что-то пошло не так, попробуйте еще раз');
    }
  },
);
