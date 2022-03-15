import React, {useCallback} from 'react';

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
import {
  addTodoList,
  removeTodoList,
  updateTodoList,
  closeModal,
  setVisibleModal,
} from '../redux/slices';
import {globalStyles} from '../styles/globalStyles';
import {ModalAction} from '../components/modal/ModalAction/ModalAction';

export const ScreenTodoList = ({navigation}: RootStackScreenProps<'Tasks'>) => {
  const dispatch = useDispatch();

  const {isVisible, modalData} = useSelector<
    RootState,
    ModalType<ModalDataTodoListType>
  >(state => state.todoLists.modal);
  const todoLists = useSelector<RootState, TodoListType[]>(
    state => state.todoLists.todoLists,
  );

  const closeModalWindow = useCallback(() => {
    dispatch(closeModal());
  }, [dispatch]);

  const openEditMenu = useCallback(
    (title: string, todoListId: string) => {
      dispatch(setVisibleModal({title, todoListId}));
    },
    [dispatch],
  );

  const addNewTodoList = useCallback(
    (title: string) => {
      const todoListId = new Date().getTime().toString();
      dispatch(addTodoList({todoListId, title}));
    },
    [dispatch],
  );

  const updateTitle = useCallback(
    (title: string, id: string) => {
      dispatch(updateTodoList({title, id}));
      closeModalWindow();
    },
    [closeModalWindow, dispatch],
  );

  const deleteTodoList = useCallback(
    (todoListId: string) => {
      dispatch(removeTodoList({todoListId}));
      closeModalWindow();
    },
    [closeModalWindow, dispatch],
  );

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
        itemTitle={modalData.title || ''}
        itemId={modalData.todoListId}
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
