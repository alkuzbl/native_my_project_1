import React from 'react';
import {FlatList, ListRenderItem, View} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import {TodoListType} from '../redux/types';
import {Todolist} from '../components/Todolist';

export const ScreenTodoList = () => {
  const todoLists = useSelector<RootState, TodoListType[]>(
    state => state.todoLists.todoLists,
  );
  const renderItem: ListRenderItem<TodoListType> = ({item}) => (
    <Todolist title={item.title} todoListId={item.id} />
  );
  return (
    <View>
      <FlatList<TodoListType> data={todoLists} renderItem={renderItem} />
    </View>
  );
};
