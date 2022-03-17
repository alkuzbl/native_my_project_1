import {InitialStateTodolistType, ModalDataTodoListType} from '../../types';
import {
  setMessageTodoLists,
  setStatusTodoLists,
  todolistReducer,
  updateFilterTodoList,
} from '../todolist.slice';

let previousState: InitialStateTodolistType;

beforeEach(() => {
  previousState = {
    status: 'idle',
    todoLists: [
      {id: '11', title: 'React-native', filter: 'all', addedDate: '', order: 0},
    ],
    message: undefined,
    modal: {
      isVisible: false,
      modalData: {} as ModalDataTodoListType,
    },
  };
});

test('The todoList should be updated', () => {
  expect(
    todolistReducer(
      previousState,
      updateFilterTodoList({
        id: '11',
        filter: 'completed',
      }),
    ),
  ).toEqual({
    status: 'idle',
    message: undefined,
    todoLists: [
      {
        id: '11',
        title: 'React-native',
        filter: 'completed',
        addedDate: '',
        order: 0,
      },
    ],
    modal: {
      isVisible: false,
      modalData: {} as ModalDataTodoListType,
    },
  });
});

test('The todoList status should be succeed', () => {
  expect(
    todolistReducer(
      previousState,
      setStatusTodoLists({
        status: 'succeed',
      }),
    ),
  ).toEqual({
    status: 'succeed',
    message: undefined,
    todoLists: [
      {id: '11', title: 'React-native', filter: 'all', addedDate: '', order: 0},
    ],
    modal: {
      isVisible: false,
      modalData: {} as ModalDataTodoListType,
    },
  });

  expect(previousState.status).toBe('idle');
});

test('The todoList message should be "Error"', () => {
  expect(
    todolistReducer(
      previousState,
      setMessageTodoLists({
        message: 'Error',
      }),
    ),
  ).toEqual({
    status: 'idle',
    message: 'Error',
    todoLists: [
      {id: '11', title: 'React-native', filter: 'all', addedDate: '', order: 0},
    ],
    modal: {
      isVisible: false,
      modalData: {} as ModalDataTodoListType,
    },
  });

  expect(previousState.message).toBe(undefined);
});
