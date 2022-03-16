import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {todolistReducer, tasksReducer, appReducer, authReducer} from './slices';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  app: persistReducer(persistConfig, appReducer),
  todoLists: persistReducer(persistConfig, todolistReducer),
  tasks: persistReducer(persistConfig, tasksReducer),
  auth: persistReducer(persistConfig, authReducer),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
