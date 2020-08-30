import React from 'react';
import classnames from 'classnames';
import { FILTER_TITLES } from './TodoFilters';
import { useDispatch, useQuery } from './flamingo-hooks';

// In terms of Flamingo, this component is very
// similar to the others we've seen: it uses
// a combination of query and dispatch.
export const Footer = () => {
  const dispatch = useDispatch();
  const { ActiveFilter, Active, Completed } = useQuery(`
    active_filter = ActiveFilter.
    active(Active).
    completed(Completed).
  `) as {ActiveFilter: string, Active: string[], Completed: string[]};

  const itemWord = Active.length === 1 ? 'item' : 'items';

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{Active.length}</strong> {itemWord} left
      </span>
      <ul className="filters">
        {Object.keys(FILTER_TITLES).map(filter => (
          <li key={filter}>
            <a
              className={classnames({ selected: filter === ActiveFilter })}
              style={{ cursor: 'pointer' }}
              onClick={() => dispatch('set_active_filter', { filter })}
            >
              {FILTER_TITLES[filter as "all" | "completed" | "active"]}
            </a>
          </li>
        ))}
      </ul>
      {Completed.length && (
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
