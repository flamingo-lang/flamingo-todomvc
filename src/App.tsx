import React from 'react';
import { Provider, createSession } from 'flamingo';
import { Header } from './Header';
import { MainSection } from './MainSection';
import { logic } from './logic';

export const App = () => (
  <Provider session={createSession(logic)}>
    <div>
      <Header />
      <MainSection />
    </div>
  </Provider>
);
