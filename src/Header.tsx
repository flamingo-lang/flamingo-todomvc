import React from 'react';
import { TodoTextInput } from './TodoTextInput';
import { useDispatch } from 'flamingo';

export const Header = () => {
  const dispatch = useDispatch();
  return (
    <header className="header">
      <h1>todos</h1>
      <TodoTextInput
        onSave={text => {
          if (text.length !== 0) {
            dispatch('new_todo', { text });
          }
        }}
        placeholder="What needs to be done?"
      />
    </header>
  );
};
