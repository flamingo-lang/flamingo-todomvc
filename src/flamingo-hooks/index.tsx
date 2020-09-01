import React, { FunctionComponent, useContext, createContext } from 'react';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { useObservable } from 'rxjs-hooks';
import Fl from 'flamingo-lang';
import { run } from './clingo';

const Session = createContext<{
  runQuery: ReturnType<typeof Fl.makeSession>;
  history: Fl.FlamingoAction[];
}>((null as unknown) as any);

export const Provider: FunctionComponent<{ logic: string }> = ({
  logic,
  children,
}) => {
  return (
    <Session.Provider
      value={{
        runQuery: Fl.makeSession(run, logic),
        history: [
          ['new_todo', { new_text: '"Learn logic programming"' }],
          ['toggle_todo', {target: 1}],
          ['new_todo', { new_text: '"Build sweet, rock-solid apps"' }],
          ["set_active_filter", {filter: "all"}],
          ["set_active_filter", {filter: "completed"}],
        ],
      }}
    >
      {children}
    </Session.Provider>
  );
};

const actionSubject = new Subject();

let queryToAns: Map<string, Fl.FlamingoQueryResult>;

const queryToAnsObs = new Map<string, Observable<Fl.FlamingoQueryResult>>();

export const useQuery = (
  query: string,
): Fl.FlamingoQueryResult | null | undefined => {
  if (!queryToAnsObs.has(query)) {
    queryToAnsObs.set(
      query,
      actionSubject.pipe(map(() => {
        const res = queryToAns.get(query) ?? []
        return res;
      })),
    );

    const { runQuery, history } = useContext(Session);
    queriesChanged = true;
    doRunQuery(runQuery, history);
  }

  const obs = queryToAnsObs.get(query);
  return useObservable(() => obs!, []);
};

let historyChanged = true;
let queriesChanged = true;

const doRunQuery = async (
  runQuery: ReturnType<typeof Fl.makeSession>,
  history: Fl.FlamingoAction[],
) => {
  if (!historyChanged && !queriesChanged) {
    return;
  }

  const userQueries = Array.from(queryToAnsObs.keys()).map((x) =>
    x.replace('\n', ''),
  );
  const queries = [...userQueries].map((x) => x.replace('\n', ''));
  const results = await runQuery(queries, history as any);
  queryToAns = results;
  actionSubject.next();
  historyChanged = false;
  queriesChanged = false;
};

export const useDispatch = () => {
  const { runQuery, history } = useContext(Session);
  return (action: string, attributes?: Record<string, Fl.FlamingoValue>) => {
    (async () => {
      const attrs = attributes ?? {};
      const conv_attributes = Object.keys(attrs).reduce((prev, curr) => {
        const v = attrs[curr];
        (prev[curr] = typeof v === 'string' && v.includes(" ") ? `"${v}"` : v.toString()),
          attributes ?? {};
        return prev;
      }, {} as Record<string, Fl.FlamingoValue>);

      const next: [string, Record<string, Fl.FlamingoValue>] = [
        action,
        conv_attributes ?? {},
      ];

      history.push(next);
      historyChanged = true;
      doRunQuery(runQuery, history);
    })();
  };
};
