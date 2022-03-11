import React from 'react';
import {FlatList, ListRenderItem, View} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import {TodoListType} from '../redux/types';
import {Todolist} from '../components';
import {RootStackScreenProps} from '../types';

export const ScreenTodoList = ({navigation}: RootStackScreenProps<'Tasks'>) => {
  const todoLists = useSelector<RootState, TodoListType[]>(
    state => state.todoLists.todoLists,
  );
  console.log('screenTodoList');
  const renderItem: ListRenderItem<TodoListType> = ({item}) => (
    <Todolist title={item.title} todoListId={item.id} navigation={navigation} />
  );

  return (
    <View>
      <FlatList<TodoListType> data={todoLists} renderItem={renderItem} />
    </View>
  );
};
