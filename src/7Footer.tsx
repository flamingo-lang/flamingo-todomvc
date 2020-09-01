import React from 'react';
import classnames from 'classnames';
import { FILTER_TITLES } from './TodoFilters';
import { useDispatch, useQuery } from './flamingo-hooks';

// In terms of Flamingo, this component is very
// similar to the others we've seen: it uses
// a combination of query and dispatch.
export const Footer = () => {
  const completed = (useQuery(
    // Here we're matching on todos that are 
    // both complete AND active.
    "completed(Todo), visible(Todo)."
  ) as { Completed: boolean }[]);
  console.log(completed);
  const active = (useQuery(
    "active(Active)."
  ) as { Active: boolean }[]);
  const activeFilterResult = (useQuery(
    "active_filter = Filter."
  ) as { Filter: "all" | "active" | "completed" }[]);
  const activeFilter = activeFilterResult.length
    ? activeFilterResult[0].Filter : "all";

  const itemWord = active.length === 1 ? 'item' : 'items';
  const dispatch = useDispatch();
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{active.length - completed.length}</strong> {itemWord} left
      </span>
      <ul className="filters">
        {Object.keys(FILTER_TITLES).map((filter) => (
          <li key={filter}>
            <a
              className={classnames({ selected: filter === activeFilter })}
              style={{ cursor: 'pointer' }}
              onClick={() => {
                console.log("!!! Setting filter", filter);
                dispatch('set_active_filter', { filter })
              }}
            >
              {FILTER_TITLES[filter as 'all' | 'completed' | 'active']}
            </a>
          </li>
        ))}
      </ul>
      {completed.length === 0 || (
        <button
          className="clear-completed"
          onClick={() => dispatch('clear_completed')}
        >
          Clear completed
        </button>
      )}
    </footer>
  );
};
