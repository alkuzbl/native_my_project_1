import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {FilterType, InitialStateTodolistType, StatusType} from '../types';

const TODO_LISTS = 'todolist';

const initialStateTodolist: InitialStateTodolistType = {
  status: 'idle',
  todoLists: [
    {id: '11', title: 'Learn', filter: 'all'},
    {id: '22', title: 'Test', filter: 'all'},
  ],
  message: undefined,
};

const slice = createSlice({
  name: TODO_LISTS,
  initialState: initialStateTodolist,
  reducers: {
    addTodoList: (state, action) => {
      state.todoLists.push(action.payload);
    },
    removeTodoList: (state, action: PayloadAction<{todoListId: string}>) => {
      state.todoLists = state.todoLists.filter(
        todoList => todoList.id !== action.payload.todoListId,
      );
    },
    updateTodoList: (
      state,
      action: PayloadAction<{
        todoListId: string;
        title?: string;
        filter?: FilterType;
      }>,
    ) => {
      state.todoLists = state.todoLists.map(todoList =>
        todoList.id === action.payload.todoListId
          ? {...todoList, ...action.payload}
          : todoList,
      );
    },
    setStatus: (state, action: PayloadAction<{status: StatusType}>) => {
      state.status = action.payload.status;
    },
    setMessage: (state, action: PayloadAction<{message: string}>) => {
      state.message = action.payload.message;
    },
  },
});

export const todolistReducer = slice.reducer;

export const {
  setStatus,
  addTodoList,
  updateTodoList,
  removeTodoList,
  setMessage,
} = slice.actions;
