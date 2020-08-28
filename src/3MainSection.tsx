import React from 'react';
import { Footer } from './7Footer';
import { TodoList } from './4TodoList';

import { useDispatch, useQuery } from 'flamingo';

export const MainSection = () => {
  const dispatch = useDispatch();
  // Here's out first query:
  const { Active, Completed } = useQuery(`
    active(Active).
    completed(Completed).
  `);
  // Note whitespace isn't sensitive in the query.
  // the `active(Active).` clause will find all the todos
  // that are active. The variable name, `Active`, will be
  // used as a key in the object returned by `useQuery`, and
  // its value will be an array of all active todos.
  // Same for completed.

  // Here we add calculate whether all the active todos
  // are in fact complete. It's a best practice to keep
  // this logic inside the ALM program itself; however,
  // in this particular case, it involves counting, and
  // that feature hasn't been implemented in Flamingo yet.
  const all_complete = Active.length === Completed.length;
  return (
    <section className="main">
      {/*Same thing here: - this logic should be in the ALM
      program, and will be when we get counting.*/}
      {Active.length && (
        <span>
          <input
            className="toggle-all"
            type="checkbox"
            checked={all_complete}
            readOnly
          />
          <label
            onClick={() =>
              dispatch('set_alll', {
                state: all_complete ? 'incomplete' : 'complete',
              })
            }
          />
        </span>
      )}
      <TodoList />
      {Active.length && <Footer />}
    </section>
  );
};
