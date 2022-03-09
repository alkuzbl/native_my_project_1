import {createSlice} from '@reduxjs/toolkit';
import {InitialStateTasksType} from '../types';

const TASKS = 'tasks';

const initialStateTasks: InitialStateTasksType = {
  status: 'idle',
  tasks: {
    ['11']: {
      id: '1',
      task: 'Learning react-native',
      isDone: false,
      status: 'idle',
    },
    ['22']: {
      id: '2',
      task: 'Learning react-native',
      isDone: false,
      status: 'idle',
    },
  },
  message: undefined,
};

const slice = createSlice({
  name: TASKS,
  initialState: initialStateTasks,
  reducers: {},
});

export const tasksReducer = slice.reducer;
