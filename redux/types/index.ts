export type StatusType = 'idle' | 'loading' | 'failed' | 'succeed';

export type FilterType = 'all' | 'active' | 'completed';

export type TodoListType = {
  id: string;
  title: string;
  filter: FilterType;
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
  id: string;
  task: string;
  isDone: boolean;
  status: StatusType;
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
