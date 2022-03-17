import {instance} from './axios-instance';
import {DataAPIType, ResponseAPIType} from './types';

export const todolistAPI = {
  fetchTodoLists: () => instance.get('todo-lists'),

  createTodolist: (title: string) =>
    instance.post<ResponseAPIType<DataAPIType>>('todo-lists', {title}),

  deleteTodolist: (id: string) =>
    instance.delete<ResponseAPIType<{}>>(`todo-lists/${id}`),

  updateTodolist: (data: {id: string; title: string}) =>
    instance.put<ResponseAPIType<{}>>(`todo-lists/${data.id}`, {
      title: data.title,
    }),

  reorderTodolist: (id: string, putAfterItemId: string) =>
    instance.put<ResponseAPIType<{}>>(`todo-lists/${id}/reorder`, {
      putAfterItemId,
    }),
};
