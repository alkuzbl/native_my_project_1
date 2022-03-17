import {createAsyncThunk} from '@reduxjs/toolkit';
import {setStatusTodoLists, TODO_LISTS} from '../slices/todolist.slice';
import {todolistAPI} from '../../dal/todolists-api';

export const deleteTotoList = createAsyncThunk(
  `${TODO_LISTS}/deleteTodoList`,
  async (id: string, {rejectWithValue, dispatch}) => {
    dispatch(setStatusTodoLists({status: 'loading'}));

    try {
      const response = await todolistAPI.deleteTodolist(id);
      if (response.data.resultCode === 0) {
        return {id};
      }

      return rejectWithValue(response.data.messages);
    } catch (err) {
      return rejectWithValue(['Что то пошло не так, попробуйте еще раз', err]);
    }
  },
);
