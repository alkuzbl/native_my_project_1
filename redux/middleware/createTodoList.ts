import {createAsyncThunk} from '@reduxjs/toolkit';
import {setStatusTodoLists, TODO_LISTS} from '../slices/todolist.slice';
import {todolistAPI} from '../../dal/todolists-api';

export const createTodoList = createAsyncThunk(
  `${TODO_LISTS}/createTodoList`,
  async (title: string, {rejectWithValue, dispatch}) => {
    dispatch(setStatusTodoLists({status: 'loading'}));

    try {
      const response = await todolistAPI.createTodolist(title);
      if (response.data.resultCode === 0) {
        return response.data.data.item;
      }

      return rejectWithValue(response.data.messages);
    } catch (err) {
      return rejectWithValue(['Что-то пошло не так, попробуйте еще раз', err]);
    }
  },
);
