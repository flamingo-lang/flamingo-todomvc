import React from 'react';
import { Footer } from './7Footer';
import { TodoList } from './4TodoList';
import { useDispatch, useQuery } from './flamingo-hooks';

export const MainSection = () => {
  const dispatch = useDispatch();
  // Here's out first query.
  // Note whitespace isn't sensitive.
  const active = (useQuery(
    'active(Active).',
    // The variable Active will be bound
    // to all active todos by the expression
    // `active(Active)`.

    // Flamingo will return an array where each item
    // is an answer to our query. Each item is an object
    // with keys for each variable in the query.
  ) as { Active: number }[]).map((x) => x.Active);
  const visible = (useQuery(
    'visible(Todo).',
  ) as { Todo: number }[]).map((x) => x.Todo);
  // Let's also query for all the completed todos.
  // Queries are batched, so you can use as many
  // of them as you want to fetch data.
  // Here, we only want to find todos that are both
  // completed AND active, so we use the same variable
  // name to bind both fields.
  const completed = (useQuery('completed(Todo), active(Todo).') as {
    Todo: number;
  }[]).map((x) => x.Todo);

  // Here we add calculate whether all the active todos
  // are in fact complete. It's a best practice to keep
  // this logic inside the ALM program itself; however,
  // in this particular case, it involves counting, and
  // that feature hasn't been implemented in Flamingo yet.
  const all_complete = active.length === completed.length;
  return (
    <section className="main">
      {/*Same thing here: - this logic should be in the ALM
      program, and will be when we get counting.*/}
      {active.length !== 0 && (
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
                set_completed: !all_complete,
              })
            }
          />
        </span>
      )}
      <TodoList />
      {active.length !== 0 && <Footer />}
    </section>
  );
};
