import React from 'react';
import { Provider, createSession } from 'flamingo';
import { Header } from './2Header';
import { MainSection } from './3MainSection';
// This file contains our ALM program as a string.
// In the future, we'll support compiling ALM
// programs directly to Javascript, which open
// sorts of new stuff (better performance, type safety,
// better DevUX).
import { logic } from './0logic';


export const App = () => (
  // We load our logic via createSession and
  // provide it to the rest of our app via context.
  <Provider session={createSession(logic)}>
    <div>
      <Header />
      <MainSection />
    </div>
  </Provider>
);
