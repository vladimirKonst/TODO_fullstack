import React from 'react';
import { TodoWrapper } from "@/components/TodoWrapper";

interface Todo {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

interface TodosProps {
  todos: Todo[]; // Adjust according to the actual structure of your data
}

const Todos: React.FC<TodosProps> = ({ todos }) => {
  return (
    <div>
      <TodoWrapper data={todos} />
    </div>
  );
};

export const getServerSideProps = async () => {
  let todos = []; // Initialize as an array to match the expected structure
  try {
    const res = await fetch('http://localhost:3001/todos');
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    todos = await res.json(); // Use .json() if your API returns JSON data
  } catch (error) {
    console.error('Fetch error:', error);
  }

  return {
    props: { todos }, // Pass the fetched todos as props
  };
};

export default Todos;
