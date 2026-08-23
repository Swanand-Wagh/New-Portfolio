import { motion } from 'framer-motion';

import EmptyState from '@/common/components/elements/EmptyState';
import { BlogItemProps } from '@/common/types/blog';

import BlogCard from './BlogCard';

interface BlogListProps {
  blogs: BlogItemProps[];
}

const BlogList = ({ blogs }: BlogListProps) => {
  if (blogs.length === 0) {
    return <EmptyState message='No Post Found.' />;
  }

  return (
    <div className='space-y-5'>
      <div className='flex items-center gap-2 px-1 text-xl font-medium'>
        <h4 className='text-neutral-800 dark:text-neutral-200'>
          Latest Articles
        </h4>
        <span className='rounded-full bg-neutral-300 px-2 py-1 text-xs text-neutral-900 dark:bg-neutral-700 dark:text-neutral-50'>
          {blogs.length}
        </span>
      </div>

      <div className='grid grid-cols-1 gap-5 sm:grid-cols-2'>
        {blogs.map((blog, index) => (
          <motion.div
            key={blog.slug}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <BlogCard {...blog} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
