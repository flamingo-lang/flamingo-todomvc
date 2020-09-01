import React from 'react';
import { TodoItem } from './5TodoItem';
import { useQuery } from './flamingo-hooks';

// TodoList uses querying just like MainSection.
export const TodoList = () => {
  const visibleTodos = (useQuery("visible(Todo).") as { Todo: number }[]);
  
  return (
    <ul className="todo-list">
      {visibleTodos.map(({Todo}) => (
        <TodoItem todoID={Todo} key={Todo}/>
      ))}
    </ul>
  );
};
