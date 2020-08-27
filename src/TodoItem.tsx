import React, { useState } from 'react';
import { useQuery, useDispatch } from 'flamingo';
import classnames from 'classnames';
import { TodoTextInput } from './TodoTextInput';

export const TodoItem = ({ key }) => {
  const dispatch = useDispatch();
  const { Text, Completed } = useQuery(`
  text(${key}) = Text.
  completed(${key}) = Completed.
  `);

  const [editing, setEditing] = useState(false);

  const destroy = () => dispatch('destroy_todo', { target: key });

  const handleSave = text => {
    if (text.length === 0) {
      destroy();
    } else {
      dispatch('edit_todo', { target: key, text });
    }
    setEditing(false);
  };

  const element = editing ? (
    <TodoTextInput
      text={Text}
      editing={editing}
      onSave={text => handleSave(text)}
    />
  ) : (
    <div className="view">
      <input
        className="toggle"
        type="checkbox"
        checked={Completed}
        onChange={() => dispatch('toggle_todo', { target: key })}
      />
      <label onDoubleClick={() => setEditing(true)}>{Text}</label>
      <button className="destroy" onClick={destroy} />
    </div>
  );

  return (
    <li
      className={classnames({
        editing,
        completed: Completed,
      })}
    >
      {element}
    </li>
  );
};
