import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { initI18N } from '@nx-sample-react/lib1';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to my-new-app!</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default initI18N(CustomApp);
