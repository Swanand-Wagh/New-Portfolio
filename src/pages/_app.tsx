import AOS from 'aos';
import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import { DefaultSeo } from 'next-seo';
import { ThemeProvider } from 'next-themes';
import { useEffect } from 'react';

import 'tailwindcss/tailwind.css';
import 'aos/dist/aos.css';
import '@/common/styles/globals.css';

import Layout from '@/common/components/layouts';
import { firaCode, jakartaSans, soraSans } from '@/common/styles/fonts';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://swanandwagh.com';

const ProgressBar = dynamic(
  () => import('@/common/components/elements/ProgressBar'),
  { ssr: false },
);

const App = ({ Component, pageProps }: AppProps) => {
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

      <DefaultSeo
        defaultTitle='Swanand Wagh - Software Engineer'
        titleTemplate='%s - Swanand Wagh'
        description='Software Engineer building bold, ambitious products. Portfolio showcasing projects, career, and contributions.'
        canonical={SITE_URL}
        openGraph={{
          type: 'website',
          locale: 'en_US',
          url: SITE_URL,
          siteName: 'Swanand Wagh',
          title: 'Swanand Wagh - Software Engineer',
          description:
            'Software Engineer building bold, ambitious products. Portfolio showcasing projects, career, and contributions.',
          images: [
            {
              url: `${SITE_URL}/images/swanand.png`,
              width: 400,
              height: 400,
              alt: 'Swanand Wagh',
            },
          ],
        }}
        twitter={{
          handle: '@swanandwagh1208',
          cardType: 'summary',
        }}
        additionalMetaTags={[
          { name: 'author', content: 'Swanand Wagh' },
        ]}
      />

      <ThemeProvider attribute='class' defaultTheme='dark'>
        <Layout>
          <ProgressBar />
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
};

export default App;
