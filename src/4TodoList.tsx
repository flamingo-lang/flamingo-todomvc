import React from 'react';
import { TodoItem } from './5TodoItem';
import { useQuery } from './flamingo-hooks';

// TodoList uses querying just like MainSection.
export const TodoList = () => {
  const { Todo } = useQuery(`visible(Todo).`, {Todo: []}) as { Todo: string[] };
  console.log(Todo);
  return (
    <ul className="todo-list">
      {Todo?.map(todo => (
        <TodoItem key={todo} />
      ))}
    </ul>
  );
};
