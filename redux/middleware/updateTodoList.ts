import {createAsyncThunk} from '@reduxjs/toolkit';
import {setStatusTodoLists, TODO_LISTS} from '../slices/todolist.slice';
import {todolistAPI} from '../../dal/todolists-api';

export const updateTodoList = createAsyncThunk(
  `${TODO_LISTS}/updateTodoList`,
  async (data: {id: string; title: string}, {rejectWithValue, dispatch}) => {
    dispatch(setStatusTodoLists({status: 'loading'}));

    try {
      const response = await todolistAPI.updateTodolist(data);

      if (response.data.resultCode === 0) {
        return data;
      }

      return rejectWithValue(response.data.messages);
    } catch (err) {
      return rejectWithValue(['Что-то пошло не так, попробуйте еще раз', err]);
    }
  },
);
