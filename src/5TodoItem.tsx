import React, { useState, FunctionComponent } from 'react';
import { useDispatch } from './flamingo-hooks';
import classnames from 'classnames';
import { TodoTextInput } from './6TodoTextInput';

export const TodoItem: FunctionComponent<{
  todoID: any,
  text: string,
  completed: boolean
}> = ({ todoID, completed, text }) => {
  const dispatch = useDispatch();
  
  // Because the editing state is local and is guaranteed
  // not to affect other components, we can capture it
  // here using a useState hook. Be _very_ careful doing this
  // though - if your state is in fact _not_ local, you forfeit
  // the benefits of using Flamingo in the first place.
  // Here's a solid rule of thumb for deciding if and when it's
  // ok to use local state:
  // If the state is not passed down to any children, it's ok to
  // keep it local in a useState hook.
  // If _all_ the children that receive of the component are dumb (that is,
  // they don't query or dispatch), then it's ok to use a useState hook.
  // Otherwise, it's _not_ ok - use ALM or Redux or whatever.
  const [editing, setEditing] = useState(false);

  const destroy = () => dispatch('destroy_todo', { target: todoID });

  // Here, for simplicity, we'll keep TodoTextInput a dumb component
  // and pass in its save callback as a closure.
  const handleSave = (text: string) => {
    if (text.length === 0) {
      destroy();
    } else {
      dispatch('edit_todo', { target: todoID, text });
    }
    setEditing(false);
  };

  const element = editing ? (
    <TodoTextInput
      text={text}
      editing={editing}
      onSave={text => handleSave(text)}
    />
  ) : (
    <div className="view">
      <input
        className="toggle"
        type="checkbox"
        checked={completed}
        onChange={() => dispatch('toggle_todo', { target: todoID })}
      />
      <label onDoubleClick={() => setEditing(true)}>{text}</label>
      <button className="destroy" onClick={destroy} />
    </div>
  );

  return (
    <li
      className={classnames({
        editing,
        completed: completed,
      })}
    >
      {element}
    </li>
  );
};
