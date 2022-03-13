import React, {FC} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {TodolistPropsType} from './types';

export const Todolist: FC<TodolistPropsType> = props => {
  const {title, navigation, todoListId, openEditMenu} = props;

  const handlePress = () => {
    navigation.navigate('Tasks', {todoListId, title});
  };

  const handleLongPress = () => {
    openEditMenu(title, todoListId);
    //navigation.navigate('Modal');
    console.log('Open editing todolist');
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={styles.box}
      onLongPress={handleLongPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  box: {
    flex: 1,
    backgroundColor: '#cc7c3c',
    marginBottom: 10,
    marginHorizontal: 5,
    borderRadius: 8,
  },
  text: {
    fontSize: 22,
    fontWeight: '600',
    color: 'rgba(12,10,3,0.58)',
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
});
