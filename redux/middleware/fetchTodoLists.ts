import {createAsyncThunk} from '@reduxjs/toolkit';

import {setStatusTodoLists, TODO_LISTS} from '../slices/todolist.slice';
import {todolistAPI} from '../../dal/todolists-api';

export const fetchTodoLists = createAsyncThunk(
  `${TODO_LISTS}/fetchTodoLists`,
  async (_, {rejectWithValue, dispatch}) => {
    dispatch(setStatusTodoLists({status: 'loading'}));

    try {
      const response = await todolistAPI.fetchTodoLists();

      return response.data;
    } catch (err) {
      return rejectWithValue(['Что то пошло не так, попробуйте еще раз', err]);
    }
  },
);
