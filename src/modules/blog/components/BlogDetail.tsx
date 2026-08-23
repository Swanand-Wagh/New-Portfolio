import { HiOutlineClock as ClockIcon } from 'react-icons/hi';

import Breakline from '@/common/components/elements/Breakline';
import MarkdownRenderer from '@/common/components/elements/MarkdownRenderer';
import { formatDate } from '@/common/helpers';
import { BlogDetailProps } from '@/common/types/blog';

const BlogDetail = ({
  title,
  date,
  content,
  reading_time,
  tags,
}: BlogDetailProps) => {
  return (
    <>
      <h1 className='text-2xl font-semibold font-sora'>{title}</h1>
      <div className='mb-6 flex flex-col justify-between gap-2 border-b border-dashed border-neutral-600 pb-6 pt-5 text-[14px] text-neutral-600 dark:text-neutral-400 sm:flex-row'>
        <div>
          Published on
          <span className='px-1 font-medium'>{formatDate(date)}</span>
        </div>
        <div className='flex items-center gap-1 font-medium'>
          <ClockIcon size={16} />
          <div className='ml-0.5 flex gap-1'>
            <span>{reading_time}</span>
            <span>Minutes Read</span>
          </div>
        </div>
      </div>

      <div className='space-y-6 leading-[1.8] dark:text-neutral-300'>
        <MarkdownRenderer>{content}</MarkdownRenderer>
      </div>

      {tags?.length >= 1 && (
        <div className='my-10 space-y-2'>
          <h6 className='text-lg font-medium'>Tags:</h6>
          <div className='flex flex-wrap gap-2 pt-2'>
            {tags.map((tag) => (
              <div
                key={tag}
                className='rounded-full bg-neutral-200 px-4 py-1 text-[14px] font-medium text-neutral-600 dark:bg-neutral-700 dark:text-neutral-200'
              >
                <span className='mr-1 font-semibold'>#</span>
                {tag}
              </div>
            ))}
          </div>
        </div>
      )}
      <Breakline className='!my-10' />
    </>
  );
};

export default BlogDetail;
