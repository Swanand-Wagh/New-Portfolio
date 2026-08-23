import { GetStaticProps, NextPage } from 'next';
import { NextSeo } from 'next-seo';

import Container from '@/common/components/elements/Container';
import PageHeading from '@/common/components/elements/PageHeading';
import { BlogItemProps } from '@/common/types/blog';
import BlogList from '@/modules/blog';
import { getAllBlogs } from '@/services/blog';

const PAGE_TITLE = 'Blogs';
const PAGE_DESCRIPTION =
  'Thoughts, notes and things I have learned while building software.';

interface BlogPageProps {
  blogs: BlogItemProps[];
}

const BlogPage: NextPage<BlogPageProps> = ({ blogs }) => {
  return (
    <>
      <NextSeo title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
      <Container data-aos='fade-up'>
        <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
        <BlogList blogs={blogs} />
      </Container>
    </>
  );
};

export const getStaticProps: GetStaticProps<BlogPageProps> = async () => ({
  props: { blogs: getAllBlogs() },
});

export default BlogPage;
