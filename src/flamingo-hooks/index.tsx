import React, { createContext, FunctionComponent, useContext, useEffect } from "react";
import { Subject } from "rxjs";
import { mergeMap } from "rxjs/operators";
import { useObservable } from "rxjs-hooks";
import Fl from "flamingo-lang";

let session: Fl.FlamingoSession; 

export const Provider: FunctionComponent<{ logic: string}> = ({
  logic,
  children,
}) => {
  useEffect(() => {
    session = Fl.createSession(logic);
  }, []);
  return (
    <>
      {children}
    </>
  );
};

const actionSubject = new Subject();

export const useQuery = (query: string): Fl.FlamingoQueryResult | null => {
  console.log("hello query");
  console.log(session);
  const obs = actionSubject.pipe(mergeMap(() => Fl.runQuery(session, query).then(x => {
    console.log(x);
    return x;
  })));
  return useObservable(() => obs);
};

export const useDispatch = () => {
  console.log("hello dispatch");
  console.log(session);
  // return (...x: any): any => session 
  return (action: string, attributes?: Record<string, Fl.FlamingoValue>) =>
    Fl.dispatch(session, action, attributes ?? {})//.then(() => actionSubject.next())
      .then(() => console.log("done with dispatch")).then(() => {
        console.log(session);
        Fl.runQuery(session, "active_filter = Active.").then(x => {
          console.log(x);
          return x;
        });
      })
};
