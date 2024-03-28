// todoSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import dayjs from 'dayjs';

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
    const response = await fetch('http://localhost:3001/todos');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const todos = await response.json();

    return todos;
  });

const initialState = {
  todos: [] as any[],
  status: "Initial",
  error: ""  as string | undefined
};

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    // Reducers for sync actions here
    updateTodo: (state, action) => {
      // Update todo in state.todos
    },
    deleteTodo: (state, action) => {
      // Delete todo from state.todos
    },
    filterTodo: (state, action) => {
      // Filter todos by date
    },
    createTodo: (state, action) => {
        state.todos.push({
          id: dayjs(),
          text: action.payload.text,
          completed: false,
        });
      },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.todos = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { updateTodo, deleteTodo, filterTodo, createTodo } = todoSlice.actions;

export default todoSlice.reducer;
