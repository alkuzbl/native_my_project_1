import {TasksScreenNavigatePropsType} from '../../../types';
import {FilterType} from '../../../redux/types';

export type TodolistPropsType = {
  title: string;
  todoListId: string;
  filter: FilterType;
  navigation: TasksScreenNavigatePropsType;
  openEditMenu: (title: string, todoListId: string) => void;
};
