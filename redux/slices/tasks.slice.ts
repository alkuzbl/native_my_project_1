import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {
  InitialStateTasksType,
  ModalDataTasksType,
  StatusType,
  TaskType,
} from '../types';
import {addTodoList} from './todolist.slice';
import {TaskPriorities, TaskStatuses} from '../../dal/types';

const TASKS = 'tasks';

const initialStateTasks: InitialStateTasksType = {
  status: 'idle',
  tasks: {
    ['11']: [
      {
        id: '1',
        title: 'Каркас для приложения',
        isDone: true,
        taskStatus: 'idle',
        description: '',
        status: TaskStatuses.New,
        deadline: '',
        startDate: '',
        todoListId: '',
        priority: TaskPriorities.Low,
        order: 0,
        addedDate: '',
      },
      {
        id: '2',
        title: 'Познакомиться с основными принципами react-native',
        isDone: true,
        taskStatus: 'idle',
        description: '',
        status: TaskStatuses.Completed,
        deadline: '',
        startDate: '',
        todoListId: '',
        priority: TaskPriorities.Low,
        order: 0,
        addedDate: '',
      },
      {
        id: '3',
        title: 'Разобраться с react-navigate',
        isDone: true,
        taskStatus: 'idle',
        description: '',
        status: TaskStatuses.Completed,
        deadline: '',
        startDate: '',
        todoListId: '',
        priority: TaskPriorities.Low,
        order: 0,
        addedDate: '',
      },
      {
        id: '4',
        title: 'Unit тесты',
        isDone: true,
        taskStatus: 'idle',
        description: '',
        status: TaskStatuses.Completed,
        deadline: '',
        startDate: '',
        todoListId: '',
        priority: TaskPriorities.Low,
        order: 0,
        addedDate: '',
      },
      {
        id: '5',
        title: 'Поработать с LocalStorage',
        isDone: false,
        taskStatus: 'idle',
        description: '',
        status: TaskStatuses.Completed,
        deadline: '',
        startDate: '',
        todoListId: '',
        priority: TaskPriorities.Low,
        order: 0,
        addedDate: '',
      },
      {
        id: '6',
        title: 'Переписать на работу с сервером (Get, Post, Put, Delete)',
        isDone: false,
        taskStatus: 'idle',
        description: '',
        status: TaskStatuses.Completed,
        deadline: '',
        startDate: '',
        todoListId: '',
        priority: TaskPriorities.Low,
        order: 0,
        addedDate: '',
      },
      {
        id: '7',
        title: 'Сделать страницу пользователя',
        isDone: false,
        taskStatus: 'idle',
        description: '',
        status: TaskStatuses.Completed,
        deadline: '',
        startDate: '',
        todoListId: '',
        priority: TaskPriorities.Low,
        order: 0,
        addedDate: '',
      },
      {
        id: '8',
        title: 'Сделать авторизацию',
        isDone: false,
        taskStatus: 'idle',
        description: '',
        status: TaskStatuses.Completed,
        deadline: '',
        startDate: '',
        todoListId: '',
        priority: TaskPriorities.Low,
        order: 0,
        addedDate: '',
      },
      {
        id: '9',
        title: 'Поработать с куки и токеном при авторизации и работе с API',
        isDone: false,
        taskStatus: 'idle',
        description: '',
        status: TaskStatuses.Completed,
        deadline: '',
        startDate: '',
        todoListId: '',
        priority: TaskPriorities.Low,
        order: 0,
        addedDate: '',
      },
      {
        id: '10',
        title: 'Тестирование thunk (mock)',
        isDone: false,
        taskStatus: 'idle',
        description: '',
        status: TaskStatuses.Completed,
        deadline: '',
        startDate: '',
        todoListId: '',
        priority: TaskPriorities.Low,
        order: 0,
        addedDate: '',
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
      const task: TaskType = {
        id: new Date().getTime().toString(),
        title: action.payload.task,
        isDone: false,
        taskStatus: 'idle' as StatusType,
        description: '',
        status: TaskStatuses.Completed,
        deadline: '',
        startDate: '',
        todoListId: '',
        priority: TaskPriorities.Low,
        order: 0,
        addedDate: '',
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
