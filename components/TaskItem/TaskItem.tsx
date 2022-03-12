import React, {FC} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {TaskItemPropsType} from './types';

export const TaskItem: FC<TaskItemPropsType> = props => {
  const {title, isDone, id} = props;

  const handleLongPress = () => {
    console.log(`isDone: ${isDone}, id: ${id}`);
  };

  return (
    <TouchableOpacity style={styles.box} onLongPress={handleLongPress}>
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
