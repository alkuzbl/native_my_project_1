import {instance} from './axios-instance';
import {ModelTaskType, ResponseAPIType, ResponseTaskAPIType} from './types';
import {TaskType} from '../redux/types';

export const tasksAPI = {
  fetchTasks: (id: string) =>
    instance.get<ResponseTaskAPIType>(`todo-lists/${id}/tasks/`),

  createTask: (data: {id: string; title: string}) =>
    instance.post<ResponseAPIType<{item: TaskType}>>(
      `todo-lists/${data.id}/tasks`,
      {
        title: data.title,
      },
    ),

  updateTask: (todoListId: string, taskId: string, model: ModelTaskType) =>
    instance.put<ResponseAPIType<{item: TaskType}>>(
      `todo-lists/${todoListId}/tasks/${taskId}`,
      model,
    ),

  deleteTask: (data: {todoListId: string; taskId: string}) =>
    instance.delete<ResponseAPIType<{}>>(
      `todo-lists/${data.todoListId}/tasks/${data.taskId}`,
    ),

  reorderTask: (todolistId: string, taskId: string, putAfterItemId: string) =>
    instance.put<ResponseAPIType<{}>>(
      `todo-lists/${todolistId}/tasks/${taskId}`,
      {
        putAfterItemId,
      },
    ),
};
