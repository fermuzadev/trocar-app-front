// store/index.ts

import { configureStore } from '@reduxjs/toolkit';
import chatReducer from './chatSlice';

const store = configureStore({
  reducer: {
    chat: chatReducer,
    // Otros reducers según sea necesario
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;










// Variable de muestra.
export const a = '';
