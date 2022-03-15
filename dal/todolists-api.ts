import {instance} from './axios-instance';

export const todolistAPI = {
  getTodolists: () => instance.get('todo-lists'),

  createTodolist: (title: string) => instance.post('todo-lists', {title}),

  deleteTodolist: (id: string) => instance.delete(`todo-lists/${id}`),

  updateTodolist: (id: string, title: string) =>
    instance.put(`todo-lists/${id}`, {title}),

  reorderTodolist: (id: string, putAfterItemId: string) =>
    instance.put(`todo-lists/${id}/reorder`, {
      putAfterItemId,
    }),
};
