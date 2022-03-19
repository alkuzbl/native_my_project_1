import {createAsyncThunk} from '@reduxjs/toolkit';
import {setStatusTodoLists, TODO_LISTS} from '../slices/todolist.slice';
import {todolistAPI} from '../../dal/todolists-api';
import {TodoListType} from 'redux/types';
import {AppDispatch, RootState} from 'redux/store';

export const createTodoList = createAsyncThunk<
  TodoListType,
  string,
  {
    state: RootState;
    dispatch: AppDispatch;
    rejectValue: string;
  }
>(
  `${TODO_LISTS}/createTodoList`,
  async (title: string, {rejectWithValue, dispatch}) => {
    dispatch(setStatusTodoLists({status: 'loading'}));

    try {
      const response = await todolistAPI.createTodolist(title);
      if (response.data.resultCode === 0) {
        return response.data.data.item;
      }

      return rejectWithValue(response.data.messages[0]);
    } catch (err) {
      return rejectWithValue('Что-то пошло не так, попробуйте еще раз');
    }
  },
);
