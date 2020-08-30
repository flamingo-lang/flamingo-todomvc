import React from 'react';
import { TodoItem } from './5TodoItem';
import { useQuery } from 'flamingo-lang';

export const TodoList = () => {
  const { Todo } = useQuery(`visible(Todo).`) as { Todo: string[] };
  return (
    <ul className="todo-list">
      {Todo.map(todo => (
        <TodoItem key={todo} />
      ))}
    </ul>
  );
};
