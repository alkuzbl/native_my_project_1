import React, {FC} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {TodolistPropsType} from './types';

export const Todolist: FC<TodolistPropsType> = props => {
  const {title, navigation, todoListId} = props;

  const handlePress = () => {
    navigation.navigate('Tasks', {todoListId, title});
  };

  const openEditingTodoList = () => {
    navigation.navigate('Modal');
    console.log('Open editing todolist');
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={styles.box}
      onLongPress={openEditingTodoList}>
      <Text style={styles.content}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  box: {
    flex: 1,
  },
  content: {
    fontSize: 22,
    color: '#e7e4e4',
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderBottomWidth: 2,
    borderColor: '#c0bfbf',
  },
});
