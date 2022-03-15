import {TaskType, TodoListType} from '../../redux/types';

export type DataAPIType = {
  item: TodoListType;
};

export type ResponseAPIType<D> = {
  resultCode: number;
  messages: string[];
  data: D;
};

export type ModelTaskType = {
  title: string;
  description: string;
  status: number;
  priority: number;
  startDate: string;
  deadline: string;
};

export type ResponseTaskAPIType = {
  items: TaskType[];
  totalCount: number;
  error: string | null;
};

export enum TaskStatuses {
  New,
  InProgress,
  Completed,
  Draft,
}

export enum TaskPriorities {
  Low,
  Middle,
  Hi,
  Urgently,
  Later,
}
