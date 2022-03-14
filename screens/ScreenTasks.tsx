import React, {useCallback} from 'react';
import {FlatList, ImageBackground, ListRenderItem, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import {ModalDataTasksType, ModalType, TaskType} from '../redux/types';
import {InputText, TaskItem} from '../components';
import {RootStackScreenProps} from '../types';
import {globalStyles} from '../styles/globalStyles';
import {
  addTask,
  removeTask,
  updateTask,
  closeModalTasks,
  setVisibleModalTasks,
} from '../redux/slices';
import {ModalAction} from '../components/modal/ModalAction/ModalAction';

export const ScreenTasks = ({route}: RootStackScreenProps<'Tasks'>) => {
  const dispatch = useDispatch();
  const todoListId = route.params.todoListId;

  const {isVisible, modalData} = useSelector<
    RootState,
    ModalType<ModalDataTasksType>
  >(state => state.tasks.modal);
  const tasks = useSelector<RootState, TaskType[]>(
    state => state.tasks.tasks[route.params.todoListId],
  );

  const addNewTask = useCallback(
    (task: string) => {
      dispatch(addTask({task, todoListId}));
    },
    [dispatch, todoListId],
  );

  const closeEditMenu = useCallback(() => {
    dispatch(closeModalTasks());
  }, [dispatch]);

  const updateTaskTitle = useCallback(
    (task: string, taskId: string) => {
      dispatch(updateTask({todoListId, taskId, updatedData: {task}}));
      closeEditMenu();
    },
    [closeEditMenu, dispatch, todoListId],
  );

  const deleteTask = useCallback(
    (taskId: string) => {
      dispatch(removeTask({todoListId, taskId}));
      closeEditMenu();
    },
    [closeEditMenu, dispatch, todoListId],
  );

  const openEditMenu = useCallback(
    (title: string, taskId: string) => {
      dispatch(setVisibleModalTasks({taskId, title, todoListId}));
    },
    [dispatch, todoListId],
  );

  const changeTaskStatus = useCallback(
    (isDone: boolean, taskId: string) => {
      dispatch(updateTask({todoListId, taskId, updatedData: {isDone}}));
    },
    [dispatch, todoListId],
  );

  const renderItem: ListRenderItem<TaskType> = ({item}) => (
    <TaskItem
      title={item.task}
      id={item.id}
      isDone={item.isDone}
      changeStatus={changeTaskStatus}
      openEditMenu={openEditMenu}
    />
  );

  return (
    <View style={globalStyles.container}>
      <ImageBackground
        style={globalStyles.background}
        source={require('../assets/images/background.jpg')}
        resizeMode="cover">
        <InputText titleForButton="Добавить" callBack={addNewTask} />

        <FlatList<TaskType>
          data={tasks}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </ImageBackground>

      <ModalAction
        itemTitle={modalData.title || ''}
        itemId={modalData.taskId}
        closeModal={closeEditMenu}
        updateItem={updateTaskTitle}
        deleteItem={deleteTask}
        isVisible={isVisible}
      />
    </View>
  );
};
