export type StatusType = 'idle' | 'loading' | 'failed' | 'succeed';

export type FilterType = 'all' | 'active' | 'completed';

export type TodoListType = {
  id: string;
  title: string;
  filter: FilterType;
};

export type InitialStateTodolistType = {
  status: StatusType;
  todoLists: TodoListType[];
  message: string | undefined;
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
    [key: string]: TaskType;
  };
};
