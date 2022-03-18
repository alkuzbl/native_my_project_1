import {
  InitialStateTasksType,
  ModalDataTasksType,
  ModalType,
} from '../../types';
import {
  setMessageTasks,
  setStatusTask,
  setStatusTasks,
  tasksReducer,
} from '../tasks.slice';
import {TaskPriorities, TaskStatuses} from '../../../dal/types';

let previousState: InitialStateTasksType;

beforeEach(() => {
  previousState = {
    status: 'idle',
    message: undefined,
    tasks: {
      '55555': [
        {
          id: '1',
          title: 'Каркас для приложения',
          isDone: false,
          taskStatus: 'idle',
          description: '',
          status: TaskStatuses.New,
          deadline: '',
          startDate: '',
          todoListId: '',
          priority: TaskPriorities.Low,
          order: 0,
          addedDate: '',
        },
      ],
    },
    modal: {} as ModalType<ModalDataTasksType>,
  };
});

// test('The task should be added', () => {
//   const testState = tasksReducer(
//     previousState,
//     addTask({todoListId: '55555', task: 'Test task title'}),
//   );
//
//   expect(testState.tasks['55555'][0].title).toBe('Test task title');
// });
//
// test('The task should be removed', () => {
//   const testState = tasksReducer(
//     previousState,
//     removeTask({todoListId: '55555', taskId: '1'}),
//   );
//
//   expect(testState.tasks['55555'][0]).toBe(undefined);
// });

// test('The task should be updated', () => {
//   expect(
//     tasksReducer(
//       previousState,
//       updateTask({
//         todoListId: '55555',
//         taskId: '1',
//         updatedData: {
//           title: 'Test task (updated)',
//           isDone: true,
//         },
//       }),
//     ),
//   ).toEqual({
//     status: 'idle',
//     message: undefined,
//     tasks: {
//       '55555': [
//         {
//           id: '1',
//           title: 'Test task (updated)',
//           isDone: true,
//           taskStatus: 'idle',
//           description: '',
//           status: TaskStatuses.New,
//           deadline: '',
//           startDate: '',
//           todoListId: '',
//           priority: TaskPriorities.Low,
//           order: 0,
//           addedDate: '',
//         },
//       ],
//     },
//     modal: {},
//   });
//
//   expect(previousState.tasks['55555'][0].title).toBe('Каркас для приложения');
// });

test('The status task should be updated', () => {
  expect(
    tasksReducer(
      previousState,
      setStatusTask({todoListId: '55555', taskId: '1', taskStatus: 'succeed'}),
    ),
  ).toEqual({
    status: 'idle',
    message: undefined,
    tasks: {
      '55555': [
        {
          id: '1',
          title: 'Каркас для приложения',
          isDone: false,
          taskStatus: 'succeed',
          description: '',
          status: TaskStatuses.New,
          deadline: '',
          startDate: '',
          todoListId: '',
          priority: TaskPriorities.Low,
          order: 0,
          addedDate: '',
        },
      ],
    },
    modal: {},
  });
});

test('The status tasks should be updated', () => {
  expect(
    tasksReducer(previousState, setStatusTasks({status: 'succeed'})),
  ).toEqual({
    status: 'succeed',
    message: undefined,
    tasks: {
      '55555': [
        {
          id: '1',
          title: 'Каркас для приложения',
          isDone: false,
          taskStatus: 'idle',
          description: '',
          status: TaskStatuses.New,
          deadline: '',
          startDate: '',
          todoListId: '',
          priority: TaskPriorities.Low,
          order: 0,
          addedDate: '',
        },
      ],
    },
    modal: {},
  });
});

test('The message should be "Error"', () => {
  expect(
    tasksReducer(previousState, setMessageTasks({message: 'Error'})),
  ).toEqual({
    status: 'idle',
    message: 'Error',
    tasks: {
      '55555': [
        {
          id: '1',
          title: 'Каркас для приложения',
          isDone: false,
          taskStatus: 'idle',
          description: '',
          status: TaskStatuses.New,
          deadline: '',
          startDate: '',
          todoListId: '',
          priority: TaskPriorities.Low,
          order: 0,
          addedDate: '',
        },
      ],
    },
    modal: {},
  });
});
