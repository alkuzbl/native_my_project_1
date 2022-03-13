import React from 'react';

import {
  FlatList,
  ImageBackground,
  ListRenderItem,
  StyleSheet,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import {ModalDataTodoListType, ModalType, TodoListType} from '../redux/types';
import {InputText, Todolist} from '../components';
import {RootStackScreenProps} from '../types';
import {addTodoList, removeTodoList, updateTodoList} from '../redux/slices';
import {globalStyles} from '../styles/globalStyles';
import {ModalAction} from '../components/modal/ModalAction';
import {closeModal, setVisibleModal} from '../redux/slices/todolist.slice';

export const ScreenTodoList = ({navigation}: RootStackScreenProps<'Tasks'>) => {
  const dispatch = useDispatch();
  const {isVisible, modalData} = useSelector<
    RootState,
    ModalType<ModalDataTodoListType>
  >(state => state.todoLists.modal);

  const todoLists = useSelector<RootState, TodoListType[]>(
    state => state.todoLists.todoLists,
  );

  const openEditMenu = (title: string, todoListId: string) => {
    dispatch(setVisibleModal({title, todoListId}));
  };

  const addNewTodoList = (title: string) => {
    const todoListId = new Date().getTime().toString();
    dispatch(addTodoList({todoListId, title}));
  };

  const updateTitle = (title: string, id: string) => {
    dispatch(updateTodoList({title, id}));
    closeModalWindow();
  };

  const closeModalWindow = () => {
    dispatch(closeModal());
  };

  const deleteTodoList = (todoListId: string) => {
    dispatch(removeTodoList({todoListId}));
    closeModalWindow();
  };

  const renderItem: ListRenderItem<TodoListType> = ({item}) => (
    <Todolist
      title={item.title}
      todoListId={item.id}
      navigation={navigation}
      openEditMenu={openEditMenu}
    />
  );

  return (
    <View style={globalStyles.container}>
      <ImageBackground
        style={globalStyles.background}
        source={require('../assets/images/background.jpg')}
        resizeMode="cover">
        <View style={styles.inputBox}>
          <InputText titleForButton="Добавить" callBack={addNewTodoList} />
        </View>
        <FlatList<TodoListType>
          data={todoLists}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </ImageBackground>
      <ModalAction
        isVisible={isVisible}
        closeModal={closeModalWindow}
        modalData={modalData}
        deleteItem={deleteTodoList}
        updateItem={updateTitle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputBox: {
    marginBottom: 15,
  },
});
