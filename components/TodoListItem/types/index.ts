import {TasksScreenNavigatePropsType} from '../../../types';

export type TodolistPropsType = {
  title: string;
  todoListId: string;
  navigation: TasksScreenNavigatePropsType;
  openEditMenu: (title: string, todoListId: string) => void;
};
