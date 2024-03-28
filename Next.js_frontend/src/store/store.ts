import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import todosReducer from './slices/todos/todoSlice';
// import currentDateReducer from './slices/calendar/calendarSlice';

const makeStore = () => configureStore({
  reducer: {
    todos: todosReducer,
    // currentDate: currentDateReducer,
  },
});

export const wrapper = createWrapper(makeStore);
