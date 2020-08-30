import React from 'react';
import { TodoTextInput } from './6TodoTextInput';
import { useDispatch } from 'flamingo-lang';

export const Header = () => {
  // To dispatch actions, we need to call
  const dispatch = useDispatch();
  return (
    <header className="header">
      <h1>todos</h1>
      <TodoTextInput
        onSave={text => {
          // This guards against submitting empty todos.
          if (text.length !== 0) {
            // Our dispatch function takes two args:
            // - The first is the name of an action
            //    exactly as it appears in our ALM program.
            // - The second is an object that represents
            //   the actions attributes.
            // Strings will be converted to ALM strings,
            // numbers to ALM integers, and booleans
            // to ALM booleans.
            dispatch('new_todo', { text });
            // Calling this function will trigger Flamingo
            // to compute a new state, which will push updates
            // to the rest of the components that have queries
            // with this session.
          }
        }}
        placeholder="What needs to be done?"
      />
    </header>
  );
};
