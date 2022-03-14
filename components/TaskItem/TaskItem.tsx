import React, {memo} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {TaskItemPropsType} from './types';

export const TaskItem: React.NamedExoticComponent<TaskItemPropsType> = memo(
  props => {
    const {title, isDone, id, changeStatus, openEditMenu} = props;

    const handleLongPress = () => {
      openEditMenu && openEditMenu(title, id);
    };

    const handlePressDot = () => {
      changeStatus && changeStatus(!isDone, id);
    };

    return (
      <TouchableOpacity style={styles.box} onLongPress={handleLongPress}>
        <TouchableOpacity onPress={handlePressDot} style={styles.boxDot}>
          <View style={!isDone ? styles.dot : [styles.dot, styles.activeDot]} />
        </TouchableOpacity>

        <Text
          style={
            !isDone ? styles.content : [styles.content, styles.activeText]
          }>
          {title}
        </Text>
      </TouchableOpacity>
    );
  },
);

const styles = StyleSheet.create({
  box: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  boxDot: {
    paddingLeft: 10,
    paddingVertical: 20,
    paddingRight: 20,
  },
  dot: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#5e4131',
  },
  content: {
    fontSize: 22,
    fontWeight: '500',
    color: '#5e4131',
    paddingRight: 10,
    paddingVertical: 20,
  },
  activeText: {
    textDecorationLine: 'line-through',
    opacity: 0.5,
  },
  activeDot: {
    backgroundColor: '#5e4131',
    opacity: 0.5,
  },
});
