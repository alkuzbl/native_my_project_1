import {InitialStateTodolistType} from '../../types';
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
  });

  expect(previousState.todoLists[0]).toBe(undefined);
});

test('The todoList should be removed', () => {
  const previousState = {
    status: 'idle',
    message: undefined,
    todoLists: [{id: '55555', title: 'Test title', filter: 'all'}],
  } as InitialStateTodolistType;

  expect(
    todolistReducer(previousState, removeTodoList({todoListId: '55555'})),
  ).toEqual({
    status: 'idle',
    message: undefined,
    todoLists: [],
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
  });

  expect(previousState.todoLists[0]).toBe(undefined);
});

test('The todoList message should be "Error"', () => {
  const previousState = {
    status: 'idle',
    message: undefined,
    todoLists: [],
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
  });

  expect(previousState.todoLists[0]).toBe(undefined);
});
