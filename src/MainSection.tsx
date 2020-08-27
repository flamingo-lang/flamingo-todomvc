import React from "react";
import { Footer } from "./Footer";
import { TodoList } from "./TodoList";

import { useDispatch, useQuery } from 'flamingo';

export const MainSection = () => {
  const dispatch = useDispatch();
  const { Active, Completed } = useQuery(`
  active(Active).
  completed(Completed).
  `);

  const all_complete = Active.length === Completed.length;
  return (
    <section className="main">
      {Active.length && (
        <span>
          <input
            className="toggle-all"
            type="checkbox"
            checked={all_complete}
            readOnly
          />
          <label onClick={() => dispatch("set_alll", {
            state: all_complete ? "incomplete" : "complete"
          })} />
        </span>
      )}
      <TodoList/>
      {Active.length && <Footer/>}
    </section>
  );
};
