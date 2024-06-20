'use client';

import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { SessionProvider } from 'next-auth/react';
import store from '../../store';

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <SessionProvider>
      <Provider store={store}>{children}</Provider>
    </SessionProvider>
  );
};

export default Providers;
