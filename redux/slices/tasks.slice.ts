import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {InitialStateTasksType, ModalDataTasksType, StatusType} from '../types';
import {
  createTask,
  createTodoList,
  deleteTask,
  fetchTasks,
  updateTask,
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
    builder.addCase(createTodoList.fulfilled, (state, action) => {
      state.tasks[action.payload.id] = [];
      state.status = 'succeed';
    });

    builder.addCase(fetchTasks.fulfilled, (state, action) => {
      state.tasks[action.payload.todoListId] = action.payload.data;
      state.status = 'succeed';
    });
    builder.addCase(fetchTasks.rejected, (state, action) => {
      state.message = action.payload;
      state.status = 'succeed';
    });

    builder.addCase(createTask.fulfilled, (state, action) => {
      state.tasks[action.payload.todoListId].unshift(action.payload);
      state.status = 'succeed';
    });
    builder.addCase(createTask.rejected, (state, action) => {
      state.message = action.payload;
      state.status = 'failed';
    });

    builder.addCase(deleteTask.fulfilled, (state, action) => {
      state.tasks[action.payload.todoListId] = state.tasks[
        action.payload.todoListId
      ].filter(task => task.id !== action.payload.taskId);
    });
    builder.addCase(deleteTask.rejected, (state, action) => {
      state.message = action.payload;
    });

    builder.addCase(updateTask.fulfilled, (state, action) => {
      state.tasks[action.payload.todoListId] = state.tasks[
        action.payload.todoListId
      ].map(task =>
        task.id === action.payload.id ? {...task, ...action.payload} : task,
      );
    });
    builder.addCase(updateTask.rejected, (state, action) => {
      state.message = action.payload;
    });
  },
});

export const tasksReducer = slice.reducer;

export const {
  setStatusTask,
  setStatusTasks,
  setMessageTasks,
  setVisibleModalTasks,
  closeModalTasks,
} = slice.actions;
