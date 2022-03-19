import {createAsyncThunk} from '@reduxjs/toolkit';
import {setStatusTodoLists, TODO_LISTS} from '../slices/todolist.slice';
import {todolistAPI} from '../../dal/todolists-api';
import {AppDispatch, RootState} from 'redux/store';

export const updateTodoList = createAsyncThunk<
  {id: string; title: string},
  {id: string; title: string},
  {
    state: RootState;
    dispatch: AppDispatch;
    rejectValue: string;
  }
>(
  `${TODO_LISTS}/updateTodoList`,
  async (data: {id: string; title: string}, {rejectWithValue, dispatch}) => {
    dispatch(setStatusTodoLists({status: 'loading'}));

    try {
      const response = await todolistAPI.updateTodolist(data);

      if (response.data.resultCode === 0) {
        return data;
      }

      return rejectWithValue(response.data.messages[0]);
    } catch (err) {
      return rejectWithValue('Что-то пошло не так, попробуйте еще раз');
    }
  },
);
