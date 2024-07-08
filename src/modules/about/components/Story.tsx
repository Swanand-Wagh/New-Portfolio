import { ABOUT } from '@/common/constant/about';
import Breakline from '@/common/components/elements/Breakline';
import Skills from './Skills';

const Story = () => {
  return (
    <>
      <section
        className='space-y-4 leading-[1.8] md:leading-loose text-neutral-800 dark:text-neutral-300'
        dangerouslySetInnerHTML={{ __html: ABOUT }}
      />
      <Breakline className='my-8' />
      <Skills />
    </>
  );
};

export default Story;
