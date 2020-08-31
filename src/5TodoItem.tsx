import React, { useState, FunctionComponent } from 'react';
import { useQuery, useDispatch } from './flamingo-hooks';
import classnames from 'classnames';
import { TodoTextInput } from './6TodoTextInput';

export const TodoItem: FunctionComponent<{key: any}> = ({ key }) => {
  const dispatch = useDispatch();
  // Note something special here: our query
  // is parameterized by the key passed down
  // as a prop. This is a powerful capability
  // that makes queries very well suited for
  // React apps. You can move this component anywhere
  // in the hierarchy, and as long as you pass in
  // a key, it will fetch its own data correctly.
  const { Text, Completed } = useQuery(`
    text(${key}) = Text.
    completed(${key}) = Completed.
  `, { Text: [], Completed: []}) as {Text: string, Completed: boolean};

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

  const destroy = () => dispatch('destroy_todo', { target: key });

  // Here, for simplicity, we'll keep TodoTextInput a dumb component
  // and pass in its save callback as a closure.
  const handleSave = (text: string) => {
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
