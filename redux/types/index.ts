import {TaskPriorities, TaskStatuses} from '../../dal/types';

export type StatusType = 'idle' | 'loading' | 'failed' | 'succeed';

export type FilterType = 'all' | 'active' | 'completed';

export type TodoListType = {
  id: string;
  title: string;
  filter: FilterType;
  //
  addedDate: string;
  order: number;
};

export type ModalDataTodoListType = {
  todoListId: string;
  title?: string;
};

export type ModalDataTasksType = ModalDataTodoListType & {
  taskId: string;
};

export type InitialStateTodolistType = {
  status: StatusType;
  todoLists: TodoListType[];
  message: string | undefined;
  modal: ModalType<ModalDataTodoListType>;
};

export type TaskType = {
  description: string;
  title: string;
  status: TaskStatuses;
  priority: TaskPriorities;
  startDate: string;
  deadline: string;
  id: string;
  todoListId: string;
  order: number;
  addedDate: string;
  ///
  isDone: boolean;
  taskStatus: StatusType;
};

export type InitialStateTasksType = {
  status: StatusType;
  message: string | undefined;
  tasks: {
    [key: string]: TaskType[];
  };
  modal: ModalType<ModalDataTasksType>;
};

export type InitialStateAppType = {
  status: StatusType;
  message: string | undefined;
  isInitialized: boolean;
};

export type ModalType<T> = {
  isVisible: boolean;
  modalData: T;
};

export type InitialStateAuthType = {
  messages: string | undefined;
  isAuth: boolean;
  user: UserType;
};
export type UserType = {
  id: number;
  email: string;
  login: string;
};

export type AuthRequestDataType = {
  email: string;
  password: string;
  rememberMe: boolean;
};
