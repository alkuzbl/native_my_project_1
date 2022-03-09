import {configureStore} from '@reduxjs/toolkit';
import {todolistReducer, tasksReducer, appReducer} from './slices';

export const store = configureStore({
  reducer: {
    app: appReducer,
    todoLists: todolistReducer,
    tasks: tasksReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
