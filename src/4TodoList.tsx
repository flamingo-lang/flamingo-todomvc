import React from 'react';
import { TodoItem } from './5TodoItem';
import { useQuery } from './flamingo-hooks';

// TodoList fetches the data for all its children.
// This is similar to the SmartComponent/DumbComponent
// paradigm in Redux. Queries are extremely flexible,
// making them great for this sort of data fetching.
export const TodoList = () => {
  // First will fetch the completed Todos.
  const completed = (useQuery(`completed(Todo).`) as { Todo: number }[])
    .map(x => x.Todo);
  const visible = (useQuery(`text(Todo) = Text, visible(Todo).`) as {
    Todo: number,
    Text: string,
  }[]);
  console.log(visible);

  return (
    <ul className="todo-list">
      {visible.map(({Todo, Text }) => (
        <TodoItem
          todoID={Todo}
          key={Todo}
          completed={completed.includes(Todo)}
          text={Text}
        />
      ))}
    </ul>
  );
};
