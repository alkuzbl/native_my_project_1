import {createAsyncThunk} from '@reduxjs/toolkit';
import {TASKS} from '../../constans';
import {tasksAPI} from '../../dal/tasks-api';
import {setStatusTasks} from '../../redux/slices';
import {TaskType} from 'redux/types';
import {AppDispatch, RootState} from 'redux/store';

export const fetchTasks = createAsyncThunk<
  {todoListId: string; data: TaskType[]},
  string,
  {
    state: RootState;
    dispatch: AppDispatch;
    rejectValue: string;
  }
>(`${TASKS}/fetchTasks`, async (id, {rejectWithValue, dispatch}) => {
  dispatch(setStatusTasks({status: 'loading'}));

  try {
    const response = await tasksAPI.fetchTasks(id);

    return {todoListId: id, data: response.data.items};
  } catch (err) {
    return rejectWithValue('Что-то пошло не так, попробуйте еще раз');
  }
});
