import { NextPage } from 'next';
import { NextSeo } from 'next-seo';

import Container from '@/common/components/elements/Container';
import PageHeading from '@/common/components/elements/PageHeading';
import Dashboard from '@/modules/dashboard';

const PAGE_TITLE = 'Dashboard';
const PAGE_DESCRIPTION =
  'My personal dashboard, built with Next.js API routes deployed as serverless functions.';

const DashboardPage: NextPage = () => {
  return (
    <>
      <NextSeo title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
      <Container data-aos='fade-up'>
        <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
        <Dashboard />
      </Container>
    </>
  );
};

export default DashboardPage;
