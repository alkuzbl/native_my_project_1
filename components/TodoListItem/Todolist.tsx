import React, {FC} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {TodolistPropsType} from './types';

export const Todolist: FC<TodolistPropsType> = props => {
  const {title, navigation, todoListId} = props;

  const handlePress = () => {
    navigation.navigate('Tasks', {todoListId, title});
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};
