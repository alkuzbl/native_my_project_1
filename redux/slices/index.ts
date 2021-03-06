export {
  todolistReducer,
  setMessageTodoLists,
  setStatusTodoLists,
  updateFilterTodoList,
  setVisibleModal,
  closeModal,
} from './todolist.slice';

export {
  tasksReducer,
  removeTask,
  setMessageTasks,
  setStatusTask,
  setStatusTasks,
  updateTask,
  addTask,
  setVisibleModalTasks,
  closeModalTasks,
} from './tasks.slice';

export {
  appReducer,
  setInitialization,
  setStatusApp,
  setMessageApp,
} from './app.slice';

export {authReducer} from './auth-slice';
