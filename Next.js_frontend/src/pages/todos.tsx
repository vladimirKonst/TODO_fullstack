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
  const fetchedTodos = await fetchTodos()
  await store.dispatch(fetchedTodos)
  const data = (store.getState() as any).todos.todos;
  console.log("UPDATED STATE ON SERVER SIDE", data);

  return {
    props: { todos: data }, // почему то я не смог норм гидрировать стейт, а возможно это вообще плохая идея, надо подумать почитать
  };
});

export default Todos;
