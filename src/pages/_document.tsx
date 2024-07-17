import React from 'react';
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="description"
            content="Stay on top of all the random stuff you have to do with this simple and easy to use to do list, so you can remember to go to the toilet... or just get yourself a pair of magic briefs! Just crap right in them! the crap is then processed through the briefs and omitted into the atmosphere reducing carbon emissions by 99.9%!"
          />
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="robots" content="index, follow" />
          <meta
            name="keywords"
            content="Todo List, Task Manager, Productivity, Magic Briefs, Carbon Emissions"
          />
          <meta name="author" content="Your Name" />
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <meta property="og:title" content="Todo List" />
          <meta
            property="og:description"
            content="Stay on top of all the random stuff you have to do with this simple and easy to use to do list, so you can remember to go to the toilet... or just get yourself a pair of magic briefs! Just crap right in them! the crap is then processed through the briefs and omitted into the atmosphere reducing carbon emissions by 99.9%!"
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content="https://www.yourwebsite.com"
          />
          <meta
            property="og:image"
            content="https://www.yourwebsite.com/og-image.jpg"
          />
          <meta property="og:site_name" content="Todo List" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Todo List" />
          <meta
            name="twitter:description"
            content="Stay on top of all the random stuff you have to do with this simple and easy to use to do list, so you can remember to go to the toilet... or just get yourself a pair of magic briefs! Just crap right in them! the crap is then processed through the briefs and omitted into the atmosphere reducing carbon emissions by 99.9%!"
          />
          <meta
            name="twitter:image"
            content="https://www.yourwebsite.com/twitter-image.jpg"
          />
          <meta name="twitter:creator" content="@yourtwitterhandle" />
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
