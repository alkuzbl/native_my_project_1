import {
  InitialStateTasksType,
  ModalDataTasksType,
  ModalType,
} from '../../types';
import {
  addTask,
  removeTask,
  setMessageTasks,
  setStatusTask,
  setStatusTasks,
  tasksReducer,
  updateTask,
} from '../tasks.slice';

test('The task should be added', () => {
  const previousState = {
    status: 'idle',
    message: undefined,
    tasks: {
      '55555': [
        {
          id: '1',
          task: 'Learning react-native',
          isDone: false,
          status: 'idle',
        },
      ],
    },
    modal: {} as ModalType<ModalDataTasksType>,
  } as InitialStateTasksType;

  const testState = tasksReducer(
    previousState,
    addTask({todoListId: '55555', task: 'Test task title'}),
  );

  expect(testState.tasks['55555'][0].task).toBe('Test task title');
});

test('The task should be removed', () => {
  const previousState = {
    status: 'idle',
    message: undefined,
    tasks: {
      '55555': [
        {
          id: '1',
          task: 'Learning react-native',
          isDone: false,
          status: 'idle',
        },
      ],
    },
    modal: {} as ModalType<ModalDataTasksType>,
  } as InitialStateTasksType;

  const testState = tasksReducer(
    previousState,
    removeTask({todoListId: '55555', taskId: '1'}),
  );

  expect(testState.tasks['55555'][0]).toBe(undefined);
});

test('The task should be updated', () => {
  const previousState = {
    status: 'idle',
    message: undefined,
    tasks: {
      '55555': [
        {
          id: '1',
          task: 'Learning react-native',
          isDone: false,
          status: 'idle',
        },
      ],
    },
    modal: {} as ModalType<ModalDataTasksType>,
  } as InitialStateTasksType;

  expect(
    tasksReducer(
      previousState,
      updateTask({
        todoListId: '55555',
        taskId: '1',
        updatedData: {
          task: 'Test task (updated)',
          isDone: true,
        },
      }),
    ),
  ).toEqual({
    status: 'idle',
    message: undefined,
    tasks: {
      '55555': [
        {
          id: '1',
          task: 'Test task (updated)',
          isDone: true,
          status: 'idle',
        },
      ],
    },
    modal: {},
  });

  expect(previousState.tasks['55555'][0].task).toBe('Learning react-native');
});

test('The status task should be updated', () => {
  const previousState = {
    status: 'idle',
    message: undefined,
    tasks: {
      '55555': [
        {
          id: '1',
          task: 'Learning react-native',
          isDone: false,
          status: 'idle',
        },
      ],
    },
    modal: {} as ModalType<ModalDataTasksType>,
  } as InitialStateTasksType;

  expect(
    tasksReducer(
      previousState,
      setStatusTask({todoListId: '55555', taskId: '1', status: 'succeed'}),
    ),
  ).toEqual({
    status: 'idle',
    message: undefined,
    tasks: {
      '55555': [
        {
          id: '1',
          task: 'Learning react-native',
          isDone: false,
          status: 'succeed',
        },
      ],
    },
    modal: {},
  });
});

test('The status tasks should be updated', () => {
  const previousState = {
    status: 'idle',
    message: undefined,
    tasks: {
      '55555': [
        {
          id: '1',
          task: 'Learning react-native',
          isDone: false,
          status: 'idle',
        },
      ],
    },
    modal: {} as ModalType<ModalDataTasksType>,
  } as InitialStateTasksType;

  expect(
    tasksReducer(previousState, setStatusTasks({status: 'succeed'})),
  ).toEqual({
    status: 'succeed',
    message: undefined,
    tasks: {
      '55555': [
        {
          id: '1',
          task: 'Learning react-native',
          isDone: false,
          status: 'idle',
        },
      ],
    },
    modal: {},
  });
});

test('The message should be "Error"', () => {
  const previousState = {
    status: 'idle',
    message: undefined,
    tasks: {
      '55555': [
        {
          id: '1',
          task: 'Learning react-native',
          isDone: false,
          status: 'idle',
        },
      ],
    },
    modal: {} as ModalType<ModalDataTasksType>,
  } as InitialStateTasksType;

  expect(
    tasksReducer(previousState, setMessageTasks({message: 'Error'})),
  ).toEqual({
    status: 'idle',
    message: 'Error',
    tasks: {
      '55555': [
        {
          id: '1',
          task: 'Learning react-native',
          isDone: false,
          status: 'idle',
        },
      ],
    },
    modal: {},
  });
});
