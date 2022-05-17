import React from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import GlobalStyle from 'styles/globalStyles';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import dynamic from 'next/dynamic';

const Layout = dynamic(() => import('components/Layout'), {
  ssr: true,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Modern Agile</title>
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
