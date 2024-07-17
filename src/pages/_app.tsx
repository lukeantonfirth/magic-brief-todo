import React from 'react';
import { AppProps } from 'next/app';
import '../styles/globals.css';
import { withTRPC } from '@trpc/next';

import '@fontsource/poppins';

import type { ServerRouter } from '@/server/router';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

// Plz kindly run locally! I can get this running later in the week ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️ Deets in doc!
export default withTRPC<ServerRouter>({
  config() {
    const url = process.env.URL_WHERE_THE_DB_WILL_BE_HOSTED_EVENTUALLY
      ? `https://${process.env.URL_WHERE_THE_DB_WILL_BE_HOSTED_EVENTUALLY}/api/trpc`
      : 'http://localhost:3000/api/trpc';

    return { url };
  },
  ssr: true,
})(App);
