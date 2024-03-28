import React from 'react';
import { TodoWrapper } from "@/components/TodoWrapper";
import { wrapper } from "../store/index"
import { fetchTodos } from "../store/slices/todos/todoSlice";

export interface ITodo {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  due_date: `${number}-${number}-${number}`
}

export interface TodosProps {
  todos: ITodo[]; // Adjust according to the actual structure of your data
}

const Todos: React.FC<TodosProps> = ({ todos }) => {
  return (
    <div>
      <TodoWrapper data={todos} />
    </div>
  );
};

export const getServerSideProps = wrapper.getServerSideProps((store) => async () => {
  await store.dispatch(fetchTodos())
  console.log("UPDATED STATE ON SERVER SIDE", store.getState());

  return {
    props: { todos: [] }, // No need to pass todos as props, as they're already in your Redux state
  };
});

export default Todos;
