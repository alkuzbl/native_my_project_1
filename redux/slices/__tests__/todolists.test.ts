import {InitialStateTodolistType, ModalDataTodoListType} from '../../types';
import {
  addTodoList,
  removeTodoList,
  setMessageTodoLists,
  setStatusTodoLists,
  todolistReducer,
  updateTodoList,
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

test('The todoList should be added', () => {
  expect(
    todolistReducer(
      previousState,
      addTodoList({title: 'Test title', todoListId: '77777'}),
    ),
  ).toEqual({
    status: 'idle',
    message: undefined,
    todoLists: [
      {
        id: '77777',
        title: 'Test title',
        filter: 'all',
        addedDate: '',
        order: 0,
      },
      {id: '11', title: 'React-native', filter: 'all', addedDate: '', order: 0},
    ],
    modal: {
      isVisible: false,
      modalData: {} as ModalDataTodoListType,
    },
  });

  expect(previousState.todoLists.length).toBe(1);
});

test('The todoList should be removed', () => {
  expect(
    todolistReducer(previousState, removeTodoList({todoListId: '11'})),
  ).toEqual({
    status: 'idle',
    message: undefined,
    todoLists: [],
    modal: {
      isVisible: false,
      modalData: {} as ModalDataTodoListType,
    },
  });

  expect(previousState.todoLists[0]).not.toBe(undefined);
});

test('The todoList should be updated', () => {
  expect(
    todolistReducer(
      previousState,
      updateTodoList({
        id: '11',
        title: 'Update',
        filter: 'completed',
      }),
    ),
  ).toEqual({
    status: 'idle',
    message: undefined,
    todoLists: [
      {id: '11', title: 'Update', filter: 'completed', addedDate: '', order: 0},
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
