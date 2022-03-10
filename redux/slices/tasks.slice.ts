import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {InitialStateTasksType, StatusType} from '../types';
import {addTodoList} from './todolist.slice';

const TASKS = 'tasks';

const initialStateTasks: InitialStateTasksType = {
  status: 'idle',
  tasks: {
    ['11']: [
      {
        id: '1',
        task: 'Learning react-native',
        isDone: false,
        status: 'idle',
      },
      {
        id: '2',
        task: 'Learning react-native',
        isDone: false,
        status: 'idle',
      },
    ],
    ['22']: [
      {
        id: '142421',
        task: 'Learning react-native',
        isDone: false,
        status: 'idle',
      },
      {
        id: '3242134',
        task: 'Learning react-native',
        isDone: false,
        status: 'idle',
      },
    ],
  },
  message: undefined,
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
        id: new Date().getDate().toString(),
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
    setMessage: (state, action: PayloadAction<{message: string}>) => {
      state.message = action.payload.message;
    },
  },
  extraReducers: builder => {
    builder.addCase(
      addTodoList,
      (state, action: PayloadAction<{todoListId: string}>) => {
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
  setMessage,
} = slice.actions;
