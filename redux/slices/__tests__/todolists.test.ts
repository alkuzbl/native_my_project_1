import {
  InitialStateTodolistType,
  ModalDataTodoListType,
  ModalType,
} from '../../types';
import {
  addTodoList,
  removeTodoList,
  setMessageTodoLists,
  setStatusTodoLists,
  todolistReducer,
  updateTodoList,
} from '../todolist.slice';

test('The todoList should be added', () => {
  const previousState = {
    status: 'idle',
    message: undefined,
    todoLists: [],
    modal: {} as ModalType<ModalDataTodoListType>,
  } as InitialStateTodolistType;

  expect(
    todolistReducer(
      previousState,
      addTodoList({title: 'Test title', todoListId: '55555'}),
    ),
  ).toEqual({
    status: 'idle',
    message: undefined,
    todoLists: [{id: '55555', title: 'Test title', filter: 'all'}],
    modal: {},
  });

  expect(previousState.todoLists[0]).toBe(undefined);
});

test('The todoList should be removed', () => {
  const previousState = {
    status: 'idle',
    message: undefined,
    todoLists: [{id: '55555', title: 'Test title', filter: 'all'}],
    modal: {},
  } as InitialStateTodolistType;

  expect(
    todolistReducer(previousState, removeTodoList({todoListId: '55555'})),
  ).toEqual({
    status: 'idle',
    message: undefined,
    todoLists: [],
    modal: {},
  });

  expect(previousState.todoLists[0]).toStrictEqual({
    id: '55555',
    title: 'Test title',
    filter: 'all',
  });
});

test('The todoList should be updated', () => {
  const previousState = {
    status: 'idle',
    message: undefined,
    todoLists: [{id: '55555', title: 'Test title', filter: 'all'}],
    modal: {},
  } as InitialStateTodolistType;

  expect(
    todolistReducer(
      previousState,
      updateTodoList({
        id: '55555',
        title: 'Update',
        filter: 'completed',
      }),
    ),
  ).toEqual({
    status: 'idle',
    message: undefined,
    todoLists: [{id: '55555', title: 'Update', filter: 'completed'}],
    modal: {},
  });

  expect(previousState.todoLists[0]).toEqual({
    id: '55555',
    title: 'Test title',
    filter: 'all',
  });
});

test('The todoList status should be succeed', () => {
  const previousState = {
    status: 'idle',
    message: undefined,
    todoLists: [],
    modal: {} as ModalType<ModalDataTodoListType>,
  } as InitialStateTodolistType;

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
    todoLists: [],
    modal: {},
  });

  expect(previousState.todoLists[0]).toBe(undefined);
});

test('The todoList message should be "Error"', () => {
  const previousState = {
    status: 'idle',
    message: undefined,
    todoLists: [],
    modal: {} as ModalType<ModalDataTodoListType>,
  } as InitialStateTodolistType;

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
    todoLists: [],
    modal: {},
  });

  expect(previousState.todoLists[0]).toBe(undefined);
});
