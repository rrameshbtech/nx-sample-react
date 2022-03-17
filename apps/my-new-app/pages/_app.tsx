import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { initI18N } from '@nx-sample-react/translator';
import config from 'next-i18next.config'

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

export default initI18N(CustomApp, config);
