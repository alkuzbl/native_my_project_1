import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {
  FilterType,
  InitialStateTodolistType,
  ModalDataTodoListType,
  StatusType,
  TodoListType,
} from '../types';

const TODO_LISTS = 'todolist';

const initialStateTodolist: InitialStateTodolistType = {
  status: 'idle',
  todoLists: [
    {id: '11', title: 'Learn', filter: 'all'},
    {id: '22', title: 'Test', filter: 'all'},
  ],
  message: undefined,
  modal: {
    isVisible: false,
    modalData: {} as ModalDataTodoListType,
  },
};

const slice = createSlice({
  name: TODO_LISTS,
  initialState: initialStateTodolist,
  reducers: {
    addTodoList: (
      state,
      action: PayloadAction<{todoListId: string; title: string}>,
    ) => {
      const todoList: TodoListType = {
        id: action.payload.todoListId,
        title: action.payload.title,
        filter: 'all',
      };
      state.todoLists.unshift(todoList);
    },
    removeTodoList: (state, action: PayloadAction<{todoListId: string}>) => {
      state.todoLists = state.todoLists.filter(
        todoList => todoList.id !== action.payload.todoListId,
      );
    },
    updateTodoList: (
      state,
      action: PayloadAction<{
        id: string;
        title?: string;
        filter?: FilterType;
      }>,
    ) => {
      state.todoLists = state.todoLists.map(todoList =>
        todoList.id === action.payload.id
          ? {...todoList, ...action.payload}
          : todoList,
      );
    },
    setStatusTodoLists: (
      state,
      action: PayloadAction<{status: StatusType}>,
    ) => {
      state.status = action.payload.status;
    },
    setMessageTodoLists: (state, action: PayloadAction<{message: string}>) => {
      state.message = action.payload.message;
    },
    setVisibleModal: (state, action: PayloadAction<ModalDataTodoListType>) => {
      state.modal = {isVisible: true, modalData: {...action.payload}};
    },
    closeModal: state => {
      state.modal = {isVisible: false, modalData: {} as ModalDataTodoListType};
    },
  },
});

export const todolistReducer = slice.reducer;

export const {
  setStatusTodoLists,
  addTodoList,
  updateTodoList,
  removeTodoList,
  setMessageTodoLists,
  setVisibleModal,
  closeModal,
} = slice.actions;
