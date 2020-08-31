import React, { FunctionComponent, useEffect, useMemo } from 'react';
import { Observable, Subject } from 'rxjs';
import { mergeMap, startWith } from 'rxjs/operators';
import { useObservable } from 'rxjs-hooks';
import Fl from 'flamingo-lang';

let p: Promise<void>;
let res: () => void;

export const Provider: FunctionComponent<{ logic: string }> = ({
  logic,
  children,
}) => {
  p = new Promise((r) => {
    res = r;
  });

  useEffect(() => {
    Fl.createSession(logic);
    (async () => {
      await Fl.dispatch('set_active_filter', { filter: 'all' });
      console.log(await Fl.runQuery('active_filter = Active.'));
      res();
    })();
  }, []);
  return <>{children}</>;
};

const actionSubject = new Subject();

const queryMap = new Map<string, Observable<Fl.FlamingoQueryResult>>();
export const useQuery = (
  query: string,
  defaultValue: Fl.FlamingoQueryResult,
): Fl.FlamingoQueryResult | null => {
  if (!queryMap.has(query)) {
    queryMap.set(query, actionSubject.pipe(
      startWith(defaultValue),
      mergeMap(async () => {
        await p;
        return Fl.runQuery(query);

      }),
    ));
    queryMap.get(query)?.subscribe((x) => {
      console.log("Obs", query, x);
     });
  }
  const obs = queryMap.get(query);
  return useObservable(() => obs!, defaultValue);
};

export const useDispatch = () => {
  return (action: string, attributes?: Record<string, Fl.FlamingoValue>) => {
    (async () => {
      await p;
      await Fl.dispatch(action, attributes ?? {});
      console.log('done with dispatch');
      actionSubject.next();
      const results = Fl.runQuery('active_filter = Active.');
      console.log('ActiveFilter from dispatch', results);
    })();
  };
};
