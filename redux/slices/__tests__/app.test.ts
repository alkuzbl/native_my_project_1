import {
  appReducer,
  setInitialization,
  setMessageApp,
  setStatusApp,
} from '../app.slice';
import {InitialStateAppType} from '../../types';

test('The status should be succeed', () => {
  const previousState = {status: 'idle'} as InitialStateAppType;
  expect(appReducer(previousState, setStatusApp({status: 'succeed'}))).toEqual({
    status: 'succeed',
  });
});

test('The message should contain an error', () => {
  const previousState = {} as InitialStateAppType;
  expect(appReducer(previousState, setMessageApp({message: 'Error'}))).toEqual({
    message: 'Error',
  });
  expect(previousState.message).toBe(undefined);
});

test('Initialization should be (true)', () => {
  const previousState = {isInitialized: false} as InitialStateAppType;
  expect(
    appReducer(previousState, setInitialization({isInitialized: true})),
  ).toEqual({
    isInitialized: true,
  });
  expect(previousState.isInitialized).toBe(false);
});
