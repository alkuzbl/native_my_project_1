import React from 'react';
import {FlatList, ListRenderItem, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import {TaskType} from '../redux/types';
import {InputText, TaskItem} from '../components';
import {RootStackScreenProps} from '../types';
import {globalStyles} from '../styles/globalStyles';
import {addTask} from '../redux/slices';

export const ScreenTasks = ({route}: RootStackScreenProps<'Tasks'>) => {
  const dispatch = useDispatch();

  const tasks = useSelector<RootState, TaskType[]>(
    state => state.tasks.tasks[route.params.todoListId],
  );

  const addNewTask = (task: string) => {
    dispatch(addTask({task, todoListId: route.params.todoListId}));
  };

  const renderItem: ListRenderItem<TaskType> = ({item}) => (
    <TaskItem title={item.task} id={item.id} isDone={item.isDone} />
  );

  return (
    <View style={globalStyles.container}>
      <InputText titleForButton="Добавить" callBack={addNewTask} />
      <FlatList<TaskType>
        data={tasks}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};
