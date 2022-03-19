import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {
  FilterType,
  InitialStateTodolistType,
  ModalDataTodoListType,
  StatusType,
  TodoListType,
} from '../types';
import {
  fetchTodoLists,
  createTodoList,
  updateTodoList,
  deleteTotoList,
} from '../middleware';

export const TODO_LISTS = 'todolist';

const initialStateTodolist: InitialStateTodolistType = {
  status: 'idle',
  todoLists: [] as TodoListType[],
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
    updateFilterTodoList: (
      state,
      action: PayloadAction<{
        id: string;
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
  extraReducers: builder => {
    builder.addCase(
      fetchTodoLists.fulfilled,
      (state, action: PayloadAction<TodoListType[]>) => {
        state.todoLists = action.payload.map(item => ({
          ...item,
          filter: 'all',
        }));
        state.status = 'succeed';
      },
    );
    builder.addCase(
      fetchTodoLists.rejected,
      (state, action: PayloadAction<any>) => {
        state.message = action.payload;
        state.status = 'failed';
      },
    );
    builder.addCase(createTodoList.fulfilled, (state, action) => {
      state.todoLists.unshift({...action.payload, filter: 'all'});
      state.status = 'succeed';
    });
    builder.addCase(createTodoList.rejected, (state, action) => {
      state.message = action.payload;
      state.status = 'failed';
    });
    builder.addCase(updateTodoList.fulfilled, (state, action) => {
      state.todoLists = state.todoLists.map(todoList =>
        todoList.id === action.payload.id
          ? {...todoList, ...action.payload}
          : todoList,
      );
      state.status = 'succeed';
    });
    builder.addCase(updateTodoList.rejected, (state, action) => {
      state.message = action.payload;
      state.status = 'failed';
    });
    builder.addCase(deleteTotoList.fulfilled, (state, action) => {
      state.todoLists = state.todoLists.filter(
        todoList => todoList.id !== action.payload.id,
      );
      state.status = 'succeed';
    });
    builder.addCase(deleteTotoList.rejected, (state, action) => {
      state.message = action.payload;
      state.status = 'failed';
    });
  },
});

export const todolistReducer = slice.reducer;

export const {
  setStatusTodoLists,
  updateFilterTodoList,
  setMessageTodoLists,
  setVisibleModal,
  closeModal,
} = slice.actions;
