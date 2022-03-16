import {instance} from './axios-instance';
import {ModelTaskType} from './types';

export const tasksAPI = {
  fetchTasks: (id: string, count: number, page: number) =>
    instance.get(`todo-lists/${id}/tasks/?count=${count}&page=${page}`),

  createTask: (id: string, title: string) =>
    instance.post(`todo-lists/${id}/tasks`, {
      title,
    }),

  updateTask: (todolistId: string, taskId: string, model: ModelTaskType) =>
    instance.put(`todo-lists/${todolistId}/tasks/${taskId}`, model),

  removeTask: (todolistId: string, taskId: string) =>
    instance.delete(`todo-lists/${todolistId}/tasks/${taskId}`),

  reorderTask: (todolistId: string, taskId: string, putAfterItemId: string) =>
    instance.put(`todo-lists/${todolistId}/tasks/${taskId}`, {
      putAfterItemId,
    }),
};
