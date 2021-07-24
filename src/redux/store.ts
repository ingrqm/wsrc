import { createWrapper } from 'next-redux-wrapper';

import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import userReducer from './user/slice';

export const store = (): any => {
  const isServer = typeof window === 'undefined';

  if (isServer) {
    return null;
  }
  const reducers = combineReducers({
    userReducer,
  });

  const persistConfig = {
    key: 'root',
    storage,
  };

  const persistedReducer = persistReducer(persistConfig, reducers);

  return configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk],
  });
};

export type AppStore = ReturnType<typeof store>;
export type AppState = ReturnType<AppStore['getState']>;

export const wrapper = createWrapper<AppStore>(store);
