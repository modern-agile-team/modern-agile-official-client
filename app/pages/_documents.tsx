import React from 'react';
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

class MyDocument implements Document {
  styles: any;
  context: any;
  setState: any;
  forceUpdate: any;
  props: any;
  state: any;
  refs: any;

  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App: any) => (props: any) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@500&display=swap"
            rel="stylesheet"></link>
          <link rel="shortcut icon" href="/favicon.ico" />
          <title>Modern Agile</title>
          {/* og */}
          <meta name="description" content="모던애자일 공식 사이트" />
          <meta name="keywords" content="모던애자일 공식 사이트" />
          <meta
            property="og:url"
            content="https://modern-agile-official-client.vercel.app/"
          />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="모던 애자일 공식 사이트" />
          <meta property="og:description" content="모던 애자일 공식 사이트" />
          <meta
            property="og:image"
            content="https://dbgl6r3fnusyg.cloudfront.net/seo/bunjang-og-image.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
