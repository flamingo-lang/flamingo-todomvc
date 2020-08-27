import React from 'react';
import { TodoItem } from './TodoItem';
import { useQuery } from 'flamingo';

export const TodoList = () => {
  const { Todo } = useQuery(`visible(Todo).`);
  return (
    <ul className="todo-list">
      {Todo.map(todo => (
        <TodoItem key={todo} />
      ))}
    </ul>
  );
};
