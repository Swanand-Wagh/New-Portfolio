import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

import { calculateReadingTime } from '@/common/helpers';
import {
  BlogDetailProps,
  BlogFrontMatterProps,
  BlogItemProps,
} from '@/common/types/blog';

// Server-only: called from getStaticProps / getStaticPaths.
const BLOG_DIR = path.join(process.cwd(), 'src/contents/blog');

const read = (slug: string) => {
  const file = fs.readFileSync(path.join(BLOG_DIR, `${slug}.mdx`), 'utf8');
  const { data, content } = matter(file);
  return { frontMatter: data as BlogFrontMatterProps, content };
};

export const getBlogSlugs = (): string[] => {
  // git does not track empty directories, so a checkout with no posts yet has
  // no BLOG_DIR at all. Without this the build dies in getStaticPaths.
  if (!fs.existsSync(BLOG_DIR)) return [];

  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.replace(/\.mdx$/, ''));
};

export const getAllBlogs = (): BlogItemProps[] =>
  getBlogSlugs()
    .map((slug) => {
      const { frontMatter, content } = read(slug);
      return {
        ...frontMatter,
        slug,
        reading_time: calculateReadingTime(content),
      };
    })
    .filter((blog) => blog.is_show)
    .sort((a, b) => +new Date(b.date) - +new Date(a.date));

export const getBlogBySlug = (slug: string): BlogDetailProps => {
  const { frontMatter, content } = read(slug);
  return {
    ...frontMatter,
    slug,
    content,
    reading_time: calculateReadingTime(content),
  };
};
