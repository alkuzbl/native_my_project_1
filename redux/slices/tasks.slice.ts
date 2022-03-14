import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {InitialStateTasksType, ModalDataTasksType, StatusType} from '../types';
import {addTodoList} from './todolist.slice';

const TASKS = 'tasks';

const initialStateTasks: InitialStateTasksType = {
  status: 'idle',
  tasks: {
    ['11']: [
      {
        id: '1',
        task: 'Каркас для приложения',
        isDone: true,
        status: 'idle',
      },
      {
        id: '2',
        task: 'Познакомиться с основными принципами react-native',
        isDone: true,
        status: 'idle',
      },
      {
        id: '3',
        task: 'Разобраться с react-navigate',
        isDone: true,
        status: 'idle',
      },
      {
        id: '4',
        task: 'Unit тесты',
        isDone: true,
        status: 'idle',
      },
      {
        id: '5',
        task: 'Поработать с LocalStorage',
        isDone: false,
        status: 'idle',
      },
      {
        id: '6',
        task: 'Переписать на работу с сервером (Get, Post, Put, Delete)',
        isDone: false,
        status: 'idle',
      },
      {
        id: '7',
        task: 'Сделать страницу пользователя',
        isDone: false,
        status: 'idle',
      },
      {
        id: '8',
        task: 'Сделать авторизацию',
        isDone: false,
        status: 'idle',
      },
      {
        id: '9',
        task: 'Поработать с куки и токеном при авторизации и работе с API',
        isDone: false,
        status: 'idle',
      },
      {
        id: '10',
        task: 'Тестирование thunk (mock)',
        isDone: false,
        status: 'idle',
      },
    ],
  },
  message: undefined,
  modal: {
    isVisible: false,
    modalData: {} as ModalDataTasksType,
  },
};

const slice = createSlice({
  name: TASKS,
  initialState: initialStateTasks,
  reducers: {
    addTask: (
      state,
      action: PayloadAction<{todoListId: string; task: string}>,
    ) => {
      const task = {
        id: new Date().getTime().toString(),
        task: action.payload.task,
        isDone: false,
        status: 'idle' as StatusType,
      };
      state.tasks[action.payload.todoListId].unshift(task);
    },
    removeTask: (
      state,
      action: PayloadAction<{todoListId: string; taskId: string}>,
    ) => {
      state.tasks[action.payload.todoListId] = state.tasks[
        action.payload.todoListId
      ].filter(task => task.id !== action.payload.taskId);
    },
    updateTask: (
      state,
      action: PayloadAction<{
        todoListId: string;
        taskId: string;
        updatedData: {
          task?: string;
          isDone?: boolean;
        };
      }>,
    ) => {
      state.tasks[action.payload.todoListId] = state.tasks[
        action.payload.todoListId
      ].map(task =>
        task.id === action.payload.taskId
          ? {...task, ...action.payload.updatedData}
          : task,
      );
    },
    setStatusTask: (
      state,
      action: PayloadAction<{
        todoListId: string;
        taskId: string;
        status: StatusType;
      }>,
    ) => {
      state.tasks[action.payload.todoListId] = state.tasks[
        action.payload.todoListId
      ].map(task =>
        task.id === action.payload.taskId
          ? {...task, status: action.payload.status}
          : task,
      );
    },
    setStatusTasks: (state, action: PayloadAction<{status: StatusType}>) => {
      state.status = action.payload.status;
    },
    setMessageTasks: (state, action: PayloadAction<{message: string}>) => {
      state.message = action.payload.message;
    },
    setVisibleModalTasks: (
      state,
      action: PayloadAction<ModalDataTasksType>,
    ) => {
      state.modal = {isVisible: true, modalData: {...action.payload}};
    },
    closeModalTasks: state => {
      state.modal = {isVisible: false, modalData: {} as ModalDataTasksType};
    },
  },
  extraReducers: builder => {
    builder.addCase(
      addTodoList,
      (state, action: PayloadAction<{todoListId: string; title: string}>) => {
        state.tasks[action.payload.todoListId] = [];
      },
    );
  },
});

export const tasksReducer = slice.reducer;

export const {
  addTask,
  removeTask,
  updateTask,
  setStatusTask,
  setStatusTasks,
  setMessageTasks,
  setVisibleModalTasks,
  closeModalTasks,
} = slice.actions;
