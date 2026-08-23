import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { NextSeo } from 'next-seo';

import Container from '@/common/components/elements/Container';
import { BlogDetailProps } from '@/common/types/blog';
import BlogDetail from '@/modules/blog/components/BlogDetail';
import { getBlogBySlug, getBlogSlugs } from '@/services/blog';

interface BlogDetailPageProps {
  blog: BlogDetailProps;
}

const BlogDetailPage: NextPage<BlogDetailPageProps> = ({ blog }) => {
  return (
    <>
      <NextSeo title={blog.title} description={blog.excerpt} />
      <Container data-aos='fade-up'>
        <BlogDetail {...blog} />
      </Container>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: getBlogSlugs().map((slug) => ({ params: { slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<BlogDetailPageProps> = async ({
  params,
}) => ({
  props: { blog: getBlogBySlug(params?.slug as string) },
});

export default BlogDetailPage;
