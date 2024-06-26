'use client'
import { combineReducers } from '@reduxjs/toolkit';
import someSlice from './slices/counterSlice';

const rootReducer = combineReducers({
  someSlice: someSlice,
  // Add more reducers here
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
