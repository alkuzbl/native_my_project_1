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

// import AsyncStorage from '@react-native-async-storage/async-storage';
// import {persistStore, persistReducer} from 'redux-persist';

// const persistConfig = {
//   key: 'root',
//   storage: AsyncStorage,
// };
//
// export const store = configureStore({
//   reducer: {
//     app: persistReducer(persistConfig, appReducer),
//     todoLists: persistReducer(persistConfig, todolistReducer),
//     tasks: persistReducer(persistConfig, tasksReducer),
//   },
// });
// export const persistStor = persistStore(store);
