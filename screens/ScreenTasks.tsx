import React from 'react';
import {FlatList, ImageBackground, ListRenderItem, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import {ModalDataTasksType, ModalType, TaskType} from '../redux/types';
import {InputText, TaskItem} from '../components';
import {RootStackScreenProps} from '../types';
import {globalStyles} from '../styles/globalStyles';
import {addTask, removeTask, updateTask} from '../redux/slices';
import {ModalAction} from '../components/modal/ModalAction';
import {
  closeModalTasks,
  setVisibleModalTasks,
} from '../redux/slices/tasks.slice';

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

  const addNewTask = (task: string) => {
    dispatch(addTask({task, todoListId}));
  };

  const closeEditMenu = () => {
    dispatch(closeModalTasks());
  };

  const updateTaskTitle = (task: string, taskId: string) => {
    dispatch(updateTask({todoListId, taskId, updatedData: {task}}));
    closeEditMenu();
  };

  const deleteTask = (taskId: string) => {
    dispatch(removeTask({todoListId, taskId}));
    closeEditMenu();
  };

  const openEditMenu = (title: string, taskId: string) => {
    dispatch(setVisibleModalTasks({taskId, title, todoListId}));
  };

  const changeTaskStatus = (isDone: boolean, taskId: string) => {
    dispatch(updateTask({todoListId, taskId, updatedData: {isDone}}));
  };

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
