import { Head, Html, Main, NextScript } from 'next/document';

import { firaCode, jakartaSans, soraSans } from '@/common/styles/fonts';

export default function Document() {
  return (
    <Html
      lang='en'
      className={`${jakartaSans.variable} ${soraSans.variable} ${firaCode.variable}`}
    >
      <Head>
        <meta name='theme-color' content='#1a1a1a' />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/favicon/swanand.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon/swanand.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon/swanand.png'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
