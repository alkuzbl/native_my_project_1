import React, {FC} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {TaskItemPropsType} from './types';

export const TaskItem: FC<TaskItemPropsType> = props => {
  const {title, isDone, id} = props;

  const handleLongPress = () => {
    console.log(`isDone: ${isDone}, id: ${id}`);
  };

  return (
    <TouchableOpacity onLongPress={handleLongPress}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};
