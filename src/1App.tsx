import React from 'react';
// flamingo-hooks provides a React Hooks
// interface into Flamingo, which is the default.
// Eventually, flamingo-hooks will be a separate
// lib.
import { Provider } from './flamingo-hooks';
import { Header } from './2Header';
import { MainSection } from './3MainSection';
// This file contains our ALM program as a string.
// In the future, we'll support compiling ALM
// programs directly to Javascript, which open
// sorts of new stuff (dramatically better performance,
// type safety, better DevUX, etc).
import { logic } from './0logic';

export const App = () => (
  // We load our logic via createSession and
  // provide it to the rest of our app via context.
  <Provider logic={logic}>
    <div>
      <Header />
      <MainSection />
    </div>
  </Provider>
);
