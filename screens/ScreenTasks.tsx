import React, {useCallback, useEffect} from 'react';
import {
  FlatList,
  ImageBackground,
  ListRenderItem,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import {
  ModalDataTasksType,
  ModalType,
  TaskType,
  TodoListType,
} from '../redux/types';
import {InputText, TaskItem} from '../components';
import {RootStackScreenProps} from '../types';
import {globalStyles} from '../styles/globalStyles';
import {
  updateTask,
  closeModalTasks,
  setVisibleModalTasks,
  updateFilterTodoList,
} from '../redux/slices';
import {ModalAction} from '../components/modal/ModalAction/ModalAction';
import {fetchTasks, createTask, deleteTask} from '../redux/middleware';

export const ScreenTasks = ({route}: RootStackScreenProps<'Tasks'>) => {
  const dispatch = useDispatch();
  const todoListId = route.params.todoListId;

  const filter = useSelector<RootState, TodoListType | undefined>(state =>
    state.todoLists.todoLists.find(item => item.id === todoListId),
  )?.filter;

  const {isVisible, modalData} = useSelector<
    RootState,
    ModalType<ModalDataTasksType>
  >(state => state.tasks.modal);
  const tasks = useSelector<RootState, TaskType[]>(
    state => state.tasks.tasks[route.params.todoListId],
  );

  const addNewTask = useCallback(
    (title: string) => {
      dispatch(createTask({title, id: todoListId}));
    },
    [dispatch, todoListId],
  );

  const closeEditMenu = useCallback(() => {
    dispatch(closeModalTasks());
  }, [dispatch]);

  const updateTaskTitle = useCallback(
    (title: string, taskId: string) => {
      dispatch(updateTask({todoListId, taskId, updatedData: {title}}));
      closeEditMenu();
    },
    [closeEditMenu, dispatch, todoListId],
  );

  const removeTask = useCallback(
    (taskId: string) => {
      dispatch(deleteTask({todoListId, taskId}));
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

  const handlePressAll = () =>
    dispatch(updateFilterTodoList({id: todoListId, filter: 'all'}));

  const handlePressActive = () =>
    dispatch(updateFilterTodoList({id: todoListId, filter: 'active'}));

  let filteredTasks = tasks;

  if (filter === 'active') {
    filteredTasks = filteredTasks.filter(task => !task.isDone);
  }

  useEffect(() => {
    dispatch(fetchTasks(todoListId));
  }, []);

  const renderItem: ListRenderItem<TaskType> = ({item}) => (
    <TaskItem
      title={item.title}
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
          data={filteredTasks}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
        <View style={styles.container}>
          <TouchableOpacity
            onPress={handlePressAll}
            style={
              filter !== 'all'
                ? styles.button
                : [styles.button, styles.buttonActive]
            }>
            <Text style={styles.buttonTitle}>All</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={handlePressActive}
            style={
              filter !== 'active'
                ? styles.button
                : [styles.button, styles.buttonActive]
            }>
            <Text style={styles.buttonTitle}>Active</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>

      <ModalAction
        itemTitle={modalData.title || ''}
        itemId={modalData.taskId}
        closeModal={closeEditMenu}
        updateItem={updateTaskTitle}
        deleteItem={removeTask}
        isVisible={isVisible}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#d0923e',
  },
  button: {
    width: '50%',
    height: '100%',
    justifyContent: 'center',
  },
  buttonTitle: {
    fontSize: 24,
    textAlign: 'center',
  },
  buttonActive: {
    backgroundColor: '#daac67',
  },
});
