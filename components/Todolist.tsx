import React, {FC} from 'react';
import {Text, TouchableOpacity} from 'react-native';

type TodolistPropsType = {
  title: string;
  todoListId: string;
};

export const Todolist: FC<TodolistPropsType> = props => {
  const {title} = props;

  return (
    <TouchableOpacity>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};
