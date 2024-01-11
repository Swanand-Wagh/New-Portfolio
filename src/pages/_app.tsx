import AOS from 'aos';
import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from 'next-themes';
import { useEffect } from 'react';

import 'tailwindcss/tailwind.css';
import 'aos/dist/aos.css';
import '@/common/styles/globals.css';

import Layout from '@/common/components/layouts';
import { firaCode, jakartaSans, soraSans } from '@/common/styles/fonts';

const ProgressBar = dynamic(
  () => import('src/common/components/elements/ProgressBar'),
  { ssr: false }
);

const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 50,
    });
  }, []);

  return (
    <>
      <style jsx global>
        {`
          html {
            --jakartaSans-font: ${jakartaSans.style.fontFamily};
            --soraSans-font: ${soraSans.style.fontFamily};
            --firaCode-font: ${firaCode.style.fontFamily};
          }
        `}
      </style>

      <SessionProvider session={session}>
        <ThemeProvider attribute='class' defaultTheme='dark'>
          <Layout>
            <ProgressBar />
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </SessionProvider>
    </>
  );
};

export default App;
