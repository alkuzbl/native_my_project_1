import React from 'react';
import {FlatList, ListRenderItem, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import {TodoListType} from '../redux/types';
import {InputText, Todolist} from '../components';
import {RootStackScreenProps} from '../types';
import {addTodoList} from '../redux/slices';
import {globalStyles} from '../styles/globalStyles';

export const ScreenTodoList = ({navigation}: RootStackScreenProps<'Tasks'>) => {
  const dispatch = useDispatch();

  const todoLists = useSelector<RootState, TodoListType[]>(
    state => state.todoLists.todoLists,
  );

  const renderItem: ListRenderItem<TodoListType> = ({item}) => (
    <Todolist title={item.title} todoListId={item.id} navigation={navigation} />
  );

  const addNewTodoList = (title: string) => {
    const todoListId = new Date().getTime().toString();
    dispatch(addTodoList({todoListId, title}));
  };

  return (
    <View style={globalStyles.container}>
      <InputText titleForButton="Добавить" callBack={addNewTodoList} />
      <FlatList<TodoListType>
        data={todoLists}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};
