import React from 'react';
import {FlatList, ListRenderItem, View} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import {TaskType} from '../redux/types';
import {TaskItem} from '../components';
import {RootStackScreenProps} from '../types';

export const ScreenTasks = ({route}: RootStackScreenProps<'Tasks'>) => {
  const tasks = useSelector<RootState, TaskType[]>(
    state => state.tasks.tasks[route.params.todoListId],
  );

  const renderItem: ListRenderItem<TaskType> = ({item}) => (
    <TaskItem title={item.task} id={item.id} isDone={item.isDone} />
  );

  console.log(route.params);
  console.log(tasks);
  return (
    <View>
      <FlatList<TaskType> data={tasks} renderItem={renderItem} />
    </View>
  );
};
