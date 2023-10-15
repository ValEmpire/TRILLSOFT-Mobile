import { configureStore } from '@reduxjs/toolkit';
import { combinedReducers } from './reducers';
import { NODE_ENV } from '@env';

export const store = configureStore({
    reducer: combinedReducers,
    preloadedState: {},
    devTools: NODE_ENV !== 'production',
});