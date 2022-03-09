import {createSlice} from '@reduxjs/toolkit';
import {InitialStateTodolistType, TodoListType} from '../types';

const TODO_LISTS = 'todolist';

const initialStateTodolist: InitialStateTodolistType = {
  status: 'idle',
  todoLists: [] as TodoListType[],
  message: undefined,
};

const slice = createSlice({
  name: TODO_LISTS,
  initialState: initialStateTodolist,
  reducers: {},
});

export const todolistReducer = slice.reducer;
