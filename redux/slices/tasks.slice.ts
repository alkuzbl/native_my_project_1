import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {InitialStateTasksType, ModalDataTasksType, StatusType} from '../types';
import {
  createTask,
  createTodoList,
  deleteTask,
  fetchTasks,
} from '../middleware';
import {TASKS} from '../../constans';

const initialStateTasks: InitialStateTasksType = {
  status: 'idle',
  tasks: {},
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
    updateTask: (
      state,
      action: PayloadAction<{
        todoListId: string;
        taskId: string;
        updatedData: {
          title?: string;
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
        taskStatus: StatusType;
      }>,
    ) => {
      state.tasks[action.payload.todoListId] = state.tasks[
        action.payload.todoListId
      ].map(task =>
        task.id === action.payload.taskId
          ? {...task, taskStatus: action.payload.taskStatus}
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
    builder.addCase(fetchTasks.fulfilled, (state, action) => {
      state.tasks[action.payload.todoListId] = action.payload.data;
    });
    builder.addCase(fetchTasks.rejected, (state, action) => {
      // @ts-ignore
      state.message = action.payload[0];
    });
    builder.addCase(createTodoList.fulfilled, (state, action) => {
      state.tasks[action.payload.id] = [];
      console.log(state);
    });
    builder.addCase(createTask.fulfilled, (state, action) => {
      state.tasks[action.payload.todoListId].unshift(action.payload);
      state.status = 'succeed';
    });
    builder.addCase(createTask.rejected, (state, action) => {
      // @ts-ignore
      state.message = action.payload;
      state.status = 'failed';
    });
    builder.addCase(deleteTask.fulfilled, (state, action) => {
      state.tasks[action.payload.todoListId] = state.tasks[
        action.payload.todoListId
      ].filter(task => task.id !== action.payload.taskId);
    });
  },
});

export const tasksReducer = slice.reducer;

export const {
  updateTask,
  setStatusTask,
  setStatusTasks,
  setMessageTasks,
  setVisibleModalTasks,
  closeModalTasks,
} = slice.actions;
