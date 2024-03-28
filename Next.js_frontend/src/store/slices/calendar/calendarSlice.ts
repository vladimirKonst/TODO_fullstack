// features/currentDate/currentDateSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentDate: new Date().toISOString().slice(0, 10), // Format YYYY-MM-DD
};

export const currentDateSlice = createSlice({
  name: 'currentDate',
  initialState,
  reducers: {
    setCurrentDate: (state, action) => {
      state.currentDate = action.payload;
    },
  },
});

export const { setCurrentDate } = currentDateSlice.actions;

export default currentDateSlice.reducer;
