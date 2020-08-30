import React, { useState } from 'react';
import classnames from 'classnames';

// This component is used both in the the TodoItem
// and Header components. It's dumb (doesn't use query
// or dispatch) so we don't have much to say about it.
export const TodoTextInput: React.FunctionComponent<{
  text?: string;
  editing?: boolean;
  placeholder?: string;
  newTodo?: boolean;
  onSave: (s: string) => void;
}> = ({ text, editing, onSave, newTodo, placeholder }) => {
  const [textState, setText] = useState(text || '');

  const handleSubmit = (e: any) => {
    const text = e.target.value.trim();
    if (e.which === 13) {
      onSave(text);
      if (newTodo) {
        setText('');
      }
    }
  };

  const handleBlur = (e: { target: { value: string; }; }) => {
    if (!newTodo) {
      onSave(e.target.value);
    }
  };

  return (
    <input
      className={classnames({
        edit: editing,
        'new-todo': newTodo,
      })}
      type="text"
      placeholder={placeholder}
      autoFocus={true}
      value={textState}
      onBlur={handleBlur}
      onChange={e => setText(e.target.value)}
      onKeyDown={handleSubmit}
    />
  );
};
